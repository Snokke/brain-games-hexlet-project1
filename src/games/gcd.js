import { cons } from 'hexlet-pairs';
import playGame from '../index';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generator = () => {
  const f = () => {
    const maxRandomNum = 100;
    const num1 = getRandomInt(maxRandomNum);
    const num2 = getRandomInt(maxRandomNum);
    const question = `${num1} ${num2}`;
    const correctAnswer = String(gcd(num1, num2));
    return cons(question, correctAnswer);
  };
  return f;
};

const brainGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const data = generator();
  playGame(data, gameDescription);
};

export default brainGcd;
