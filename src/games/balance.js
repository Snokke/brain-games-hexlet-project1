import { cons } from 'hexlet-pairs';
import playGame from '../index';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const generator = () => {
  const maxRandomNum = 100;
  const question = '';
  const correctAnswer = '';
  return cons(question, correctAnswer);
};

const brainBalance = () => {
  const gameDescription = 'Balance the given number.';
  playGame(generator, gameDescription);
};

export default brainBalance;
