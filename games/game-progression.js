import  {getRandomInt, getName, countAndText, wrongAns, checkAns, newCountAndText} from '../src/index.js';
import readlineSync from "readline-sync";

let gameName = 'progression';

function brainProgression() {
    let name = getName(gameName);
    //let res = createArray();
    let i = 0;
    //let answerUser = readlineSync.question('Your answer: ');
    let checkLoop = true;
    while (checkLoop){
        let res = createArray();
        let checkLoopArray = checkAns(res[1], name);
        checkLoop = checkLoopArray;
        if(checkLoop){
            i++;
        }
        if (i === 3){
            checkLoop = false;
        }
    }


    if (i === 3){
        newCountAndText(name);
    }
    //checkAns(res[1], name);

}

function createArray(){
    let arrayLength =  getRandomInt(5, );
    let randomElement = getRandomInt(1, arrayLength);
    let startNumber = getRandomInt(0, 100);
    let shag =  getRandomInt(1, 5);
    let arr = [];
    let arrReturn = [];
    let arrElementForCheck;
    for (let i = 0; i < arrayLength; i++){
        arr.push(startNumber);
        startNumber+=shag;
    }
    arrElementForCheck = arr[randomElement];
    arr[randomElement] = '..';
    arrReturn.push(arr);
    arrReturn.push(arrElementForCheck);
    console.log(arr);
    return arrReturn;
};

brainProgression();
export default brainProgression;