import readlineSync from 'readline-sync';

function getRandomInt(min = 1, max = 666) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const getName = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
        console.log("Hello, " + name + "!");
        return name;
}

export {getRandomInt, getName};

