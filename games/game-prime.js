import  {getRandomInt, getName, countAndText, wrongAns, checkAns, newCountAndText} from '../src/index.js';
import readlineSync from "readline-sync";

let gameName = 'prime';

function brainPrime() {
    let name = getName(gameName);
    let checkLoop = true;
    let p =0;
    while (checkLoop){
        checkLoop = primeAndCheck(name);
        if(checkLoop){
            p++;
        }
        if (p === 3){
            checkLoop = false;
        }
    }


    if (p === 3){
        newCountAndText(name);
    }
};

function primeAndCheck(name){
    let a = getRandomInt(1, 100);
    console.log("Question: " + a);
    let text = '';
    let isPrime = true;
    let j = 0;
    for (let i = 1; i <= a/2; i++){
        if (a % i == 0){
            j++;
        }
    }
    if (j !== 1){
        isPrime = false;
    }
    if (a === 1) {
        isPrime = true;
    }
    //return isPrime;

    if(isPrime) {
        text = "yes";
    } else {
        text = "no";
    }


    return checkAns(text, name);
};

brainPrime();
export default brainPrime;