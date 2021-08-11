const solution = (input, markers) => {
  let output = "";
  const inputLines = input.split("\n");
  for (const line of inputLines) {
    let outputLine = "";
    for (const ch of line) {
      if (markers.includes(ch)) break;
      outputLine += ch;
    }
    output += outputLine.trim() + "\n";
  }
  return output.trim();
};

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);
