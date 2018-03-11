import { cons } from 'hexlet-pairs';
import playGame from '../index';

const getRandomInt = (min, max) => {
  const minResult = Math.ceil(min);
  const maxResult = Math.floor(max);
  return Math.floor(Math.random() * (maxResult - minResult)) + minResult;
};

const getDigit = (num, digit) => Math.floor((num / (10 ** (digit - 1))) % 10);

const setDigit = (num, digit, value) => {
  let resultZero = num;
  resultZero -= (getDigit(num, digit) * (10 ** (digit - 1)));
  resultZero += (value * (10 ** (digit - 1)));
  return resultZero;
};

const getMaxDigit = (num) => {
  const digits = Math.floor((Math.log(num) * Math.LOG10E) + 1);
  let maxNumeral = 0;
  for (let i = digits; i > 0; i -= 1) {
    if (getDigit(num, i) > maxNumeral) {
      maxNumeral = getDigit(num, i);
    }
  }
  return maxNumeral;
};

const getMinDigit = (num) => {
  const digits = Math.floor((Math.log(num) * Math.LOG10E) + 1);
  let minNumeral = 9;
  for (let i = digits; i > 0; i -= 1) {
    if (getDigit(num, i) < minNumeral) {
      minNumeral = getDigit(num, i);
    }
  }
  return minNumeral;
};

const reduceByOne = (num) => {
  const digits = Math.floor((Math.log(num) * Math.LOG10E) + 1);
  const maxNumeral = getMaxDigit(num);
  let moreBalancedNum = num;

  for (let i = digits; i > 0; i -= 1) {
    if (getDigit(num, i) === maxNumeral) {
      moreBalancedNum -= (10 ** (i - 1));
      break;
    }
  }
  return moreBalancedNum;
};

const inceraseByOne = (num) => {
  const digits = Math.floor((Math.log(num) * Math.LOG10E) + 1);
  const minNumeral = getMinDigit(num);
  let moreBalancedNum = num;

  for (let i = digits; i > 0; i -= 1) {
    if (getDigit(num, i) === minNumeral) {
      moreBalancedNum += (10 ** (i - 1));
      break;
    }
  }
  return moreBalancedNum;
};

const sort = (num) => {
  let tmp = 0;
  let result = num;
  const digits = Math.floor((Math.log(result) * Math.LOG10E) + 1);
  for (let i = digits; i > 0; i -= 1) {
    for (let j = 1; j < i; j += 1) {
      if (getDigit(result, j) < getDigit(result, j + 1)) {
        tmp = getDigit(result, j);
        result = setDigit(result, j, getDigit(result, j + 1));
        result = setDigit(result, j + 1, tmp);
      }
    }
  }
  return result;
};

const isBalanceNum = (num) => {
  if ((getMaxDigit(num) - getMinDigit(num)) <= 1) {
    return true;
  }
  return false;
};

const balanceNum = (num) => {
  if (isBalanceNum(num)) {
    return num;
  }
  let moreBalancedNum = 0;
  moreBalancedNum = reduceByOne(num);
  moreBalancedNum = inceraseByOne(moreBalancedNum);

  return balanceNum(moreBalancedNum);
};

const dataGenerator = () => {
  const minRandomNum = 100;
  const maxRandomNum = 10000;
  const question = String(getRandomInt(minRandomNum, maxRandomNum));
  const correctAnswer = String(sort(balanceNum(question)));
  return cons(question, correctAnswer);
};

const brainBalance = () => {
  const gameDescription = 'Balance the given number.';
  playGame(dataGenerator, gameDescription);
};

export default brainBalance;
