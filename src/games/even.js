import { cons } from 'hexlet-pairs';
import playGame from '../index';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const generator = () => {
  const maxRandomNum = 100;
  const yesAnswer = 'yes';
  const noAnswer = 'no';
  const question = getRandomInt(maxRandomNum);
  const correctAnswer = isEven(question) ? yesAnswer : noAnswer;
  return cons(question, correctAnswer);
};

const brainEven = () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  playGame(generator, gameDescription);
};

export default brainEven;
