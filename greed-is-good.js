"use strict";

const score = (dice) => {
  const counterKeys = [1, 2, 3, 4, 5, 6];
  const counter = {};
  counterKeys.forEach((key) => (counter[key] = 0));
  dice.forEach((d) => {
    counter[d] += 1;
  });
  let sum = 0;
  for (const k of counterKeys) {
    if (counter[k] >= 3) {
      sum = k * 100;
      if (k === 1) sum *= 10;
      counter[k] -= 3;
      break;
    }
  }
  for (const k of [1, 5]) {
    if (k === 1) sum += 100 * counter[k];
    if (k === 5) sum += 50 * counter[k];
  }
  return sum;
};

console.dir(score([2, 3, 4, 6, 2]));
console.dir(score([4, 4, 4, 3, 3]));
console.dir(score([2, 4, 4, 5, 4]));
console.dir(score([1, 1, 1, 2, 2]));
