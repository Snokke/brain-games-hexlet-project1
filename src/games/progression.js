import { cons } from 'hexlet-pairs';
import playGame from '../index';

const getRandomInt = (min, max) => {
  const minResult = Math.ceil(min);
  const maxResult = Math.floor(max);
  return Math.floor(Math.random() * (maxResult - minResult)) + minResult;
};

const dataGenerator = () => {
  const maxStartNum = 100;
  const maxDelta = 20;
  const maxSteps = 10;
  const startNum = getRandomInt(0, maxStartNum);
  const delta = getRandomInt(1, maxDelta);
  const secretProgressionMember = getRandomInt(0, maxSteps - 2);

  let resultQuestion = `${startNum}`;
  let currentNum = startNum;
  for (let i = 0; i < maxSteps - 1; i += 1) {
    currentNum += delta;
    if (secretProgressionMember === i) {
      resultQuestion = `${resultQuestion} ..`;
    } else {
      resultQuestion = `${resultQuestion} ${currentNum}`;
    }
  }

  const question = resultQuestion;
  const correctAnswer = String(startNum + ((secretProgressionMember + 1) * delta));
  return cons(question, correctAnswer);
};

const brainProgression = () => {
  const gameDescription = 'What number is missing in this progression?';
  playGame(dataGenerator, gameDescription);
};

export default brainProgression;
