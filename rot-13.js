const isLetter = ch => ch.toLowerCase() != ch.toUpperCase();

const shiftLetter = (ch, shifter) => {
  const chCode = ch.charCodeAt(0);
  const isCapital = ch === ch.toUpperCase();
  let z = 'z';
  let a = 'a';
  if (isCapital) {
    z = 'Z';
    a = 'A';
  }
  const zCode = z.charCodeAt(0);
  const aCode = a.charCodeAt(0);
  if (chCode + shifter > zCode) {
    return String.fromCharCode(aCode - zCode + chCode + shifter - 1);
  }
  return String.fromCharCode(chCode + shifter);
}

const rot13 = message => {
  let transformedMessage = "";
  for (let i = 0; i < message.length; i ++) {
    if (isLetter(message[i])) {
      transformedMessage += shiftLetter(message[i], 13);
    } else {
      transformedMessage += message[i];
    }
  }
  return transformedMessage;
}

console.log(rot13('test'))
console.log(rot13('Test'))
