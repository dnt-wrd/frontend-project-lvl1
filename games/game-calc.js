import readlineSync from 'readline-sync';
import { getRandomInt, getName, wrongAns } from '../src/index.js';

let i = 0;
let errorCalc = false;

const brainCalc = () => {
  const name = getName();
  for (i; i < 3; i++) {
    const boolTest = checkCalc(calculator());
    if (boolTest) {
      break;
    }
  }
};
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
  }
  return answer;
};

const checkCalc = (answerCalculator) => {
  const answerUser = readlineSync.question('Your answer: ');

  if (answerCalculator == answerUser) {
    console.log('Correct!');
  } else {
    wrongAns(answerCalculator, answerUser);
    return errorCalc = true;
  }
};

brainCalc();
export default brainCalc;
