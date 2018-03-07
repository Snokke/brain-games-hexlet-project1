import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}`);
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const brainEven = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const maxRandomNum = 100;
  const yesAnswer = 'yes';
  const noAnswer = 'no';
  const rightAnswersForWin = 3;
  for (let i = 0; i < rightAnswersForWin; i += 1) {
    const randomNum = getRandomInt(maxRandomNum);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if ((isEven(randomNum) && answer === yesAnswer) ||
       (!isEven(randomNum) && answer === noAnswer)) {
      console.log('Correct!');
    } else {
      const rightAnswer = isEven(randomNum) ? yesAnswer : noAnswer;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { brainEven, welcome };
