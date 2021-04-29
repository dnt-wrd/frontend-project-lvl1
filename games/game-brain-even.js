import readlineSync from 'readline-sync';

let name, i;
let boolA, a, ans;
let error = false;
let errorAns = false;

const brainEven = () => {
    console.log("Welcome to the Brain Games!");

    name = readlineSync.question('May I have your name? ');

    console.log("Hello, " + name + "!");
    //a = getRandomInt();
    //console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
    //console.log('Question: ' + a);
    //boolA = calc(a);
    //ans = readlineSync.question('Your answer: ');
    questLoop();
    //console.log("0000000000str = " + ans + "boolA = " + boolA);

};

const questLoop = () => {
    //console.log("1111111111str = " + str + " boolA = " + boolA);
    i = 0;

    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

    //console.log("1111111111111111111111111 " + boolA + " 222222 " + ans);

    for ( i; i <=2;) {
        a = getRandomInt();
        console.log('Question: ' + a);
        boolA = calc(a);
        ans = readlineSync.question('Your answer: ');
        checkAns(ans, boolA);
    }
    //console.log("dfd=========================> " +i);
    if (i >= 2 & !error & !errorAns){
        console.log("Congratulations, " + name);
    }

    if (i >= 2 & errorAns){
        console.log("Let's try again, " + name + "!");
    }
}

const checkAns = (str, boolA) => {
    //console.log("22222222222222str = " + str + " boolA = " + boolA);
    let boolB;

    if (str === "yes") {
        boolB = true;
        console.log("boolB= " + boolB);
    } else if (str === "no"){
        boolB = false;
    } else {
        boolB = false;
        error = true;
    }

    if (boolB & !error & boolA) {
        console.log("Correct!");
        i++;
    } else if (boolB & !error & !boolA){
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        i = 3;
        errorAns = true;
    }
    else if (!boolB & !error & !boolA){
        console.log("Correct!");
        i++;
    }
    else if (!boolB & !error & boolA){
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        i=3;
        errorAns = true;
    }
    else if (error){
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        i=3;
        errorAns = true;
    }
    //console.log(i);
}

const quest = (ans) => {
    const userAns = readlineSync.question('Your answer: ');

}

const calc = (a) => {
    if (a % 2 == 0){
        return true;
    } else {
        if (a % 2 != 0) {
            return false;
        }
    }
}

function getRandomInt() { //спизжено
    let forRandom
    if (name.length > 1) {
        forRandom = name.length ** 10;
    } else {
        forRandom = 666;
    }

    return Math.floor(Math.random() * forRandom);
}



brainEven();
export default brainEven;