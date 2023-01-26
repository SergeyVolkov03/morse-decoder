const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    let symbol = expr.substr(i, 10);
    if (symbol === "**********") {
      result += " ";
      continue;
    }
    let symbolDecode = "";
    for (let j = 0; j < symbol.length; j += 2) {
      let twoSymbols = symbol[j] + symbol[j + 1];
      if (twoSymbols === "00") {
        continue;
      } else if (twoSymbols === "10") {
        symbolDecode += ".";
      } else {
        symbolDecode += "-";
      }
    }
    result += MORSE_TABLE[symbolDecode];
  }
  return result;
}

module.exports = {
  decode,
};
