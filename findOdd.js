const findOdd = arr => {
  const dict = {};
  for (let num of arr) {
    numStr = num.toString();
    if (numStr in dict) {
      dict[numStr] += 1;
    } else {
      dict[numStr] = 1;
    }
  }
  for (const [key, value] of Object.entries(dict)) {
    if (value % 2 !== 0) {
      return parseInt(key, 10);
    }
  }
}
