import readlineSync from 'readline-sync';
import  {getRandomInt, getName, wrongAns} from '../src/index.js';
let i = 0;
let errorCalc = false;

const brainCalc = () => {

    let name = getName();
    for (i; i < 3; i++) {
        let boolTest = checkCalc(calculator());
        if(boolTest){
            break;
        }
    }
}
const randomOper = () => {
    let oper = ['+', "-", "*"];
    let numberOper = getRandomInt(0,3);
    //console.log(oper[numberOper]);
    return oper[numberOper];
}

const calculator = () => {
    let a = getRandomInt();
    let b = getRandomInt();
    let c = randomOper();
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
    //console.log("answerUser ====> " + answerUser);
    //console.log("answerCalculator ====> " + answerCalculator);
    if (answerCalculator == answerUser) {
        console.log("Correct!");
    } else {

        wrongAns(answerCalculator, answerUser);
        return errorCalc = true;
    }

}






brainCalc();
export default brainCalc;