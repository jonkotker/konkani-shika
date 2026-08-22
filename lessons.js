const LESSONS = [
  {
    day: 1, theme: "Abhivadan", themeHindi: "\u0905\u092d\u093f\u0935\u093e\u0926\u0928", themeEng: "Greetings", emoji: "\uD83D\uDE4F",
    intro: "Konkani is spoken along India's western coast — Goa, Karnataka, Kerala. It's India's youngest official language! We start with the most important words: greetings.",
    words: [
      { hindi: "\u0928\u092e\u0938\u094d\u0924\u0947", konkani: "\u0926\u0947\u0935 \u092c\u0930\u0947\u0902 \u0915\u0930\u0941\u0902", roman: "Dev Barem Karum", meaning: "May God bless you — used as both hello & thank you", tip: "Unlike Hindi \u0928\u092e\u0938\u094d\u0924\u0947, Konkani greetings invoke God's blessing. You'll use this constantly!" },
      { hindi: "\u0906\u092a \u0915\u0948\u0938\u0947 \u0939\u0948\u0902?", konkani: "\u0924\u0941\u092e \u0915\u0938\u0947\u0902 \u0906\u0938\u093e\u0924?", roman: "Tum Kasem Aasat?", meaning: "How are you? (respectful)", tip: "'\u0924\u0941\u092e' in Konkani is the respectful 'you' — similar to \u0906\u092a in Hindi." },
      { hindi: "\u092e\u0948\u0902 \u0920\u0940\u0915 \u0939\u0942\u0901", konkani: "\u0939\u093e\u0902\u0935 \u092c\u0930\u094b \u0906\u0938\u093e\u0902", roman: "Haanv Baro Aasum", meaning: "I am fine", tip: "\u0939\u093e\u0902\u0935 = \u092e\u0948\u0902 — the most essential Konkani word. Learn it first!" },
      { hindi: "\u0905\u0932\u0935\u093f\u0926\u093e", konkani: "\u092f\u0947\u0924\u093e", roman: "Yeta", meaning: "Goodbye (literally: I will come back)", tip: "Konkani speakers say 'I'll come' instead of goodbye — it implies you'll meet again!" },
      { hindi: "\u0939\u093e\u0901 / \u0928\u0939\u0940\u0902", konkani: "\u0935\u094d\u0939\u092f / \u0928\u093e", roman: "Vhoy / Na", meaning: "Yes / No", tip: "\u0928\u093e = \u0928\u0939\u0940\u0902 — exactly like Hindi! \u0935\u094d\u0939\u092f sounds like 'vhoy' with a soft v." },
    ],
    quiz: [
      { q: "'\u0939\u093e\u0902\u0935' \u0915\u093e \u092e\u0924\u0932\u092c \u0915\u094d\u092f\u093e \u0939\u0948?", options: ["\u0906\u092a", "\u092e\u0948\u0902", "\u0935\u094b", "\u0939\u092e"], answer: 1, explanation: "\u0939\u093e\u0902\u0935 = \u092e\u0948\u0902 (I) — Konkani \u0915\u093e \u0938\u092c\u0938\u0947 \u0906\u0935\u0936\u094d\u092f\u0915 \u0936\u092c\u094d\u0926!" },
      { q: "Konkani \u092e\u0947\u0902 'Yes' \u0915\u0948\u0938\u0947 \u092c\u094b\u0932\u0924\u0947 \u0939\u0948\u0902?", options: ["\u0928\u093e", "\u092f\u0947\u0924\u093e", "\u0935\u094d\u0939\u092f", "\u092c\u0930\u094b"], answer: 2, explanation: "\u0935\u094d\u0939\u092f = \u0939\u093e\u0901 \u0964 \u0928\u093e = \u0928\u0939\u0940\u0902 — Hindi \u091c\u0948\u0938\u093e \u0939\u0940!" },
      { q: "'\u0926\u0947\u0935 \u092c\u0930\u0947\u0902 \u0915\u0930\u0941\u0902' \u0915\u093e use \u0915\u092c \u0915\u0930\u0924\u0947 \u0939\u0948\u0902?", options: ["Hello \u0915\u0947 \u0932\u093f\u090f", "Thank you \u0915\u0947 \u0932\u093f\u090f", "\u0926\u094b\u0928\u094b\u0902 — hello \u0914\u0930 thank you", "Goodbye \u0915\u0947 \u0932\u093f\u090f"], answer: 2, explanation: "\u092f\u0939 phrase hello \u0914\u0930 thank you \u0926\u094b\u0928\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0939\u0948!" },
      { q: "Konkani \u092e\u0947\u0902 'Goodbye' \u0915\u0948\u0938\u0947 \u0915\u0939\u0924\u0947 \u0939\u0948\u0902?", options: ["\u0926\u0947\u0935 \u092c\u0930\u0947\u0902 \u0915\u0930\u0941\u0902", "\u0935\u094d\u0939\u092f", "\u092f\u0947\u0924\u093e", "\u0939\u093e\u0902\u0935"], answer: 2, explanation: "\u092f\u0947\u0924\u093e = \u0905\u0932\u0935\u093f\u0926\u093e \u0964 \u0938\u0940\u0927\u093e \u0905\u0930\u094d\u0925 \u0939\u0948 'I will come' — \u092c\u0939\u0941\u0924 \u092a\u094d\u092f\u093e\u0930\u093e!" },
      { q: "'\u0924\u0941\u092e \u0915\u0938\u0947\u0902 \u0906\u0938\u093e\u0924?' \u0915\u093e \u0905\u0930\u094d\u0925?", options: ["\u0906\u092a \u0915\u0939\u093e\u0901 \u0939\u0948\u0902?", "\u0906\u092a \u0915\u094d\u092f\u093e \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902?", "\u0906\u092a \u0915\u0948\u0938\u0947 \u0939\u0948\u0902?", "\u0906\u092a \u0915\u094c\u0928 \u0939\u0948\u0902?"], answer: 2, explanation: "\u0924\u0941\u092e \u0915\u0938\u0947\u0902 \u0906\u0938\u093e\u0924? = \u0906\u092a \u0915\u0948\u0938\u0947 \u0939\u0948\u0902? \u0964 \u0924\u0941\u092e = respectful 'you' in Konkani." },
      { q: "Konkani \u092e\u0947\u0902 'No' \u0915\u094d\u092f\u093e \u0939\u0948?", options: ["\u0935\u094d\u0939\u092f", "\u0939\u093e\u0902\u0935", "\u0928\u093e", "\u092f\u0947\u0924\u093e"], answer: 2, explanation: "\u0928\u093e = \u0928\u0939\u0940\u0902 \u0964 Hindi \u091c\u0948\u0938\u093e \u0939\u0940 \u0939\u0948 — \u0906\u0938\u093e\u0928!" },
    ],
    cultural: "Konkani has no single script — it's written in Devanagari, Roman, Kannada, and Malayalam scripts. Goan Catholics use Roman; Hindus use Devanagari. This app uses both so you get comfortable with both!"
  },
  {
    day: 2, theme: "Kutumb", themeHindi: "\u092a\u0930\u093f\u0935\u093e\u0930", themeEng: "Family", emoji: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67",
    intro: "Family is everything in Konkani culture. Notice how some words feel close to Hindi — that's because both come from Sanskrit!",
    words: [
      { hindi: "\u092e\u093e\u0901", konkani: "\u0906\u0908", roman: "Aai", meaning: "Mother", tip: "\u0906\u0908 sounds like Marathi too! Coastal languages share a lot." },
      { hindi: "\u092a\u093f\u0924\u093e\u091c\u0940", konkani: "\u092c\u093e\u092c\u093e / \u092a\u093e\u092f", roman: "Baaba / Paay", meaning: "Father (\u092c\u093e\u092c\u093e informal, \u092a\u093e\u092f respectful)", tip: "\u092a\u093e\u092f is used in traditional and religious contexts." },
      { hindi: "\u092d\u093e\u0908", konkani: "\u092d\u093e\u0935", roman: "Bhaav", meaning: "Brother (older)", tip: "\u092d\u093e\u0935 is close to \u092d\u093e\u0908 — same Sanskrit root! Easy to remember." },
      { hindi: "\u092c\u0939\u0928", konkani: "\u092d\u092f\u0923", roman: "Bhayan", meaning: "Sister", tip: "\u092d\u092f\u0923 and \u092c\u0939\u0928 both come from Sanskrit 'bhagini'. Same ancestor!" },
      { hindi: "\u092c\u091a\u094d\u091a\u093e", konkani: "\u092d\u0941\u0930\u0917\u094b / \u092d\u0941\u0930\u0917\u0940", roman: "Bhurgo / Bhurgi", meaning: "Child (\u092d\u0941\u0930\u0917\u094b = boy, \u092d\u0941\u0930\u0917\u0940 = girl)", tip: "-o ending = masculine, -i = feminine. This pattern repeats throughout Konkani!" },
    ],
    quiz: [
      { q: "Konkani \u092e\u0947\u0902 '\u092e\u093e\u0901' \u0915\u094b \u0915\u094d\u092f\u093e \u0915\u0939\u0924\u0947 \u0939\u0948\u0902?", options: ["\u092c\u093e\u092c\u093e", "\u0906\u0908", "\u092d\u092f\u0923", "\u092d\u093e\u0935"], answer: 1, explanation: "\u0906\u0908 = \u092e\u093e\u0901 \u0964 Marathi \u092e\u0947\u0902 \u092d\u0940 \u0906\u0908 \u0939\u0940 \u0939\u0948!" },
      { q: "Konkani \u092e\u0947\u0902 gender pattern \u0915\u094d\u092f\u093e \u0939\u0948?", options: ["-a = masculine", "-o = masculine, -i = feminine", "\u0915\u094b\u0908 gender \u0928\u0939\u0940\u0902", "-u = feminine"], answer: 1, explanation: "-o masculine \u0915\u0947 \u0932\u093f\u090f, -i feminine \u0915\u0947 \u0932\u093f\u090f \u0964 \u091c\u0948\u0938\u0947 \u092d\u0941\u0930\u0917\u094b (\u0932\u095c\u0915\u093e) \u0914\u0930 \u092d\u0941\u0930\u0917\u0940 (\u0932\u095c\u0915\u0940)\u0964" },
      { q: "'\u092d\u093e\u0935' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u092c\u0939\u0928", "\u092a\u093f\u0924\u093e", "\u092d\u093e\u0908", "\u092c\u091a\u094d\u091a\u093e"], answer: 2, explanation: "\u092d\u093e\u0935 = \u092d\u093e\u0908 \u0964 Sanskrit root \u092d\u094d\u0930\u093e\u0924\u093e \u0938\u0947 \u0906\u0924\u093e \u0939\u0948!" },
      { q: "'\u092d\u092f\u0923' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u092e\u093e\u0901", "\u092d\u093e\u0908", "\u092c\u0939\u0928", "\u092c\u091a\u094d\u091a\u093e"], answer: 2, explanation: "\u092d\u092f\u0923 = \u092c\u0939\u0928 \u0964 Sanskrit 'bhagini' \u0938\u0947 \u0906\u0924\u093e \u0939\u0948 — Hindi \u092c\u0939\u0928 \u0915\u0940 \u0924\u0930\u0939!" },
      { q: "Konkani \u092e\u0947\u0902 '\u092a\u093f\u0924\u093e' \u0915\u094b \u0915\u094d\u092f\u093e \u0915\u0939\u0924\u0947 \u0939\u0948\u0902? (informal)", options: ["\u092d\u093e\u0935", "\u092a\u093e\u092f", "\u0906\u0908", "\u092c\u093e\u092c\u093e"], answer: 3, explanation: "\u092c\u093e\u092c\u093e = \u092a\u093f\u0924\u093e (informal) \u0964 \u092a\u093e\u092f = respectful form \u0964 Both are used!" },
      { q: "'\u092d\u0941\u0930\u0917\u0940' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u0932\u095c\u0915\u093e", "\u092e\u093e\u0901", "\u0932\u095c\u0915\u0940", "\u092c\u0939\u0928"], answer: 2, explanation: "\u092d\u0941\u0930\u0917\u0940 = \u0932\u095c\u0915\u0940 \u0964 \u092d\u0941\u0930\u0917\u094b = \u0932\u095c\u0915\u093e \u0964 -i = feminine, -o = masculine!" },
    ],
    cultural: "In traditional Konkani Hindu families, the mother's brother (mama) holds a very special ceremonial role — often more than the father. Family networks are tight and multigenerational living is very common."
  },
  {
    day: 3, theme: "Jevan-Pivap", themeHindi: "\u0916\u093e\u0928\u093e-\u092a\u0940\u0928\u093e", themeEng: "Food & Drink", emoji: "\uD83C\uDF5B",
    intro: "Konkani food is famous — coastal, coconut-rich, vibrant. Today's words will help you at the table and maybe at a Goan restaurant someday!",
    words: [
      { hindi: "\u0916\u093e\u0928\u093e / \u092d\u094b\u091c\u0928", konkani: "\u091c\u0947\u0935\u0923", roman: "Jevan", meaning: "Food / meal", tip: "You'll hear '\u091c\u0947\u0935\u0923 \u091c\u0947\u0935\u0932\u093e\u092f?' (Did you eat?) as a Konkani greeting!" },
      { hindi: "\u092a\u093e\u0928\u0940", konkani: "\u0909\u0926\u0915", roman: "Udak", meaning: "Water", tip: "\u0909\u0926\u0915 is very different from Hindi \u092a\u093e\u0928\u0940 — comes from Sanskrit directly. Must memorize!" },
      { hindi: "\u091a\u093e\u0935\u0932", konkani: "\u0924\u093e\u0902\u0926\u0942\u0933", roman: "Taandul", meaning: "Rice", tip: "Rice is central to Konkani life — a meal without rice isn't a proper meal!" },
      { hindi: "\u092e\u091b\u0932\u0940", konkani: "\u0928\u0941\u0938\u094d\u0924\u0947\u0902", roman: "Nustem", meaning: "Fish", tip: "Fish curry + rice = the ultimate Konkani combo. You'll hear \u0928\u0941\u0938\u094d\u0924\u0947\u0902 everywhere!" },
      { hindi: "\u092e\u0941\u091d\u0947 \u092d\u0942\u0916 \u0932\u0917\u0940 \u0939\u0948", konkani: "\u092e\u094d\u0939\u093e\u0915\u093e \u092d\u0942\u0915 \u0932\u093e\u0917\u0932\u094d\u092f\u093e", roman: "Mhaka Bhuk Laaglyaa", meaning: "I am hungry", tip: "\u092e\u094d\u0939\u093e\u0915\u093e = \u092e\u0941\u091d\u0947 \u0964 \u092d\u0942\u0915 = \u092d\u0942\u0916 — almost identical! \u092e\u094d\u0939\u093e\u0915\u093e is a key word." },
    ],
    quiz: [
      { q: "Konkani \u092e\u0947\u0902 'water' \u0915\u094b \u0915\u094d\u092f\u093e \u0915\u0939\u0924\u0947 \u0939\u0948\u0902?", options: ["\u091c\u0947\u0935\u0923", "\u0909\u0926\u0915", "\u0928\u0941\u0938\u094d\u0924\u0947\u0902", "\u0924\u093e\u0902\u0926\u0942\u0933"], answer: 1, explanation: "\u0909\u0926\u0915 = \u092a\u093e\u0928\u0940 \u0964 Hindi \u0938\u0947 \u0915\u093e\u092b\u093c\u0940 \u0905\u0932\u0917 \u0939\u0948 — \u0927\u094d\u092f\u093e\u0928 \u0938\u0947 \u092f\u093e\u0926 \u0915\u0930\u0947\u0902!" },
      { q: "'\u092e\u094d\u0939\u093e\u0915\u093e' \u0915\u093e Hindi translation?", options: ["\u092e\u0948\u0902", "\u092e\u0941\u091d\u0947 / \u092e\u0941\u091d\u0915\u094b", "\u092e\u0947\u0930\u093e", "\u0939\u092e"], answer: 1, explanation: "\u092e\u094d\u0939\u093e\u0915\u093e = \u092e\u0941\u091d\u0947 \u0964 '\u092e\u094d\u0939\u093e\u0915\u093e \u092d\u0942\u0915 \u0932\u093e\u0917\u0932\u094d\u092f\u093e' = \u092e\u0941\u091d\u0947 \u092d\u0942\u0916 \u0932\u0917\u0940 \u0939\u0948\u0964" },
      { q: "Konkani \u092e\u0947\u0902 'fish' \u0915\u094b \u0915\u094d\u092f\u093e \u0915\u0939\u0924\u0947 \u0939\u0948\u0902?", options: ["\u0924\u093e\u0902\u0926\u0942\u0933", "\u091c\u0947\u0935\u0923", "\u0928\u0941\u0938\u094d\u0924\u0947\u0902", "\u0909\u0926\u0915"], answer: 2, explanation: "\u0928\u0941\u0938\u094d\u0924\u0947\u0902 = \u092e\u091b\u0932\u0940 \u0964 Coastal Konkani culture \u092e\u0947\u0902 \u092e\u091b\u0932\u0940 \u092c\u0939\u0941\u0924 \u091c\u093c\u0930\u0942\u0930\u0940 \u0939\u0948!" },
      { q: "'\u091c\u0947\u0935\u0923' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u092a\u093e\u0928\u0940", "\u092e\u091b\u0932\u0940", "\u0916\u093e\u0928\u093e / \u092d\u094b\u091c\u0928", "\u091a\u093e\u0935\u0932"], answer: 2, explanation: "\u091c\u0947\u0935\u0923 = \u0916\u093e\u0928\u093e/\u092d\u094b\u091c\u0928 \u0964 '\u091c\u0947\u0935\u0923 \u091c\u0947\u0935\u0932\u093e\u092f?' = Did you eat?" },
      { q: "Konkani \u092e\u0947\u0902 'rice' \u0915\u094d\u092f\u093e \u0939\u0948?", options: ["\u0909\u0926\u0915", "\u0928\u0941\u0938\u094d\u0924\u0947\u0902", "\u091c\u0947\u0935\u0923", "\u0924\u093e\u0902\u0926\u0942\u0933"], answer: 3, explanation: "\u0924\u093e\u0902\u0926\u0942\u0933 = \u091a\u093e\u0935\u0932 \u0964 Rice + fish curry = \u0938\u092c\u0938\u0947 \u092e\u0936\u0939\u0942\u0930 Konkani meal!" },
      { q: "'\u092e\u0941\u091d\u0947 \u092d\u0942\u0916 \u0932\u0917\u0940 \u0939\u0948' Konkani \u092e\u0947\u0902?", options: ["\u0939\u093e\u0902\u0935 \u092c\u0930\u094b \u0906\u0938\u093e\u0902", "\u092e\u094d\u0939\u093e\u0915\u093e \u092d\u0942\u0915 \u0932\u093e\u0917\u0932\u094d\u092f\u093e", "\u0926\u0947\u0935 \u092c\u0930\u0947\u0902 \u0915\u0930\u0941\u0902", "\u0939\u0947\u0902 \u0915\u093f\u0924\u0947\u0902?"], answer: 1, explanation: "\u092e\u094d\u0939\u093e\u0915\u093e \u092d\u0942\u0915 \u0932\u093e\u0917\u0932\u094d\u092f\u093e = I am hungry \u0964 \u092e\u094d\u0939\u093e\u0915\u093e = \u092e\u0941\u091d\u0947, \u092d\u0942\u0915 = \u092d\u0942\u0916!" },
    ],
    cultural: "The famous Goan fish curry uses coconut milk and kokum — a sour fruit unique to the Western Ghats. Konkani cuisine influenced even Portuguese cooking during 450 years of colonial rule in Goa."
  },
  {
    day: 4, theme: "Rong ani Ank", themeHindi: "\u0930\u0902\u0917 \u0914\u0930 \u0938\u0902\u0916\u094d\u092f\u093e", themeEng: "Colors & Numbers", emoji: "\uD83C\uDFA8",
    intro: "Today we learn colors and numbers — the building blocks for describing the world. Some feel close to Hindi, others are surprises!",
    words: [
      { hindi: "\u090f\u0915 / \u0926\u094b / \u0924\u0940\u0928", konkani: "\u090f\u0915 / \u0926\u094b\u0928 / \u0924\u0940\u0928", roman: "Ek / Don / Tin", meaning: "One / Two / Three", tip: "\u090f\u0915 and \u0924\u0940\u0928 are almost identical to Hindi! \u0926\u094b\u0928 is close to \u0926\u094b — just an extra '\u0928'." },
      { hindi: "\u0932\u093e\u0932", konkani: "\u0924\u093e\u0902\u092c\u0921\u094b", roman: "Taambdo", meaning: "Red (masculine form)", tip: "\u0924\u093e\u0902\u092c\u0921\u094b comes from \u0924\u093e\u0902\u092c\u0947\u0902 (copper) — red like copper! Feminine: \u0924\u093e\u0902\u092c\u0921\u0940." },
      { hindi: "\u0939\u0930\u093e", konkani: "\u0939\u093f\u0930\u0935\u094b", roman: "Hirvo", meaning: "Green", tip: "\u0939\u093f\u0930\u0935\u094b is also in Marathi (\u0939\u093f\u0930\u0935\u093e). If you know any Marathi, this feels familiar!" },
      { hindi: "\u0928\u0940\u0932\u093e", konkani: "\u0928\u093f\u0933\u094b", roman: "Nilo", meaning: "Blue", tip: "\u0928\u093f\u0933\u094b is close to Marathi \u0928\u093f\u0933\u093e. Coastal languages share many color words." },
      { hindi: "\u092c\u095c\u093e / \u091b\u094b\u091f\u093e", konkani: "\u0935\u094d\u0939\u0921 / \u0932\u094d\u0939\u093e\u0928", roman: "Vhad / Lhaan", meaning: "Big / Small", tip: "\u0935\u094d\u0939\u0921 and \u0932\u094d\u0939\u093e\u0928 are uniquely Konkani — no Hindi shortcut. Learn them as a pair!" },
    ],
    quiz: [
      { q: "'\u0924\u093e\u0902\u092c\u0921\u094b' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u0928\u0940\u0932\u093e", "\u0939\u0930\u093e", "\u0932\u093e\u0932", "\u092c\u095c\u093e"], answer: 2, explanation: "\u0924\u093e\u0902\u092c\u0921\u094b = \u0932\u093e\u0932 (Red) \u0964 \u0924\u093e\u0902\u092c\u0947\u0902 \u092f\u093e\u0928\u0940 copper \u0938\u0947 \u0906\u092f\u093e \u0939\u0948!" },
      { q: "Konkani \u092e\u0947\u0902 'two' \u0915\u0948\u0938\u0947 \u0915\u0939\u0924\u0947 \u0939\u0948\u0902?", options: ["\u090f\u0915", "\u0924\u0940\u0928", "\u0926\u094b\u0928", "\u091a\u093e\u0930"], answer: 2, explanation: "\u0926\u094b\u0928 = \u0926\u094b \u0964 Hindi \u0915\u0947 \u0926\u094b \u0938\u0947 \u0925\u094b\u095c\u093e \u0905\u0932\u0917 — '\u0928' \u091c\u0941\u095c \u091c\u093e\u0924\u093e \u0939\u0948\u0964" },
      { q: "'\u0932\u094d\u0939\u093e\u0928' \u0915\u093e Hindi \u092e\u0947\u0902 \u092e\u0924\u0932\u092c?", options: ["\u092c\u095c\u093e", "\u091b\u094b\u091f\u093e", "\u0932\u093e\u0932", "\u0928\u0940\u0932\u093e"], answer: 1, explanation: "\u0932\u094d\u0939\u093e\u0928 = \u091b\u094b\u091f\u093e \u0964 \u0935\u094d\u0939\u0921 = \u092c\u095c\u093e \u0964 \u0907\u0928\u094d\u0939\u0947\u0902 \u090f\u0915 \u0938\u093e\u0925 \u092f\u093e\u0926 \u0930\u0916\u0947\u0902!" },
      { q: "'\u0939\u093f\u0930\u0935\u094b' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u0928\u0940\u0932\u093e", "\u0932\u093e\u0932", "\u0939\u0930\u093e", "\u092c\u095c\u093e"], answer: 2, explanation: "\u0939\u093f\u0930\u0935\u094b = \u0939\u0930\u093e \u0964 Marathi \u092e\u0947\u0902 \u092d\u0940 \u0939\u093f\u0930\u0935\u093e \u0939\u0948 — \u092c\u0939\u0928 \u092d\u093e\u0937\u093e\u090f\u0901!" },
      { q: "Konkani \u092e\u0947\u0902 'big' \u0915\u094d\u092f\u093e \u0939\u0948?", options: ["\u0932\u094d\u0939\u093e\u0928", "\u0935\u094d\u0939\u0921", "\u0939\u093f\u0930\u0935\u094b", "\u0928\u093f\u0933\u094b"], answer: 1, explanation: "\u0935\u094d\u0939\u0921 = \u092c\u095c\u093e \u0964 \u0932\u094d\u0939\u093e\u0928 = \u091b\u094b\u091f\u093e \u0964 \u0907\u0928\u094d\u0939\u0947\u0902 \u0939\u092e\u0947\u0936\u093e pair \u092e\u0947\u0902 \u092f\u093e\u0926 \u0915\u0930\u0947\u0902!" },
      { q: "'\u0928\u093f\u0933\u094b' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u0939\u0930\u093e", "\u0932\u093e\u0932", "\u0928\u0940\u0932\u093e", "\u091b\u094b\u091f\u093e"], answer: 2, explanation: "\u0928\u093f\u0933\u094b = \u0928\u0940\u0932\u093e (Blue) \u0964 Marathi \u0928\u093f\u0933\u093e \u0938\u0947 \u092c\u0939\u0941\u0924 \u0915\u0930\u0940\u092c!" },
    ],
    cultural: "Konkani borrowed heavily from Portuguese during Goa's 450 years of colonial rule. Words like 'janela' (window), 'iskol' (school), 'baldi' (bucket) are direct Portuguese loans still used in Konkani today!"
  },
  {
    day: 5, theme: "Vel ani Dees", themeHindi: "\u0938\u092e\u092f \u0914\u0930 \u0926\u093f\u0928", themeEng: "Time & Days", emoji: "\uD83D\uDD50",
    intro: "Talking about time is essential — when to meet, when to eat, what day it is. Today's lesson helps you navigate days and basic time expressions.",
    words: [
      { hindi: "\u0906\u091c / \u0915\u0932 / \u092a\u0930\u0938\u094b\u0902", konkani: "\u0906\u092f\u091c / \u092b\u093e\u0932\u094d\u092f\u093e\u0902 / \u092a\u0930\u0935\u093e\u0902", roman: "Aayaj / Phaalyaam / Parvaam", meaning: "Today / Tomorrow / Day after tomorrow", tip: "\u0906\u092f\u091c is close to \u0906\u091c. \u092b\u093e\u0932\u094d\u092f\u093e\u0902 for tomorrow. \u092a\u0930\u0935\u093e\u0902 = \u092a\u0930\u0938\u094b\u0902 — same as Hindi!" },
      { hindi: "\u0938\u094b\u092e\u0935\u093e\u0930", konkani: "\u0938\u094b\u092e\u093e\u0930", roman: "Somar", meaning: "Monday", tip: "\u0938\u094b\u092e\u093e\u0930 — close to \u0938\u094b\u092e\u0935\u093e\u0930! Konkani just drops '\u0935\u093e\u0930'. All days follow this pattern." },
      { hindi: "\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930", konkani: "\u0936\u0941\u0915\u094d\u0930\u093e\u0930", roman: "Shukraar", meaning: "Friday", tip: "\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u2192 \u0936\u0941\u0915\u094d\u0930\u093e\u0930. Once you see the pattern, all days become easy!" },
      { hindi: "\u0938\u0941\u092c\u0939 / \u0936\u093e\u092e / \u0930\u093e\u0924", konkani: "\u0938\u0915\u093e\u0933 / \u0938\u093e\u0902\u091c / \u0930\u093e\u0924", roman: "Sakaal / Saanj / Raat", meaning: "Morning / Evening / Night", tip: "\u0930\u093e\u0924 is the same! \u0938\u0915\u093e\u0933 (morning) is also Marathi. \u0938\u093e\u0902\u091c for evening is unique to Konkani." },
      { hindi: "\u0905\u092d\u0940 / \u092c\u093e\u0926 \u092e\u0947\u0902", konkani: "\u0906\u0924\u093e\u0902 / \u092b\u0941\u0921\u0947\u0902", roman: "Aataam / Phuddem", meaning: "Now / Later", tip: "\u0906\u0924\u093e\u0902 for 'now'. \u092b\u0941\u0921\u0947\u0902 means 'ahead' — later is literally what's ahead of you!" },
    ],
    quiz: [
      { q: "Konkani \u092e\u0947\u0902 'tomorrow' \u0915\u094d\u092f\u093e \u0939\u0948?", options: ["\u0906\u092f\u091c", "\u092b\u093e\u0932\u094d\u092f\u093e\u0902", "\u092a\u0930\u0935\u093e\u0902", "\u0938\u093e\u0902\u091c"], answer: 1, explanation: "\u092b\u093e\u0932\u094d\u092f\u093e\u0902 = \u0915\u0932 (tomorrow) \u0964 \u0906\u092f\u091c = \u0906\u091c, \u092a\u0930\u0935\u093e\u0902 = \u092a\u0930\u0938\u094b\u0902\u0964" },
      { q: "'\u0938\u0915\u093e\u0933' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u0936\u093e\u092e", "\u0930\u093e\u0924", "\u0926\u094b\u092a\u0939\u0930", "\u0938\u0941\u092c\u0939"], answer: 3, explanation: "\u0938\u0915\u093e\u0933 = \u0938\u0941\u092c\u0939 (morning) \u0964 Marathi \u092e\u0947\u0902 \u092d\u0940 \u0938\u0915\u093e\u0933 \u0939\u0940 \u0939\u0948!" },
      { q: "Days \u0915\u0947 \u0932\u093f\u090f Konkani \u092e\u0947\u0902 \u0915\u094d\u092f\u093e pattern \u0939\u0948?", options: ["\u092c\u093f\u0932\u094d\u0915\u0941\u0932 \u0905\u0932\u0917 \u0936\u092c\u094d\u0926", "'\u0935\u093e\u0930' \u0939\u091f\u093e \u0926\u0947\u0924\u0947 \u0939\u0948\u0902", "English words", "Numbers"], answer: 1, explanation: "\u0938\u094b\u092e\u0935\u093e\u0930 \u2192 \u0938\u094b\u092e\u093e\u0930, \u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u2192 \u0936\u0941\u0915\u094d\u0930\u093e\u0930 — \u092c\u0938 '\u0935\u093e\u0930' \u0939\u091f \u091c\u093e\u0924\u093e \u0939\u0948!" },
      { q: "'\u0906\u092f\u091c' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u0915\u0932", "\u092a\u0930\u0938\u094b\u0902", "\u0906\u091c", "\u0936\u093e\u092e"], answer: 2, explanation: "\u0906\u092f\u091c = \u0906\u091c (today) \u0964 Hindi \u0906\u091c \u0938\u0947 \u092c\u0939\u0941\u0924 \u0915\u0930\u0940\u092c!" },
      { q: "Konkani \u092e\u0947\u0902 'night' \u0915\u094d\u092f\u093e \u0939\u0948?", options: ["\u0938\u0915\u093e\u0933", "\u0938\u093e\u0902\u091c", "\u0906\u0924\u093e\u0902", "\u0930\u093e\u0924"], answer: 3, explanation: "\u0930\u093e\u0924 = \u0930\u093e\u0924 — Hindi \u0915\u0947 \u092c\u093f\u0932\u094d\u0915\u0941\u0932 \u091c\u0948\u0938\u093e! Easiest word of the day." },
      { q: "'\u092b\u0941\u0921\u0947\u0902' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u0905\u092d\u0940", "\u0915\u0932", "\u092c\u093e\u0926 \u092e\u0947\u0902", "\u0906\u091c"], answer: 2, explanation: "\u092b\u0941\u0921\u0947\u0902 = \u092c\u093e\u0926 \u092e\u0947\u0902 (later) \u0964 \u0906\u0924\u093e\u0902 = \u0905\u092d\u0940 (now) \u0964 \u0907\u0928\u094d\u0939\u0947\u0902 pair \u092e\u0947\u0902 \u092f\u093e\u0926 \u0930\u0916\u0947\u0902!" },
    ],
    cultural: "The biggest Konkani festival is Shigmo — Konkani Holi — celebrated with elaborate folk dances like Ghodemodini (horse dance). The sea is not just geography but spirituality for coastal Konkani communities."
  },
  {
    day: 6, theme: "Daispotle Ulovanim", themeHindi: "\u0930\u094b\u091c\u093c\u092e\u0930\u094d\u0930\u093e \u0915\u0940 \u092c\u093e\u0924\u0947\u0902", themeEng: "Daily Conversations", emoji: "\uD83D\uDCAC",
    intro: "Today we build your first real sentences! You already know haanv (I) and mhaka (to me). Now let's put them together into things you'd actually say.",
    words: [
      { hindi: "\u092e\u0941\u091d\u0947 Konkani \u0928\u0939\u0940\u0902 \u0906\u0924\u0940", konkani: "\u092e\u094d\u0939\u093e\u0915\u093e \u0915\u094b\u0902\u0915\u0923\u0940 \u092f\u0947\u0928\u093e", roman: "Mhaka Konkani Yena", meaning: "I don't know Konkani", tip: "\u092f\u0947\u0928\u093e = \u0928\u0939\u0940\u0902 \u0906\u0924\u093e \u0964 \u092f\u0947\u0924\u093e = \u0906\u0924\u093e \u0939\u0948 \u0964 Just add '\u0928' and the meaning flips!" },
      { hindi: "\u0915\u0943\u092a\u092f\u093e \u0927\u0940\u0930\u0947 \u092c\u094b\u0932\u093f\u090f", konkani: "\u0909\u092a\u0915\u093e\u0930 \u0915\u0930\u0942\u0928 \u0938\u093e\u0935\u0915\u093e\u0936 \u0909\u0932\u092f", roman: "Upkaar Karun Saavakaash Ulay", meaning: "Please speak slowly", tip: "\u0938\u093e\u0935\u0915\u093e\u0936 = \u0927\u0940\u0930\u0947 \u0964 \u0909\u0932\u092f = \u092c\u094b\u0932\u094b \u0964 \u0909\u092a\u0915\u093e\u0930 \u0915\u0930\u0942\u0928 = please (literally 'doing a favor')." },
      { hindi: "\u092f\u0939 \u0915\u094d\u092f\u093e \u0939\u0948?", konkani: "\u0939\u0947\u0902 \u0915\u093f\u0924\u0947\u0902?", roman: "Hem Kitem?", meaning: "What is this?", tip: "\u0939\u0947\u0902 = \u092f\u0939, \u0915\u093f\u0924\u0947\u0902 = \u0915\u094d\u092f\u093e \u0964 Your most useful question as a beginner!" },
      { hindi: "\u092e\u0948\u0902 \u0938\u092e\u091d\u093e/\u0938\u092e\u091d\u0940 \u0928\u0939\u0940\u0902", konkani: "\u0939\u093e\u0902\u0935 \u0938\u092e\u091c\u0932\u094b\u0902/\u0938\u092e\u091c\u0932\u0940 \u0928\u093e", roman: "Haanv Samjolom/Samjoli Na", meaning: "I didn't understand (m/f)", tip: "\u0938\u092e\u091c\u0932\u094b\u0902 (masculine), \u0938\u092e\u091c\u0932\u0940 (feminine). Root \u0938\u092e\u091c is close to Hindi \u0938\u092e\u091d!" },
      { hindi: "\u092c\u0939\u0941\u0924 \u0905\u091a\u094d\u091b\u093e!", konkani: "\u0916\u0942\u092c \u092c\u0930\u0947\u0902!", roman: "Khoob Barem!", meaning: "Very good! / Excellent!", tip: "\u0916\u0942\u092c sounds just like Hindi! \u092c\u0930\u0947\u0902 = \u0905\u091a\u094d\u091b\u093e \u0964 \u0916\u0942\u092c \u092c\u0930\u0947\u0902 = \u092c\u0939\u0941\u0924 \u0905\u091a\u094d\u091b\u093e!" },
    ],
    quiz: [
      { q: "'\u0939\u0947\u0902 \u0915\u093f\u0924\u0947\u0902?' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u092f\u0939 \u0915\u0939\u093e\u0901 \u0939\u0948?", "\u092f\u0939 \u0915\u094d\u092f\u093e \u0939\u0948?", "\u092f\u0939 \u0915\u092c \u0939\u0948?", "\u092f\u0939 \u0915\u093f\u0938\u0915\u093e \u0939\u0948?"], answer: 1, explanation: "\u0939\u0947\u0902 \u0915\u093f\u0924\u0947\u0902? = \u092f\u0939 \u0915\u094d\u092f\u093e \u0939\u0948? — Konkani \u0938\u0940\u0916\u0924\u0947 \u0935\u0915\u094d\u0924 \u0938\u092c\u0938\u0947 useful \u0938\u0935\u093e\u0932!" },
      { q: "'\u092f\u0947\u0928\u093e' vs '\u092f\u0947\u0924\u093e' \u092e\u0947\u0902 \u0915\u094d\u092f\u093e \u092b\u0930\u094d\u0915 \u0939\u0948?", options: ["\u0915\u094b\u0908 \u092b\u0930\u094d\u0915 \u0928\u0939\u0940\u0902", "\u092f\u0947\u0928\u093e = \u0928\u0939\u0940\u0902 \u0906\u0924\u093e, \u092f\u0947\u0924\u093e = \u0906\u0924\u093e \u0939\u0948", "\u092f\u0947\u0928\u093e = \u0906\u091c, \u092f\u0947\u0924\u093e = \u0915\u0932", "\u0926\u094b\u0928\u094b\u0902 = goodbye"], answer: 1, explanation: "\u092f\u0947\u0924\u093e = \u0906\u0924\u093e \u0939\u0948, \u092f\u0947\u0928\u093e = \u0928\u0939\u0940\u0902 \u0906\u0924\u093e \u0964 \u090f\u0915 '\u0928' \u0938\u0947 meaning \u092a\u0932\u091f \u091c\u093e\u0924\u0940 \u0939\u0948!" },
      { q: "'\u0916\u0942\u092c \u092c\u0930\u0947\u0902' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u092c\u0939\u0941\u0924 \u092c\u0941\u0930\u093e", "\u0925\u094b\u095c\u093e \u0905\u091a\u094d\u091b\u093e", "\u092c\u0939\u0941\u0924 \u0905\u091a\u094d\u091b\u093e", "\u091c\u093c\u0930\u093e \u0930\u0941\u0915\u093f\u090f"], answer: 2, explanation: "\u0916\u0942\u092c \u092c\u0930\u0947\u0902 = \u092c\u0939\u0941\u0924 \u0905\u091a\u094d\u091b\u093e! \u0916\u0942\u092c \u0924\u094b Hindi \u091c\u0948\u0938\u093e \u0939\u0940 \u0939\u0948, \u0914\u0930 \u092c\u0930\u0947\u0902 = \u0905\u091a\u094d\u091b\u093e\u0964" },
      { q: "'\u0938\u093e\u0935\u0915\u093e\u0936' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u0924\u0947\u091c", "\u0927\u0940\u0930\u0947", "\u0905\u092d\u0940", "\u092c\u093e\u0926 \u092e\u0947\u0902"], answer: 1, explanation: "\u0938\u093e\u0935\u0915\u093e\u0936 = \u0927\u0940\u0930\u0947 (slowly) \u0964 '\u0909\u092a\u0915\u093e\u0930 \u0915\u0930\u0942\u0928 \u0938\u093e\u0935\u0915\u093e\u0936 \u0909\u0932\u092f' = Please speak slowly." },
      { q: "'\u0939\u093e\u0902\u0935 \u0938\u092e\u091c\u0932\u094b\u0902 \u0928\u093e' \u0915\u093e \u0905\u0930\u094d\u0925?", options: ["\u092e\u0948\u0902 \u0938\u094b\u091a \u0930\u0939\u093e \u0939\u0942\u0901", "\u092e\u0948\u0902 \u0938\u092e\u091d\u093e \u0928\u0939\u0940\u0902 (male)", "\u092e\u0948\u0902 \u0938\u092e\u091d\u0940 \u0928\u0939\u0940\u0902 (female)", "\u092e\u0941\u091d\u0947 \u092e\u093e\u0932\u0942\u092e \u0928\u0939\u0940\u0902"], answer: 1, explanation: "\u0938\u092e\u091c\u0932\u094b\u0902 = masculine form \u0964 \u0938\u092e\u091c\u0932\u0940 = feminine form \u0964 Root \u0938\u092e\u091c = Hindi \u0938\u092e\u091d!" },
      { q: "'\u092e\u094d\u0939\u093e\u0915\u093e \u0915\u094b\u0902\u0915\u0923\u0940 \u092f\u0947\u0928\u093e' \u0915\u093e \u0905\u0930\u094d\u0925?", options: ["\u092e\u0941\u091d\u0947 Konkani \u092a\u0938\u0902\u0926 \u0928\u0939\u0940\u0902", "\u092e\u0941\u091d\u0947 Konkani \u0928\u0939\u0940\u0902 \u0906\u0924\u0940", "\u092e\u0948\u0902 Konkani \u0938\u0940\u0916\u0924\u093e \u0939\u0942\u0901", "\u092e\u0941\u091d\u0947 Konkani \u092c\u094b\u0932\u0928\u0940 \u0939\u0948"], answer: 1, explanation: "\u092e\u094d\u0939\u093e\u0915\u093e \u0915\u094b\u0902\u0915\u0923\u0940 \u092f\u0947\u0928\u093e = I don't know Konkani \u0964 \u092e\u094d\u0939\u093e\u0915\u093e = \u092e\u0941\u091d\u0947, \u092f\u0947\u0928\u093e = \u0928\u0939\u0940\u0902 \u0906\u0924\u093e!" },
    ],
    cultural: "Konkani has seven major dialects — Goan, Mangalorean, Malvani, Kudali, and more. Mutually intelligible but genuinely different, like Hindi vs Bhojpuri. This app teaches Goan Hindu Konkani written in Devanagari."
  },
  {
    day: 7, theme: "Bhaavna ani Vichar", themeHindi: "\u092d\u093e\u0935\u0928\u093e\u090f\u0901", themeEng: "Feelings & Thoughts", emoji: "\u2764\uFE0F",
    intro: "Congratulations on reaching Day 7! Today's lesson is special — expressing feelings. Language becomes real when you can share what's in your heart.",
    words: [
      { hindi: "\u092e\u0941\u091d\u0947 \u0916\u0941\u0936\u0940 \u0939\u0948", konkani: "\u092e\u094d\u0939\u093e\u0915\u093e \u0906\u0928\u0902\u0926 \u091c\u093e\u0924\u093e", roman: "Mhaka Aanand Jaata", meaning: "I am happy (lit: joy comes to me)", tip: "\u0906\u0928\u0902\u0926 is Sanskrit — same as Hindi! In Konkani, emotions 'come to' you. \u091c\u093e\u0924\u093e = comes." },
      { hindi: "\u092e\u0941\u091d\u0947 \u0926\u0941\u0916 \u0939\u0948", konkani: "\u092e\u094d\u0939\u093e\u0915\u093e \u0926\u0942\u0916 \u091c\u093e\u0924\u093e", roman: "Mhaka Dukh Jaata", meaning: "I am sad", tip: "\u0926\u0942\u0916 = \u0926\u0941\u0916 — almost identical to Hindi! Same structure as \u0906\u0928\u0902\u0926 \u091c\u093e\u0924\u093e." },
      { hindi: "\u092e\u0941\u091d\u0947 \u0924\u0941\u092e\u0938\u0947 \u092a\u094d\u092f\u093e\u0930 \u0939\u0948", konkani: "\u0939\u093e\u0902\u0935 \u0924\u0941\u092e\u0915\u093e\u0902 \u092e\u094b\u0917\u0924\u093e", roman: "Haanv Tumkaam Mogta", meaning: "I love you", tip: "\u092e\u094b\u0917 = love in Konkani. \u092e\u094b\u0917\u0924\u093e = I love. \u0924\u0941\u092e\u0915\u093e\u0902 = to you. \u092e\u094b\u0917 is a beautiful, uniquely Konkani word!" },
      { hindi: "\u092e\u0941\u091d\u0947 \u092f\u093e\u0926 \u0939\u0948", konkani: "\u092e\u094d\u0939\u093e\u0915\u093e \u092f\u093e\u0926 \u0906\u0938\u093e", roman: "Mhaka Yaad Aasa", meaning: "I remember", tip: "\u092f\u093e\u0926 is the same! \u0906\u0938\u093e = \u0939\u0948 (is/am/are). \u092f\u093e\u0926 \u0906\u0938\u093e = \u092f\u093e\u0926 \u0939\u0948 — very close to Hindi!" },
      { hindi: "Konkani \u0938\u0940\u0916\u0928\u093e \u0905\u091a\u094d\u091b\u093e \u0932\u0917\u0924\u093e \u0939\u0948", konkani: "\u0915\u094b\u0902\u0915\u0923\u0940 \u0936\u093f\u0915\u092a \u092e\u094d\u0939\u093e\u0915\u093e \u092c\u0930\u0947\u0902 \u0926\u093f\u0938\u094d\u0924\u093e", roman: "Konkani Shikap Mhaka Barem Dista", meaning: "I enjoy learning Konkani", tip: "\u0926\u093f\u0938\u094d\u0924\u093e = \u0932\u0917\u0924\u093e \u0939\u0948 \u0964 \u0936\u093f\u0915\u092a = \u0938\u0940\u0916\u0928\u093e \u0964 You've come so far — you can read this whole sentence!" },
    ],
    quiz: [
      { q: "'\u092e\u094b\u0917' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u0926\u0941\u0916", "\u0916\u0941\u0936\u0940", "\u092a\u094d\u092f\u093e\u0930 / \u092e\u094b\u0939\u092c\u094d\u092c\u0924", "\u092f\u093e\u0926"], answer: 2, explanation: "\u092e\u094b\u0917 = \u092a\u094d\u092f\u093e\u0930! '\u0939\u093e\u0902\u0935 \u0924\u0941\u092e\u0915\u093e\u0902 \u092e\u094b\u0917\u0924\u093e' = I love you — Konkani \u0915\u093e \u0938\u092c\u0938\u0947 \u092a\u094d\u092f\u093e\u0930\u093e phrase!" },
      { q: "Konkani \u092e\u0947\u0902 emotions \u0915\u0947 \u0938\u093e\u0925 \u0915\u094c\u0928 \u0938\u093e pattern?", options: ["Emotions 'come to' you (\u091c\u093e\u0924\u093e)", "\u0906\u092a emotion '\u0915\u0930\u0924\u0947' \u0939\u0948\u0902", "Emotion '\u0939\u0948' \u0939\u094b\u0924\u0940 \u0939\u0948", "\u0915\u094b\u0908 verb \u0928\u0939\u0940\u0902"], answer: 0, explanation: "\u092e\u094d\u0939\u093e\u0915\u093e \u0906\u0928\u0902\u0926 \u091c\u093e\u0924\u093e, \u092e\u094d\u0939\u093e\u0915\u093e \u0926\u0942\u0916 \u091c\u093e\u0924\u093e — Konkani \u092e\u0947\u0902 emotions \u0906\u092a \u0924\u0915 '\u0906\u0924\u0940' \u0939\u0948\u0902!" },
      { q: "'\u0926\u093f\u0938\u094d\u0924\u093e' \u0915\u093e Hindi translation?", options: ["\u0926\u093f\u0916\u0924\u093e \u0939\u0948", "\u0932\u0917\u0924\u093e \u0939\u0948", "\u0938\u0941\u0928\u0924\u093e \u0939\u0948", "\u091c\u093e\u0928\u0924\u093e \u0939\u0948"], answer: 1, explanation: "\u0926\u093f\u0938\u094d\u0924\u093e = \u0932\u0917\u0924\u093e \u0939\u0948 \u0964 '\u092c\u0930\u0947\u0902 \u0926\u093f\u0938\u094d\u0924\u093e' = \u0905\u091a\u094d\u091b\u093e \u0932\u0917\u0924\u093e \u0939\u0948\u0964" },
      { q: "'\u092e\u094d\u0939\u093e\u0915\u093e \u0906\u0928\u0902\u0926 \u091c\u093e\u0924\u093e' \u0915\u093e \u0905\u0930\u094d\u0925?", options: ["\u092e\u0941\u091d\u0947 \u0926\u0941\u0916 \u0939\u0948", "\u092e\u0941\u091d\u0947 \u0916\u0941\u0936\u0940 \u0939\u0948", "\u092e\u0941\u091d\u0947 \u092f\u093e\u0926 \u0939\u0948", "\u092e\u0941\u091d\u0947 \u092a\u094d\u092f\u093e\u0930 \u0939\u0948"], answer: 1, explanation: "\u092e\u094d\u0939\u093e\u0915\u093e \u0906\u0928\u0902\u0926 \u091c\u093e\u0924\u093e = I am happy \u0964 \u0906\u0928\u0902\u0926 = joy, \u091c\u093e\u0924\u093e = comes to me!" },
      { q: "'\u0906\u0938\u093e' \u0915\u093e \u092e\u0924\u0932\u092c?", options: ["\u0939\u094b\u0924\u093e \u0939\u0948", "\u091c\u093e\u0924\u093e \u0939\u0948", "\u0939\u0948 (is/am/are)", "\u0906\u0924\u093e \u0939\u0948"], answer: 2, explanation: "\u0906\u0938\u093e = \u0939\u0948 (is/am/are) \u0964 '\u092e\u094d\u0939\u093e\u0915\u093e \u092f\u093e\u0926 \u0906\u0938\u093e' = \u092e\u0941\u091d\u0947 \u092f\u093e\u0926 \u0939\u0948\u0964" },
      { q: "'\u0939\u093e\u0902\u0935 \u0924\u0941\u092e\u0915\u093e\u0902 \u092e\u094b\u0917\u0924\u093e' \u0915\u093e \u0905\u0930\u094d\u0925?", options: ["\u092e\u0941\u091d\u0947 \u0924\u0941\u092e\u0938\u0947 \u0928\u092b\u093c\u0930\u0924 \u0939\u0948", "\u092e\u0941\u091d\u0947 \u0924\u0941\u092e\u0938\u0947 \u092a\u094d\u092f\u093e\u0930 \u0939\u0948", "\u0924\u0941\u092e \u0905\u091a\u094d\u091b\u0947 \u0939\u094b", "\u092e\u0948\u0902 \u092f\u093e\u0926 \u0915\u0930\u0924\u093e \u0939\u0942\u0901"], answer: 1, explanation: "\u0939\u093e\u0902\u0935 \u0924\u0941\u092e\u0915\u093e\u0902 \u092e\u094b\u0917\u0924\u093e = I love you \u0964 \u092e\u094b\u0917 = love, \u0924\u0941\u092e\u0915\u093e\u0902 = to you!" },
    ],
    cultural: "The word 'mog' (love) is central to Konkani identity. Mando — Konkani classical music — beautifully blends Indian and Portuguese musical traditions and is one of the most treasured Konkani art forms."
  },
];

