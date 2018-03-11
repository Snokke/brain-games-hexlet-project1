import { cons } from 'hexlet-pairs';
import playGame from '../index';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const isPrime = (num) => {
  if (num <= 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const dataGenerator = () => {
  const maxRandomNum = 100;
  const yesAnswer = 'yes';
  const noAnswer = 'no';

  const question = getRandomInt(maxRandomNum);
  const correctAnswer = isPrime(question) ? yesAnswer : noAnswer;
  return cons(question, correctAnswer);
};

const brainPrime = () => {
  const gameDescription = 'Is this number prime?';
  playGame(dataGenerator, gameDescription);
};

export default brainPrime;
