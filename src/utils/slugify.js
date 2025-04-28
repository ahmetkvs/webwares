function convertToASCII(input) {
  const CharMap = new Map([
    ["ç", "c"],
    ["Ç", "C"],
    ["ğ", "g"],
    ["Ğ", "G"],
    ["ş", "s"],
    ["Ş", "S"],
    ["ü", "u"],
    ["Ü", "U"],
    ["ı", "i"],
    ["İ", "I"],
    ["ö", "o"],
    ["Ö", "O"],
  ]);

  if (input) {
    let output = input.toString();
    for (let [key, value] of CharMap) {
      output = output.replace(
        new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
        value
      );
    }
    return output;
  } else {
    return "tbd";
  }
}

const slugify = (text) => {
  if (text) {
    const asciiText = convertToASCII(text);
    return asciiText
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  } else {
    return "tbd";
  }
};

export default slugify;
