import {
  getRandomInt, getName, checkAns, newCountAndText,
} from '../src/index.js';

const gameName = 'progression';

function createArray() {
  const arrayLength = getRandomInt(5);
  const randomElement = getRandomInt(1, arrayLength);
  let startNumber = getRandomInt(0, 100);
  const shag = getRandomInt(1, 5);
  const arr = [];
  const arrReturn = [];
  let arrElementForCheck;
  for (let i = 0; i < arrayLength; i += 1) {
    arr.push(startNumber);
    startNumber += shag;
  }
  // eslint-disable-next-line prefer-const
  arrElementForCheck = arr[randomElement];
  arr[randomElement] = '..';
  arrReturn.push(arr);
  arrReturn.push(arrElementForCheck);
  console.log(arr);
  return arrReturn;
}

function brainProgression() {
  const name = getName(gameName);
  let i = 0;
  let checkLoop = true;
  while (checkLoop) {
    const res = createArray();
    const checkLoopArray = checkAns(res[1], name);
    checkLoop = checkLoopArray;
    if (checkLoop) {
      i += 1;
    }
    if (i === 3) {
      checkLoop = false;
    }
  }
  if (i === 3) {
    newCountAndText(name);
  }
}

// brainProgression(); //для коммита1
export default brainProgression;
