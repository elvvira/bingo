const bingoNumbers = document.getElementById('bingo-numbers');
const youCard = document.getElementById('you-card');
const pcCard = document.getElementById('pc-card');

const numbersBingo = [];

const createBingo = () => {
  const fragment = document.createDocumentFragment();

  for (let index = 1; index < 100; index++) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('number');
    cardElement.textContent = index;
    cardElement.dataset.number = index;
    fragment.append(cardElement);
    numbersBingo.push(index);
  }
  bingoNumbers.append(fragment);
};

const createCard = () => {
  const fragment = document.createDocumentFragment();

  for (let index = 1; index < 26; index++) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card__number', 'number');

    const randomNumber = Math.floor(Math.random() * numbersBingo.length + 1);
    numbersBingo[randomNumber];
    cardElement.textContent = numbersBingo[randomNumber];
    numbersBingo.splice(randomNumber, 1);

    fragment.append(cardElement);
  }
  youCard.append(fragment);
  for (let index = 1; index < 26; index++) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card__number', 'number');

    const randomNumber = Math.floor(Math.random() * numbersBingo.length + 1);
    numbersBingo[randomNumber];
    cardElement.textContent = numbersBingo[randomNumber];
    numbersBingo.splice(randomNumber, 1);

    fragment.append(cardElement);
  }
  pcCard.append(fragment);
};

export { createBingo, createCard };
