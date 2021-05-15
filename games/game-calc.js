import readlineSync from 'readline-sync';
import {
  getRandomInt, getName, wrongAns, checkAns, newCountAndText,
} from '../src/index.js';

const gameName = 'calc';

let i = 0;
let errorCalc = false;

const randomOper = () => {
  const oper = ['+', '-', '*'];
  const numberOper = getRandomInt(0, 3);
  return oper[numberOper];
};

const calculator = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const c = randomOper();
  let answer;
  console.log(`Question: ${a} ${c} ${b}`);
  switch (c) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
    default:
      answer = a + b;
  }
  return answer;
};

// eslint-disable-next-line consistent-return
/* const checkCalc = (answerCalculator) => {
  const answerUser = readlineSync.question('Your answer: ');

  if (answerCalculator === Number(answerUser)) {
    console.log('Correct!');
  } else {
    wrongAns(answerCalculator, answerUser);
    errorCalc = true;
    return errorCalc;
  }
}; */

const brainCalc = () => {
  const name = getName(gameName);
  i = 0;
  let checkLoop = true;

  while (checkLoop) {
    const checkLoopArray = checkAns(calculator(), name);
    checkLoop = checkLoopArray;
    if (checkLoop) {
      i += 1;
    }
    if (i === 3) {
      checkLoop = false;
    }
  }
  if (i === 3) {
    newCountAndText(name);
  }
};

// brainCalc();
export default brainCalc;
