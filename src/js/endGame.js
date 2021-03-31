import gsap from 'gsap';

export default function endGame(result, word) {
  const gameEndModal = document.querySelector('.end-game-modal');
  const title = gameEndModal.querySelector('.end-game-modal__title');
  const gameWord = gameEndModal.querySelector('.end-game-modal__game-word');
  const subTitle = gameEndModal.querySelector('.end-game-modal__subtitle');
  const button = gameEndModal.querySelector('.end-game-modal__button');
  const secretWordToUpperCase = word.toUpperCase();

  gameEndModal.classList.add('end-game-modal--active');

  if (result === 'win') {
    title.textContent = 'you won';
    gameWord.textContent = '';
    subTitle.textContent = "unfortunately we don't have any awards 😥";
  } else {
    title.textContent = 'game over';
    gameWord.textContent = `The secret word was ${secretWordToUpperCase}`;
    subTitle.textContent = "don't worry you can try again 😅";
  }

  gameEndModal.addEventListener(
    'transitionend',
    animateModalElements(title, gameWord, subTitle, button)
  );

  button.addEventListener('click', () =>
    window.location.assign(window.location.href)
  );

  return true;
}

function animateModalElements(title, gameWord, subTitle, button) {
  gsap.fromTo(
    [title, gameWord, subTitle],
    { opacity: 0, y: '-100' },
    { duration: 0.5, opacity: 1, y: 0 }
  );
  gsap.fromTo(
    button,
    { opacity: 0, y: '+100' },
    { duration: 0.5, opacity: 1, y: 0 }
  );
}
