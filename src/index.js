import readlineSync from 'readline-sync';

const firstQuestion = () => {
    console.log('Welcome to the Brain Games!');
    const actual = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${actual}`);  
};

export default firstQuestion;