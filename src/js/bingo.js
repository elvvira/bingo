import { aleatoryNumber } from "./utils.js";

const bingoNumbers = document.getElementById("bingo-numbers");

const numbersBingo = Array(99)
  .fill()
  .map((_, index) => index + 1);

const createBingo = () => {
  const fragment = document.createDocumentFragment();
  numbersBingo.forEach((value) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("number");
    cardElement.textContent = value;
    fragment.append(cardElement);
  });

  bingoNumbers.append(fragment);
};

const generateNumbersCard = () => {
  const newNumbers = [];
  while (newNumbers.length < 15) {
    const randomNumbersCard = aleatoryNumber();
    if (!newNumbers.includes(randomNumbersCard)) {
      newNumbers.push(randomNumbersCard);
    }
  }
  return newNumbers;
};

const createCard = (card) => {
  const fragment = document.createDocumentFragment();
  const cardNumbers = generateNumbersCard();
  cardNumbers.forEach((value) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card__number", "number");
    cardElement.textContent = value;
    cardElement.dataset.number = value;

    fragment.append(cardElement);
  });
  card.append(fragment);
};

export { createBingo, createCard };
