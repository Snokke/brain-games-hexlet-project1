import { startGame, playGame, endGame } from '../index';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const brainEven = () => {
  const maxRandomNum = 100;
  const yesAnswer = 'yes';
  const noAnswer = 'no';
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

  const name = startGame(gameDescription);

  const rightAnswersForWin = 3;
  for (let i = 0; i < rightAnswersForWin; i += 1) {
    const question = getRandomInt(maxRandomNum);
    const answer = isEven(question) ? yesAnswer : noAnswer;
    if (!playGame(question, answer)) {
      endGame(false, name);
      return;
    }
  }

  endGame(true, name);
};

export default brainEven;
