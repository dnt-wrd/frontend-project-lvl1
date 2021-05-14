import {
  getRandomInt, getName, checkAns, newCountAndText,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const gameName = 'prime';

function primeAndCheck(name) {
  const a = getRandomInt(1, 100);
  console.log(`Question: ${a}`);
  let text = '';
  let isPrime = true;
  let j = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= a / 2; i++) {
    // eslint-disable-next-line eqeqeq
    if (a % i == 0) {
      // eslint-disable-next-line no-plusplus
      j++;
    }
  }
  if (j !== 1) {
    isPrime = false;
  }
  if (a === 1) {
    isPrime = true;
  }

  if (isPrime) {
    text = 'yes';
  } else {
    text = 'no';
  }

  return checkAns(text, name);
}

function brainPrime() {
  const name = getName(gameName);
  let checkLoop = true;
  let p = 0;
  while (checkLoop) {
    checkLoop = primeAndCheck(name);
    if (checkLoop) {
      // eslint-disable-next-line no-plusplus
      p++;
    }
    if (p === 3) {
      checkLoop = false;
    }
  }

  if (p === 3) {
    newCountAndText(name);
  }
}

// brainPrime();
export default brainPrime;
