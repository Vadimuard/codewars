'use strict'

const bouncingBall = (h, bounce, window) => {
  const isValid = h > 0 && bounce < 1 && bounce > 0 && window < h;
  if (!isValid) return -1;
  let counter = 0;
  let yBall = h;
  while (yBall > window) {
    counter += 1;
    yBall = yBall * bounce;
    if (yBall > window) {
      counter += 1;
    }
  }
  return counter;
}

console.log(bouncingBall(3.0, 0.66, 1.5))