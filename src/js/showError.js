import startGame from './startGame';

export default function showError(errorMessage) {
  const errorInfoContainer = document.querySelector('.error-info');
  const errorInfoText = errorInfoContainer.querySelector('.error-info__text');
  const errorInfoBtn = errorInfoContainer.querySelector('.error-info__button');

  errorInfoContainer.classList.add('error-info--active');
  errorInfoText.textContent = errorMessage;

  errorInfoBtn.addEventListener('click', () => {
    errorInfoContainer.classList.remove('error-info--active');
    errorInfoText.textContent = '';

    startGame();
  });
}
