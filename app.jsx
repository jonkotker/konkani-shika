const SUPABASE_URL = "https://vyurftslyadgimobxcda.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_IRChBzmkFgMrBWbq1GcLsA_Mm9VlSwc";
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Merge two progress snapshots, keeping whichever side is more advanced per-field
// rather than blindly trusting one side — protects against a stale/empty cloud
// copy silently overwriting real local progress (or vice versa).
function mergeProgress(local, cloud) {
  const merged = { ...local };
  Object.keys(cloud || {}).forEach(key => {
    if (key === "srs") {
      const localSrs = local.srs || {};
      const cloudSrs = cloud.srs || {};
      const mergedSrs = { ...localSrs };
      Object.keys(cloudSrs).forEach(id => {
        const c = cloudSrs[id], l = localSrs[id];
        if (!l || (c.reps ?? 0) > (l.reps ?? 0) || new Date(c.dueDate) > new Date(l.dueDate)) {
          mergedSrs[id] = c;
        }
      });
      merged.srs = mergedSrs;
    } else if (key === "onboarded") {
      merged.onboarded = local.onboarded || cloud.onboarded;
    } else {
      const c = cloud[key], l = local[key];
      if (!l) merged[key] = c;
      else if (c && ((c.score ?? 0) > (l.score ?? 0) ||
               (c.completedAt && l.completedAt && new Date(c.completedAt) > new Date(l.completedAt)))) {
        merged[key] = c;
      }
    }
  });
  return merged;
}

