import { startGame, playGame, endGame } from '../index';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const brainGCD = () => {
  const maxRandomNum = 100;
  const gameDescription = 'Find the greatest common divisor of given numbers.';

  const name = startGame(gameDescription);

  const rightAnswersForWin = 3;
  for (let i = 0; i < rightAnswersForWin; i += 1) {
    const num1 = getRandomInt(maxRandomNum);
    const num2 = getRandomInt(maxRandomNum);
    const question = `${num1} ${num2}`;

    const answer = String(gcd(num1, num2));

    if (!playGame(question, answer)) {
      endGame(false, name);
      return;
    }
  }

  endGame(true, name);
};

export default brainGCD;
