import readlineSync from 'readline-sync';

function getRandomInt(min = 1, max = 10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const getName = (nameGame) => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
        console.log("Hello, " + name + "!");
        switch (nameGame){
            case "gcd":
                console.log("Find the greatest common divisor of given numbers.");
                break;
            case "calc":
                console.log("What is the result of the expression?");
                break;
        }

        //console.log("What is the result of the expression?");
        return name;
}

const wrongAns = (cur, err) => {
    console.log("\'" + err + "\' is wrong answer ;(. Correct answer was \'" + cur + "\'.")
}

const countAndText = (i = 0, name) => {
    if (i >= 3){
        console.log("Congratulations, " + name + "!");
    }

}

export {getRandomInt, getName, wrongAns};