function shuffle(arr) {
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function shuffleQuiz(questions) {
  return shuffle(questions).map(q => {
    const correct = q.options[q.answer];
    const shuffled = shuffle(q.options);
    return {...q, options: shuffled, answer: shuffled.indexOf(correct)};
  });
}

// ─── Spaced Repetition (simplified SM-2) ───────────────────────────────────
const SRS_INTERVALS = [1, 3, 7, 16, 35, 90]; // days, indexed by consecutive correct reps

function nextSrsState(entry, correct) {
  const now = new Date();
  if (correct) {
    const reps = (entry?.reps ?? 0) + 1;
    const days = SRS_INTERVALS[Math.min(reps - 1, SRS_INTERVALS.length - 1)];
    const due = new Date(now); due.setDate(due.getDate() + days);
    return { reps, interval: days, dueDate: due.toISOString() };
  } else {
    const due = new Date(now); due.setDate(due.getDate() + 1);
    return { reps: 0, interval: 1, dueDate: due.toISOString() };
  }
}

function seedSrsForDay(dayIdx, prevProgress) {
  const srs = { ...(prevProgress.srs || {}) };
  LESSONS[dayIdx].words.forEach((w, wi) => {
    const id = dayIdx + ":" + wi;
    if (!srs[id]) srs[id] = { reps: 0, interval: 1, dueDate: new Date().toISOString() };
  });
  return srs;
}

function getDueWords(progress) {
  const srs = progress.srs || {};
  const now = new Date();
  const due = [];
  Object.keys(srs).forEach(id => {
    if (new Date(srs[id].dueDate) <= now) {
      const [di, wi] = id.split(":").map(Number);
      if (LESSONS[di] && LESSONS[di].words[wi]) {
        due.push({ id, dayIdx: di, wordIdx: wi, word: LESSONS[di].words[wi], theme: LESSONS[di].themeHindi });
      }
    }
  });
  return due;
}
