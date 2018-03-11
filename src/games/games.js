import { cons } from 'hexlet-pairs';
import playGame from '../index';

const dataGenerator = () => {
  const question = '';
  const correctAnswer = '';
  return cons(question, correctAnswer);
};

const brainGames = () => {
  const gameDescription = '';
  playGame(dataGenerator, gameDescription);
};

export default brainGames;
