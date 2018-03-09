import { cons } from 'hexlet-pairs';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const brainCalc = () => {
  const maxRandomNum = 100;

  const gameDescription = 'What is the result of the expression?';

  const firstOperand = getRandomInt(maxRandomNum);
  const secondOperand = getRandomInt(maxRandomNum);
  let question = '';
  let answer = '';
  const randomOperator = getRandomInt(3);
  switch (randomOperator) {
    case 0:
      question = `${firstOperand} + ${secondOperand}`;
      answer = String(firstOperand + secondOperand);
      break;
    case 1:
      question = `${firstOperand} - ${secondOperand}`;
      answer = String(firstOperand - secondOperand);
      break;
    case 2:
      question = `${firstOperand} * ${secondOperand}`;
      answer = String(firstOperand * secondOperand);
      break;
    default:
  }

  return cons(cons(question, answer), gameDescription);
};

export default brainCalc;
