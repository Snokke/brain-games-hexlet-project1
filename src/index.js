import readlineSync from 'readline-sync';

const startGame = (gameDescription) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const playGame = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const endGame = (winOrLose, name) => {
  if (winOrLose) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export { startGame, playGame, endGame };
