import playGame from '../index';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const generator = () => {
  const f = () => {
    const maxRandomNum = 100;
    const yesAnswer = 'yes';
    const noAnswer = 'no';
    const question = getRandomInt(maxRandomNum);
    const correctAnswer = isEven(question) ? yesAnswer : noAnswer;
    return cons(question, correctAnswer);
  };
  return f;
};

const brainEven = () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  const data = generator();
  playGame(data, gameDescription);
};

export default brainEven;
