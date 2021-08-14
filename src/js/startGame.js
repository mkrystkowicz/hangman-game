import gsap from 'gsap';
import loadingAnimation from './loadingAnimation';
import initGame from './initGame';
import randomWordAndDefinitions from './randomWordAndDefinitions';
import showError from './showError';

export default async function startGame() {
  scrollToGame();
  disableButtons();

  loadingAnimation(true);

  const logoContainer = document.querySelector('.game__header .logo-container');

  randomWordAndDefinitions()
    .then(data => {
      initGame(data);
    })
    .catch(err => showError(err.message));

  logoContainer.addEventListener('click', () => restartGame());
}

function scrollToGame() {
  const height = window.innerHeight;
  const header = document.querySelector('.header');
  const gameHeader = document.querySelector('.game__header');

  const tl = gsap.timeline();
  tl.to(header, { duration: 0.5, scale: 0, y: `-=${height / 4}` });
  window.scrollTo({
    top: height,
    left: 0,
    behavior: 'smooth',
  });
  tl.to(gameHeader, { duration: 0.3, opacity: 1, y: 0 });
}

function disableButtons() {
  const header = document.querySelector('.header');
  const buttons = header.querySelectorAll('.btn');

  buttons.forEach(btn => btn.setAttribute('disabled', '1'));
}

function restartGame() {
  window.location.assign(window.location.href);
}
