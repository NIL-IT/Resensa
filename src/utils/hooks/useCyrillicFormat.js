export default function useCyrillicFormat(text) {
  const latinToCyrillic = {
    a: "а",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    e: "е",
    yo: "ё",
    zh: "ж",
    z: "з",
    i: "и",
    j: "й",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    f: "ф",
    h: "х",
    ts: "ц",
    ch: "ч",
    sh: "ш",
    sch: "щ",
    y: "ы",
    e: "э",
    yu: "ю",
    ya: "я",
    A: "А",
    B: "Б",
    V: "В",
    G: "Г",
    D: "Д",
    E: "Е",
    Yo: "Ё",
    Zh: "Ж",
    Z: "З",
    I: "И",
    J: "Й",
    K: "К",
    L: "Л",
    M: "М",
    N: "Н",
    O: "О",
    P: "П",
    R: "Р",
    S: "С",
    T: "Т",
    U: "У",
    F: "Ф",
    H: "Х",
    Ts: "Ц",
    Ch: "Ч",
    Sh: "Ш",
    Sch: "Щ",
    Y: "Ы",
    E: "Э",
    Yu: "Ю",
    Ya: "Я",
  };

  return text
    .split("-")
    .map((word) => {
      let result = "";
      for (let i = 0; i < word.length; i++) {
        const twoChars = word.slice(i, i + 2).toLowerCase();
        const oneChar = word[i].toLowerCase();

        if (latinToCyrillic[twoChars]) {
          result += latinToCyrillic[twoChars];
          i++;
        } else if (latinToCyrillic[oneChar]) {
          result += latinToCyrillic[oneChar];
        } else {
          result += word[i];
        }
      }
      return result;
    })
    .join(" ")
    .replace(/\b(\w)/g, (match) => match.toUpperCase())
    .toUpperCase();
}
