import gsap from 'gsap/gsap-core';
import endGame from './endGame';
import animateHangman from './animateHangman';
import loadingAnimation from './loadingAnimation';

export default function initGame(object) {
  const { word, definitions } = object;
  const wordDefinition = getShortestWordDefinition(definitions);
  const usedLetters = [];

  console.log(word);
  loadingAnimation(false);

  const gameStatus = {
    gameIsOver: false,
    playerLifes: 10,
  };

  updateDefinition(wordDefinition);
  updateSecretWord(word);
  animateKeyboard();
  animateHangman(gameStatus.playerLifes);

  const keyboard = document.querySelector('.keyboard');

  setTimeout(() => listenForEvents(), 2000);

  function listenForEvents() {
    keyboard.addEventListener('click', ({ target }) => {
      const letter = target.getAttribute('value');
      handleUserAction(word, letter, usedLetters, gameStatus);
    });

    window.addEventListener('keypress', e => {
      const letter = e.key;
      const keyCode = e.keyCode;
      if (keyCode >= 97 && keyCode <= 122) {
        handleUserAction(word, letter, usedLetters, gameStatus);
      }
    });
  }
}

const handleUserAction = (word, letter, usedLetters, gameStatus) => {
  if (!letter || gameStatus.gameIsOver || usedLetters.includes(letter)) return;
  usedLetters.push(letter);
  let result = checkLetter(letter, word);

  if (result === false) {
    gameStatus.playerLifes--;
    animateHangman(gameStatus.playerLifes);
    const gameResult = checkLifes(gameStatus.playerLifes, word);
    gameStatus.gameIsOver = gameResult;
  } else {
    const gameResult = checkLifes(gameStatus.playerLifes, word);
    gameStatus.gameIsOver = gameResult;
  }

  markUsedLetters(usedLetters);
};

function markUsedLetters(array) {
  const keyboardKeys = document.querySelectorAll('.keyboard__key');

  keyboardKeys.forEach((key, index) => {
    const value = key.getAttribute('value');

    if (array.includes(value)) keyboardKeys[index].classList.add('used');
  });
}

function checkIfWon(word) {
  const secretWordLetters = [...document.querySelector('.secret-word').children];
  const secretWordLettersArray = secretWordLetters.map(el => el.textContent.toLowerCase());

  if (word.toLowerCase() === secretWordLettersArray.join('')) {
    endGame('win');
    return true;
  }
}

const checkLifes = (lifes, word) => (lifes > 0 ? checkIfWon(word) : endGame('lose', word));

function checkIfGuessed(previousLength, currentLength) {
  if (previousLength < currentLength) return true;
  else return false;
}

function checkLetter(letter, word) {
  const wordArray = word.split('');
  const secretWordContainer = [...document.querySelector('.secret-word').children];
  const lengthBeforeWordCheking = checkLength(secretWordContainer);

  if (wordArray.includes(letter)) {
    wordArray.forEach((element, index) => {
      if (element === letter) {
        secretWordContainer[index].textContent = letter;
      }
    });
  }

  const lengthAfterWordCheking = checkLength(secretWordContainer);

  return checkIfGuessed(lengthBeforeWordCheking, lengthAfterWordCheking);
}

function checkLength(array) {
  let accumulator = 0;
  array.forEach(el => {
    if (el.textContent) accumulator++;
  });

  return accumulator;
}

function getShortestWordDefinition(definitions) {
  const newDefinitionsArray = [];

  definitions.forEach(el => newDefinitionsArray.push(el.definition));
  newDefinitionsArray.sort((a, b) => a.length - b.length);

  return newDefinitionsArray[0];
}

function updateDefinition(wordDefinition) {
  const definitionBox = document.querySelector('.definition-box');
  const definitionText = definitionBox.querySelector('span');

  gsap.fromTo(definitionBox, { opacity: 0, y: '-100' }, { duration: 0.3, opacity: 1, y: 0 });

  definitionText.textContent = wordDefinition;
}

function updateSecretWord(word) {
  const wordArray = [...word];
  const secretWordContainer = document.querySelector('.secret-word');
  const fragment = new DocumentFragment();

  wordArray.forEach(() => {
    const newLetter = document.createElement('div');

    newLetter.classList.add('secret-word__letter');
    fragment.appendChild(newLetter);
  });
  secretWordContainer.appendChild(fragment);

  gsap.fromTo([...secretWordContainer.children], { opacity: 0, x: '100' }, { opacity: 1, x: 0, stagger: 0.1 });
}

function animateKeyboard() {
  const keyboardKey = [...document.querySelectorAll('.keyboard__row')];

  gsap.fromTo(keyboardKey, { opacity: 0, y: '+100' }, { opacity: 1, y: 0, stagger: 0.1 });
}
