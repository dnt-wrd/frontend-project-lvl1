import readlineSync from 'readline-sync';

let name, i;
let boolA, a, ans;

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
}

const checkAns = (str, boolA) => {
    console.log("22222222222222str = " + str + " boolA = " + boolA);
    let boolB;
    let error = false;
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
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\n" +
            "Let's try again, "+ name +"!");
        i = 0;
    }
    else if (!boolB & !error & !boolA){
        console.log("Correct!");
        i++;
    }
    else if (!boolB & !error & boolA){
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.\n" +
            "Let's try again, "+ name +"!");
        i=0;
    }
    else if (error){
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.\n" +
            "Let's try again, "+ name +"!");
        i=0;
    }
    console.log(i);
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

function getRandomInt() {
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