function App() {
  const [user, setUser] = React.useState(null);
  const [authLoading, setAuthLoading] = React.useState(true);
  const [syncing, setSyncing] = React.useState(false);

  React.useEffect(() => {
    sb.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });
    const { data: listener } = sb.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  function signInWithGoogle() {
    sb.auth.signInWithOAuth({ provider: "google", options: { redirectTo: window.location.origin + window.location.pathname } });
  }
  function signOut() { sb.auth.signOut(); }

  const [progress, setProgress] = React.useState(() => {
    try { const s = localStorage.getItem("konkani-progress"); return s ? JSON.parse(s) : {}; }
    catch(e) { return {}; }
  });

  React.useEffect(() => {
    if (!user) return;
    setSyncing(true);
    sb.from("progress").select("data").eq("user_id", user.id).maybeSingle()
      .then(({ data, error }) => {
        if (error) console.error("Supabase read failed:", error);
        if (data && data.data) {
          const merged = mergeProgress(progress, data.data);
          setProgress(merged);
          try { localStorage.setItem("konkani-progress", JSON.stringify(merged)); } catch(e) {}
          sb.from("progress").upsert({ user_id: user.id, data: merged }).then(({ error }) => {
            if (error) console.error("Supabase merge push failed:", error);
          });
        } else {
          sb.from("progress").upsert({ user_id: user.id, data: progress }).then(({ error }) => {
            if (error) console.error("Supabase initial push failed:", error);
          });
        }
        setSyncing(false);
      });
  }, [user]);

  const [screen, setScreen] = React.useState("home");
  const [dayIdx, setDayIdx] = React.useState(null);
  const [phase, setPhase] = React.useState("intro");
  const [wordIdx, setWordIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [quizIdx, setQuizIdx] = React.useState(0);
  const [chosen, setChosen] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [typeIdx, setTypeIdx] = React.useState(0);
  const [typedValue, setTypedValue] = React.useState("");
  const [typeSubmitted, setTypeSubmitted] = React.useState(false);
  const [typeCorrect, setTypeCorrect] = React.useState(false);
  const [typeResults, setTypeResults] = React.useState([]);

  const done = Object.keys(progress).length;

  const [shuffledQuiz, setShuffledQuiz] = React.useState([]);
  function startDay(i) {
    setDayIdx(i);setPhase("intro");setWordIdx(0);setFlipped(false);
    setShuffledQuiz(shuffleQuiz(LESSONS[i].quiz));
    setQuizIdx(0);setChosen(null);setScore(0);setScreen("lesson");
    setTypeIdx(0);setTypedValue("");setTypeSubmitted(false);setTypeCorrect(false);setTypeResults([]);
  }
  function answerQ(i) { if(chosen!==null)return; setChosen(i); }
  function checkTyped() {
    const L=LESSONS[dayIdx];
    const w=L.words[typeIdx];
    const correct = matchesRoman(typedValue, w.roman);
    setTypeCorrect(correct);
    setTypeSubmitted(true);
    setTypeResults(r => [...r, correct]);
  }
  function nextTyped() {
    const L=LESSONS[dayIdx];
    if (typeIdx < L.words.length - 1) {
      setTypeIdx(i => i + 1);
      setTypedValue("");
      setTypeSubmitted(false);
      setTypeCorrect(false);
    } else {
      setPhase("quiz");
      setQuizIdx(0);
      setScore(0);
      setChosen(null);
    }
  }
  function saveProgress(newP) {
    try { localStorage.setItem("konkani-progress", JSON.stringify(newP)); } catch(e) {}
    setProgress(newP);
    if (user) {
      sb.from("progress").upsert({ user_id: user.id, data: newP }).then(({ error }) => {
        if (error) console.error("Supabase save failed:", error);
      });
    }
  }
  function nextQ() {
    const L=LESSONS[dayIdx];
    const queue=(shuffledQuiz.length?shuffledQuiz:L.quiz);
    const Qcur=queue[quizIdx];
    const ok=chosen===Qcur.answer;
    const ns=score+(ok && !Qcur.isRetry ? 1 : 0);
    let newQueue=queue;
    if(!ok){
      newQueue=[...queue, {...Qcur, isRetry:true}];
      setShuffledQuiz(newQueue);
    }
    if(quizIdx<newQueue.length-1){setScore(ns);setChosen(null);setQuizIdx(q=>q+1);}
    else{
      const newSrs = seedSrsForDay(dayIdx, progress);
      const newP = {...progress,[dayIdx]:{score:ns,total:L.quiz.length,completedAt:new Date().toISOString()},srs:newSrs};
      saveProgress(newP);
      setScore(ns);setChosen(null);setPhase("result");
    }
  }

  const [reviewQueue, setReviewQueue] = React.useState([]);
  const [reviewIdx, setReviewIdx] = React.useState(0);
  const [reviewFlipped, setReviewFlipped] = React.useState(false);
  const [reviewPhase, setReviewPhase] = React.useState("cards");
  const [reviewStats, setReviewStats] = React.useState({correct:0, total:0});

  function startReview() {
    const due = shuffle(getDueWords(progress));
    setReviewQueue(due);
    setReviewIdx(0);
    setReviewFlipped(false);
    setReviewPhase("cards");
    setReviewStats({correct:0, total:0});
    setScreen("review");
  }

  function gradeReview(correct) {
    const item = reviewQueue[reviewIdx];
    const prevEntry = (progress.srs || {})[item.id];
    const newEntry = nextSrsState(prevEntry, correct);
    const newSrs = {...(progress.srs || {}), [item.id]: newEntry};
    const newP = {...progress, srs: newSrs};
    saveProgress(newP);
    setReviewStats(s => ({correct: s.correct + (correct?1:0), total: s.total + 1}));
    setReviewFlipped(false);
    if (reviewIdx < reviewQueue.length - 1) setReviewIdx(i => i + 1);
    else setReviewPhase("done");
  }

  // ── ONBOARDING (first-time intro) ────────────────────────────────────────
  if (!progress.onboarded) {
    return (
      <div className="app-wrap">
        <div className="card w-560" style={{marginTop:"10vh"}}>
          <div className="home-title">स्वागत है! 🌊</div>
          <p className="intro-text">यह app आपको Hindi से Konkani सीखने में मदद करेगा — हर दिन सिर्फ़ 5 नए शब्द।</p>
          <p className="intro-text">हर lesson के बाद एक छोटा quiz होता है, और सीखे हुए शब्द अपने आप spaced repetition में जुड़ जाते हैं — ताकि आप उन्हें भूलें नहीं।</p>
          <p className="intro-text">Google से sign in करें तो आपकी progress सभी devices पर automatically sync हो जाएगी।</p>
          <button className="btn btn-primary" onClick={()=>saveProgress({...progress, onboarded:true})}>चलिए शुरू करें →</button>
        </div>
      </div>
    );
  }

  // ── HOME ────────────────────────────────────────────────────────────────
  if (screen === "home") {
    return (
      <div className="app-wrap">
        <div className="top-bar top-bar--home w-580">
          <div className="brand">Konkani Shika</div>
          <div className="badge badge--lg">{done} / {LESSONS.length} days</div>
        </div>
        <div className="auth-row w-580">
          {authLoading ? null : user ? (
            <>
              <span className="auth-email">{syncing?"Syncing…":user.email}</span>
              <button onClick={signOut} className="btn-link btn-link--sm">साइन आउट</button>
            </>
          ) : (
            <button onClick={signInWithGoogle} className="google-btn">
              <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.3 29.4 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.3 2.8l6-6C33.5 6.5 29 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.5-.2-2.9-.9-4.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c2.8 0 5.3 1 7.3 2.8l6-6C33.5 6.5 29 4.5 24 4.5c-7.5 0-13.9 4.2-17.2 10.2z"/><path fill="#4CAF50" d="M24 45.5c5.3 0 10.1-1.8 13.7-4.9l-6.3-5.4c-2 1.4-4.6 2.3-7.4 2.3-5.3 0-9.9-3.4-11.5-8.1l-6.4 5C9.9 40.9 16.4 45.5 24 45.5z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.3 5.4C40.4 36.4 44.5 31.2 44.5 25c0-1.5-.2-2.9-.9-4.5z"/></svg>
              Google से साइन इन करें
            </button>
          )}
        </div>
        <div className="w-580 card card--flat">
          <div className="home-title">आपकी Konkani यात्रा 🌊</div>
          <div className="home-subtitle">हर दिन 5 शब्द — बस 5 मिनट। Hindi से Konkani, step by step।</div>
          <div className="progress-track">
            <div className="progress-fill" style={{width:`${(done/LESSONS.length)*100}%`}} />
          </div>
          <div className="progress-row">
            <div className="label-caps">{done} / {LESSONS.length} पूरे</div>
            {done>0&&<button onClick={()=>{if(window.confirm("Reset all progress?")){saveProgress({});}}} className="btn-link">रीसेट करें</button>}
          </div>
          {(() => {
            const dueCount = getDueWords(progress).length;
            if (dueCount === 0) return null;
            return (
              <div onClick={startReview} className="highlight-card highlight-card--blue">
                <div className="highlight-emoji">🔄</div>
                <div className="highlight-info">
                  <div className="highlight-title">रिवीजन ड्यू</div>
                  <div className="highlight-sub">{dueCount} शब्द रिवीजन के लिए तैयार</div>
                </div>
                <div className="highlight-cta highlight-cta--blue">start</div>
              </div>
            );
          })()}
          <div className="day-list">
            {LESSONS.map((L,i)=>{
              const d=!!progress[i], nx=!d&&(i===0||!!progress[i-1]), lk=!d&&!nx, p=progress[i];
              const rowClass = "day-row" + (d?" day-row--done":nx?" day-row--next":"") + (lk?" day-row--locked":"");
              return <div key={i} onClick={()=>!lk&&startDay(i)} className={rowClass}>
                <div className="day-emoji">{L.emoji}</div>
                <div className="day-info">
                  <div className="day-num">Day {i+1}</div>
                  <div className="day-theme">{L.themeHindi}</div>
                  <div className="day-meta">{L.themeEng} · {L.words.length} शब्द</div>
                </div>
                <div className="day-right">
                  {d&&<span className="pill pill--done">पूरा</span>}
                  {nx&&<span className="pill pill--next">start</span>}
                  {lk&&<span className="pill pill--locked">लॉक</span>}
                  {d&&p&&<span className="pill-note">{p.score}/{p.total} quiz</span>}
                  {d&&<button onClick={e=>{e.stopPropagation();startDay(i);}} className="btn-link">दोबारा करें</button>}
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── REVIEW ──────────────────────────────────────────────────────────────
  if (screen === "review") {
    const item = reviewQueue[reviewIdx];
    return (
      <div className="app-wrap">
        <div className="top-bar w-560">
          <div className="brand">Konkani Shika</div>
        </div>
        <div className="nav-row w-560">
          <button onClick={()=>setScreen("home")} className="btn-back">वापस</button>
          <div className="badge badge--blue" style={{marginLeft:"auto"}}>रिवीजन</div>
        </div>

        {reviewPhase === "cards" && item && (
          <div className="card w-560">
            <div className="label-caps" style={{display:"flex",justifyContent:"space-between",marginBottom:18}}>
              <span>शब्द</span>
              <span className="label-value--blue" style={{fontWeight:600}}>{reviewIdx+1} / {reviewQueue.length}</span>
            </div>
            <div key={"rev-"+reviewIdx} className="flip-card" onClick={()=>setReviewFlipped(f=>!f)}>
              <div className={"flip-inner" + (reviewFlipped?" is-flipped":"")}>
                <div className="flip-face">
                  <div className="flip-front-text">{item.word.hindi}</div>
                  <div className="flip-front-hint">Konkani याद करने के लिए tap करें</div>
                </div>
                <div className="flip-face flip-face--back accent-blue">
                  <div className="flip-back-text accent-blue">{item.word.konkani}</div>
                  <div className="flip-back-roman">{item.word.roman}</div>
                  <div className="flip-back-meaning">{item.word.meaning}</div>
                </div>
              </div>
            </div>
            <div style={{fontSize:11,color:"var(--dim)",textAlign:"center",marginBottom:16}}>{item.theme} से</div>
            {reviewFlipped ? (
              <div className="btn-row">
                <button className="btn btn-ghost btn-ghost--danger" style={{flex:1}} onClick={()=>gradeReview(false)}>अभी नहीं आता</button>
                <button className="btn btn-primary" style={{flex:1}} onClick={()=>gradeReview(true)}>याद है! ✓</button>
              </div>
            ) : (
              <div style={{fontSize:12,color:"var(--dim)",textAlign:"center"}}>Card को tap करें, फिर खुद को grade करें</div>
            )}
          </div>
        )}

        {reviewPhase === "done" && (
          <div className="card w-560">
            <div className="result-score">
              <div className="result-score-num result-score-num--blue">{reviewStats.correct}/{reviewStats.total}</div>
              <div className="result-score-msg">रिवीजन पूरा हुआ! 🌊</div>
            </div>
            <div style={{fontSize:13,color:"var(--dim)",textAlign:"center",lineHeight:1.6,marginBottom:20}}>
              जो शब्द सही हुए वो कुछ घंटों बाद फिर आएंगे। जो अभी याद नहीं हुए वो 1 घंटे बाद फिर दिखेंगे।
            </div>
            <div className="result-actions">
              <button className="btn btn-ghost" onClick={()=>setScreen("home")}>होम</button>
            </div>
          </div>
        )}

        {reviewPhase === "cards" && !item && (
          <div className="card w-560">
            <div style={{textAlign:"center",color:"var(--muted)",fontSize:14}}>अभी कोई शब्द due नहीं है।</div>
            <button className="btn btn-ghost" style={{marginTop:16}} onClick={()=>setScreen("home")}>होम</button>
          </div>
        )}
      </div>
    );
  }

  // ── LESSON ──────────────────────────────────────────────────────────────
  const L=LESSONS[dayIdx], W=L.words[wordIdx], Q=(shuffledQuiz.length?shuffledQuiz:L.quiz)[quizIdx];
  const phases=["intro","learn","type","quiz","result"], pi=phases.indexOf(phase);
  const fs=progress[dayIdx]?.score??score;

  return (
    <div className="app-wrap">
      <div className="top-bar w-560">
        <div className="brand">Konkani Shika</div>
      </div>
      <div className="nav-row w-560">
        <button onClick={()=>setScreen("home")} className="btn-back">वापस</button>
        <div className="phase-dots">
          {phases.map((p,i)=><div key={p} className={"dot" + (i===pi?" active":i<pi?" done":"")} />)}
        </div>
        <div className="badge" style={{marginLeft:"auto"}}>Day {dayIdx+1}</div>
      </div>

      {phase==="intro"&&<div className="card w-560">
        <div className="theme-header">
          <div className="theme-emoji">{L.emoji}</div>
          <div>
            <div className="theme-title">{L.themeHindi}</div>
            <div className="theme-sub">{L.themeEng} · {L.theme}</div>
          </div>
        </div>
        <p className="intro-text">{L.intro}</p>
        <p className="intro-meta">आज: <strong style={{color:"var(--orange)"}}>{L.words.length} शब्द</strong> + <strong style={{color:"var(--orange)"}}>{L.quiz.length} रैंडम quiz questions</strong></p>
        <button className="btn btn-primary" onClick={()=>setPhase("learn")}>शुरू करें</button>
      </div>}

      {phase==="learn"&&<div className="card w-560">
        <div className="label-caps" style={{display:"flex",justifyContent:"space-between",marginBottom:18}}>
          <span>शब्द</span>
          <span className="label-value">{wordIdx+1} / {L.words.length}</span>
        </div>
        <div key={"word-"+wordIdx} className="flip-card" onClick={()=>setFlipped(f=>!f)}>
          <div className={"flip-inner" + (flipped?" is-flipped":"")}>
            <div className="flip-face">
              <div className="flip-front-text">{W.hindi}</div>
              <div className="flip-front-hint">Konkani देखने के लिए tap करें</div>
            </div>
            <div className="flip-face flip-face--back accent-orange">
              <div className="flip-back-text accent-orange">{W.konkani}</div>
              <div className="flip-back-roman">{W.roman}</div>
              <div className="flip-back-meaning">{W.meaning}</div>
            </div>
          </div>
        </div>
        {flipped && <div className="info-box info-box--blue">
          <div className="info-box-label info-box-label--blue">याद रखने का तरीका</div>
          <div className="info-box-text info-box-text--blue">{W.tip}</div>
        </div>}
        <div className="btn-row">
          {wordIdx>0&&<button className="btn btn-ghost btn--auto" onClick={()=>{setWordIdx(i=>i-1);setFlipped(false);}}>पिछला</button>}
          <button className="btn btn-primary" style={{flex:1}} onClick={()=>{setFlipped(false);if(wordIdx<L.words.length-1)setWordIdx(i=>i+1);else{setPhase("type");setTypeIdx(0);setTypedValue("");setTypeSubmitted(false);setTypeCorrect(false);setTypeResults([]);}}}>
            {wordIdx<L.words.length-1?"अगला शब्द":"लिखने का अभ्यास करें"}
          </button>
        </div>
      </div>}

      {phase==="type"&&(() => {
        const tw = L.words[typeIdx];
        return <div className="card w-560">
          <div className="label-caps" style={{display:"flex",justifyContent:"space-between",marginBottom:18}}>
            <span>लिखने का अभ्यास</span>
            <span className="label-value">{typeIdx+1} / {L.words.length}</span>
          </div>
          <div className="flip-front-text" style={{marginBottom:6}}>{tw.hindi}</div>
          <div className="flip-front-hint" style={{marginBottom:16}}>इसे Konkani में Roman letters में टाइप करें</div>
          <input
            type="text"
            autoCorrect="off"
            autoCapitalize="off"
            autoComplete="off"
            spellCheck="false"
            value={typedValue}
            disabled={typeSubmitted}
            onChange={e=>setTypedValue(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter"&&!typeSubmitted&&typedValue.trim())checkTyped();}}
            placeholder="जैसे: Dev Barem Karum"
            className="text-input"
            autoFocus
          />
          {typeSubmitted && (
            <div className={"info-box " + (typeCorrect?"info-box--blue":"info-box--orange")} style={{marginTop:16}}>
              <div className={"info-box-label " + (typeCorrect?"info-box-label--blue":"info-box-label--orange")}>
                {typeCorrect?"✅ बिलकुल सही!":"❌ सही जवाब देखें"}
              </div>
              <div className="flip-back-text accent-orange" style={{textAlign:"left",marginBottom:4}}>{tw.konkani}</div>
              <div className={"info-box-text " + (typeCorrect?"info-box-text--blue":"info-box-text--orange")}>{tw.roman}</div>
            </div>
          )}
          <div className="btn-row" style={{marginTop:16}}>
            {!typeSubmitted ? (
              <button className="btn btn-primary" style={{flex:1}} disabled={!typedValue.trim()} onClick={checkTyped}>जाँचें</button>
            ) : (
              <button className="btn btn-primary" style={{flex:1}} onClick={nextTyped}>
                {typeIdx<L.words.length-1?"अगला शब्द":"Quiz शुरू करें"}
              </button>
            )}
          </div>
        </div>;
      })()}

      {phase==="quiz"&&<div className="card w-560">
        <div className="label-caps" style={{display:"flex",justifyContent:"space-between",marginBottom:18}}>
          <span>Quiz{Q.isRetry?" · दोबारा":""}</span>
          <span className="label-value">{quizIdx+1} / {(shuffledQuiz.length||L.quiz.length)}</span>
        </div>
        <div className="quiz-question">{Q.q}</div>
        <div className="quiz-options">
          {Q.options.map((opt,i)=>{
            let cls = "quiz-option";
            if(chosen!==null){
              if(i===Q.answer) cls += i===chosen ? " correct-picked" : " correct-reveal";
              else if(i===chosen) cls += " wrong-picked";
            }
            return <button key={i} disabled={chosen!==null} onClick={()=>answerQ(i)} className={cls}>{opt}</button>;
          })}
        </div>
        {chosen!==null&&<>
          <div className="explanation">
            {chosen===Q.answer?"✅ ":"❌ "}{Q.explanation}
          </div>
          <button className="btn btn-primary" onClick={nextQ}>{quizIdx<(shuffledQuiz.length||L.quiz.length)-1?"अगला सवाल":"नतीजा देखें"}</button>
        </>}
      </div>}

      {phase==="result"&&<div className="card w-560">
        <div className="result-score">
          <div className="result-score-num">{fs}/{L.quiz.length}</div>
          <div className="result-score-msg">{fs===L.quiz.length?"बहुत बढ़िया! सब सही! 🎉":fs>=Math.ceil(L.quiz.length/2)?"अच्छा किया! 💪":"अभ्यास से सब होता है 🌱"}</div>
        </div>
        <div className="info-box info-box--orange">
          <div className="info-box-label info-box-label--orange">सांस्कृतिक नोट</div>
          <div className="info-box-text info-box-text--orange">{L.cultural}</div>
        </div>
        <div className="word-summary-label">आज के शब्द — एक नज़र में</div>
        {L.words.map((w,i)=>(
          <div key={i} className="word-summary-row">
            <span className="word-summary-hindi">{w.hindi}</span>
            <span className="word-summary-konkani">{w.konkani}</span>
            <span className="word-summary-roman">{w.roman}</span>
          </div>
        ))}
        <div className="result-actions">
          {dayIdx<LESSONS.length-1&&<button className="btn btn-primary" onClick={()=>startDay(dayIdx+1)}>Day {dayIdx+2} शुरू करें →</button>}
          <button className="btn btn-ghost" onClick={()=>setScreen("home")}>होम — सभी दिन देखें</button>
          <button className="btn btn-ghost" onClick={()=>startDay(dayIdx)}>यह दिन दोबारा करें</button>
        </div>
      </div>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
