import readlineSync from 'readline-sync';

function getRandomInt(min = 1, max = 30) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
}

const getName = (nameGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  switch (nameGame) {
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
  }

  // console.log("What is the result of the expression?");
  return name;
};

const wrongAns = (cur, err, name) => {
  console.log(`'${err}' is wrong answer ;(. Correct answer was '${cur}'.`);
  console.log(`Let's try again, ${name}!`);
};

const countAndText = (i = 0, name) => {
  if (i > 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const newCountAndText = (name) => {
  console.log(`Congratulations, ${name}!`);
};

// для проверки ответа
const checkAns = (correctAns, name) => {
  // console.log(`правильный ответ==========>> ${correctAns}`);
  const userAns = readlineSync.question('Your answer: ');
  let arr;
  // console.log("answerUser ====> " + answerUser);
  // console.log("answerCalculator ====> " + answerCalculator);
  if (correctAns == userAns) {
    console.log('Correct!');
    return true;
  }
  wrongAns(correctAns, userAns, name);
  return false;
};

export {
  getRandomInt, getName, wrongAns, checkAns, countAndText, newCountAndText,
};
