import readlineSync from 'readline-sync';

let name = '';
let i;
let boolA; let a; let
  ans;
let error = false;
let errorAns = false;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');

  name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  // eslint-disable-next-line no-use-before-define
  questLoop();
};

const questLoop = () => {
  i = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (i; i <= 2;) {
    // eslint-disable-next-line no-use-before-define
    a = getRandomInt();
    console.log(`Question: ${a}`);
    // eslint-disable-next-line no-use-before-define
    boolA = calc(a);
    ans = readlineSync.question('Your answer: ');
    // eslint-disable-next-line no-use-before-define
    checkAns(ans, boolA);
  }
  // eslint-disable-next-line no-bitwise
  if (i >= 2 & !error & !errorAns) {
    console.log(`Congratulations, ${name}`);
  }
  // eslint-disable-next-line no-bitwise
  if (i >= 2 & errorAns) {
    console.log(`Let's try again, ${name}!`);
  }
};

// eslint-disable-next-line no-shadow
const checkAns = (str, boolA) => {
  let boolB;
  if (str === 'yes') {
    boolB = true;
    console.log(`boolB= ${boolB}`);
  } else if (str === 'no') {
    boolB = false;
  } else {
    boolB = false;
    error = true;
  }
  // eslint-disable-next-line no-bitwise
  if (boolB & !error & boolA) {
    console.log('Correct!');
    i += 1;
    // eslint-disable-next-line no-bitwise
  } else if (boolB & !error & !boolA) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    i = 3;
    errorAns = true;
    // eslint-disable-next-line no-bitwise
  } else if (!boolB & !error & !boolA) {
    console.log('Correct!');
    // eslint-disable-next-line no-plusplus
    i++;
    // eslint-disable-next-line no-bitwise
  } else if (!boolB & !error & boolA) {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    i = 3;
    errorAns = true;
  } else if (error) {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    i = 3;
    errorAns = true;
  }
};

// eslint-disable-next-line consistent-return,no-shadow
function calc(a) {
  // eslint-disable-next-line eqeqeq
  if (a % 2 == 0) {
    return true;
  }
  // eslint-disable-next-line eqeqeq
  if (a % 2 != 0) {
    return false;
  }
}

function getRandomInt() { // спизжено
  let forRandom;
  if (name.length > 1) {
    forRandom = name.length ** 10;
  } else {
    forRandom = 666;
  }
  return Math.floor(Math.random() * forRandom);
}

// brainEven();
export default brainEven;
