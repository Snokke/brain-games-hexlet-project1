import { cons } from 'hexlet-pairs';
import playGame from '../index';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const generator = () => {
  const maxRandomNum = 100;
  const firstOperand = getRandomInt(maxRandomNum);
  const secondOperand = getRandomInt(maxRandomNum);
  let question = '';
  let correctAnswer = '';
  const randomOperator = getRandomInt(3);
  switch (randomOperator) {
    case 0:
      question = `${firstOperand} + ${secondOperand}`;
      correctAnswer = String(firstOperand + secondOperand);
      break;
    case 1:
      question = `${firstOperand} - ${secondOperand}`;
      correctAnswer = String(firstOperand - secondOperand);
      break;
    case 2:
      question = `${firstOperand} * ${secondOperand}`;
      correctAnswer = String(firstOperand * secondOperand);
      break;
    default:
  }
  return cons(question, correctAnswer);
};

const brainCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  playGame(generator, gameDescription);
};

export default brainCalc;
