import {
  getRandomInt, getName, newCountAndText, checkAns,
} from '../src/index.js';

const gameName = 'calc';
let a;
let b;
// let q;

function gcd(a1, b1) {
  let i = a1;
  while (a1 % i !== 0 || b1 % i !== 0) {
    // console.log(a % i);
    i -= 1;
  }
  return i;
}

function brainGSD() {
  const name = getName(gameName); // для комита
  let i1 = 0;
  let checkLoop = true;
  while (checkLoop) {
    a = getRandomInt();
    b = getRandomInt();
    console.log(`Question: ${a} ${b}`);
    const checkLoopArray = checkAns(gcd(a, b), name);
    checkLoop = checkLoopArray;
    if (checkLoop) {
      i1 += 1;
    }
    if (i1 === 3) {
      checkLoop = false;
    }
  }
  if (i1 === 3) {
    newCountAndText(name);
  }
}

// brainGSD();
export default brainGSD;
