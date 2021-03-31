export default function showGameInfo() {
  const modal = document.querySelector('.game-info');
  const closeBtn = modal.querySelector('.game-info__close-btn');
  const modalChildren = [...modal.children];

  modalChildren.forEach(child => (child.style.opacity = '1'));
  modal.classList.add('game-info--active');

  closeBtn.addEventListener('click', () => closeModal(modal, modalChildren));
}

function closeModal(modal, modalChildren) {
  modalChildren.forEach(child => (child.style.opacity = '0'));

  modal.classList.remove('game-info--active');
}
