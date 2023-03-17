import '../scss/styles.scss';

import { createBingo, createCard } from './bingo.js';

const numbersBingo = [];
const bingoNumbers = document.getElementById('bingo-numbers');

const generateNumbersBingo = () => {
  for (let index = 1; index < 100; index++) {
    numbersBingo.push(index);
  }
};

const drawNumbersBingo = () => {
  const randomNumber = Math.floor(Math.random() * 99 + 1);
  numbersBingo[randomNumber];
  console.log(randomNumber);
  numbersBingo.splice(randomNumber, 1);

  //si la clase conicide con el dataset, colorear cambiando clase
};
generateNumbersBingo();
drawNumbersBingo();
createBingo();
createCard();

console.dir(bingoNumbers.children.attributes);
