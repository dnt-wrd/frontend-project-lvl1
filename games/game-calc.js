import readlineSync from 'readline-sync';
import  {getRandomInt, getName} from '../src/index.js';

const brainCalc = () => {

    let name = getName();
    let a = getRandomInt();
    let b = getRandomInt();
    let c = randomOper();
    checkCalc(calculator(a,b,c));
}

const randomOper = () => {
    let oper = ['+', "-", "*"];
    let numberOper = getRandomInt(0,2);
    console.log(oper[numberOper]);
    return oper[numberOper];
}

const calculator = (a, b, c) => {
    let answer;
    console.log("Question: " + a + " " + c + " " + b);
    switch (c) {
        case "+":
            answer = a + b;
            break;
        case "-":
            answer = a - b;
            break;
        case "*":
            answer = a * b;
            break;
    }
    return answer;
}

const checkCalc = (answerCalculator) => {
    let answerUser = readlineSync.question('Your answer: ');
    console.log("answerUser ====> " + answerUser);
    console.log("answerCalculator ====> " + answerCalculator);
    if (answerCalculator == answerUser) {
        console.log("Correct!");
    } else {
        console.log("ошибка");
    }
}






brainCalc();
export default brainCalc;