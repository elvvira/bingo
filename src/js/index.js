import "../scss/styles.scss";

import { createBingo, createCard } from "./bingo.js";
import { aleatoryNumber } from "./utils.js";

const bingoNumbers = document.getElementById("bingo-numbers");
const youCard = document.getElementById("you-card");
const pcCard = document.getElementById("pc-card");
const button = document.getElementById("button");
let timeDraw;

const drawBingo = (duration) => {
  timeDraw = setInterval(() => {
    const numbersBingoFinal = aleatoryNumber();
    bingoNumbers.children[numbersBingoFinal - 1].classList.add(
      "number--select"
    );
    checkNumbers(numbersBingoFinal);
  }, duration);

  // console.log(timeDraw);
};

const checkNumbers = (numberFinal) => {
  const youNumberCorrect = youCard.querySelector(
    `[data-number='${numberFinal}']`
  );
  const pcNumberCorrect = pcCard.querySelector(
    `[data-number='${numberFinal}']`
  );
  // console.log(youNumberCorrect);
  if (youNumberCorrect) {
    youNumberCorrect.classList.add("card__number--select");
  }
  // console.log(youCard.classList);
  if (pcNumberCorrect) {
    pcNumberCorrect.classList.add("card__number--select");
  }
  finalGame();
};
const finalGame = () => {
  const youCorrect = youCard.querySelectorAll(".card__number--select");
  const pcCorrect = pcCard.querySelectorAll(".card__number--select");
  console.log(youCorrect.length);
  if (youCorrect.length === 15) {
    clearInterval(timeDraw);
    console.log("has ganado");
  }
  if (pcCorrect.length === 15) {
    clearInterval(timeDraw);
    console.log("has perdido");
  }
};

createBingo();
createCard(youCard);
createCard(pcCard);
aleatoryNumber();

button.addEventListener("click", () => {
  drawBingo(100);
});
