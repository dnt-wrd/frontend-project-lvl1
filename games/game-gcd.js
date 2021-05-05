import  {getRandomInt, getName, countAndText, wrongAns, checkAns} from '../src/index.js';
import readlineSync from "readline-sync";

const gameName = "calc";
let a,b, q;
function brainGSD () {
    let name = getName(gameName); //для комита
    //console.log(getRandomInt());


    for (q = 1; q <=3; q++){
        a = getRandomInt();
        b = getRandomInt();
        console.log(`Question: ${a} ${b}`);
        //console.log("OTVET======> " + gcd(a, b));
        let bool = checkAns(gcd(a, b), name);
        if(!bool){
            q = 4;
        }
    }
    if(q = 3){
        countAndText(q, name);
    }


}

function gcd(a, b){

    let i = a;
    while (a % i !== 0 || b % i !== 0) {
        //console.log(a % i);
        i--;
    }
    return i;
}

brainGSD();
export default brainGSD;