import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import brainEven from './games/even';
import brainGame from './games/games';
import brainCalc from './games/calc';

const brainGames = (game) => {
  let gameDescription = '';
  switch (game) {
    case 'brain-games':
      brainGame();
      break;
    case 'brain-even':
      gameDescription = cdr(brainEven());
      break;
    case 'brain-calc':
      gameDescription = cdr(brainCalc());
      break;

    default:
  }

  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const rightAnswersForWin = 3;
  for (let i = 0; i < rightAnswersForWin; i += 1) {
    let gameData = cons();
    switch (game) {
      case 'brain-games':
        brainGame();
        break;
      case 'brain-even':
        gameData = car(brainEven());
        break;
      case 'brain-calc':
        gameData = car(brainCalc());
        break;

      default:
    }

    const question = car(gameData);
    const correctAnswer = cdr(gameData);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainGames;
