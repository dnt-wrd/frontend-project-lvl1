import readlineSync from 'readline-sync';
import {
  getRandomInt, getName, countAndText, wrongAns, checkAns,
} from '../src/index.js';

const gameName = 'calc';
let a; let b; let
  q;
function brainGSD() {
  const name = getName(gameName); // для комита

  for (q = 1; q <= 3; q++) {
    a = getRandomInt();
    b = getRandomInt();
    console.log(`Question: ${a} ${b}`);
    // console.log("OTVET======> " + gcd(a, b));
    const bool = checkAns(gcd(a, b), name);
    if (!bool) {
      q = 4;
    }
  }
  if (q = 3) {
    countAndText(q, name);
  }
}

function gcd(a, b) {
  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    // console.log(a % i);
    i--;
  }
  return i;
}

// brainGSD();
export default brainGSD;
