//  5. Convert a given sentence from camelCase to Title Case
  
  const toTitleCase = (str) => {
    const trimText = (s) => s.toLowerCase().trim();
    const capitalize = (s) => `${s[0].toUpperCase()}${s.slice(1)}`;
    const splitOnCapital = (s) =>
      s.replace(/([A-Z])/, (match, capture) => ` ${capture}`);
    const removeBlank = (s) => !!s;
  
    return str
      .split(" ")
      .map(splitOnCapital)
      .map(trimText)
      .join(" ")
      .split(" ")
      .filter(removeBlank)
      .map(capitalize)
      .join(" ");
  };
  console.log(toTitleCase("the simplestThings in LIFE are alwaysThe best"));