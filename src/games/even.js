import { cons } from 'hexlet-pairs';

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
  const question = getRandomInt(maxRandomNum);
  const answer = isEven(question) ? yesAnswer : noAnswer;

  return cons(cons(question, answer), gameDescription);
};

export default brainEven;
