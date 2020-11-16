import gsap from "gsap";

export default function endGame(result) {
  const gameEndModal = document.querySelector(".end-game-modal");
  const title = gameEndModal.querySelector(".end-game-modal__title");
  const subTitle = gameEndModal.querySelector(".end-game-modal__subtitle");
  const button = gameEndModal.querySelector(".end-game-modal__button");

    gameEndModal.classList.add("end-game-modal--active");
    
    
    if (result === "win") {
        title.textContent = "you won";
        subTitle.textContent = "unfortunately we don't have any awards 😥";
    } else {
        title.textContent = "game over";
        subTitle.textContent = "don't worry you can try again 😅";
    }
    
    gameEndModal.addEventListener('transitionend', () => animateModalElements(title, subTitle, button))
    
    button.addEventListener("click", () =>
    window.location.assign(window.location.href)
  );
}

function animateModalElements(title, subTitle, button) {
    gsap.fromTo([title,subTitle], {opacity: 0, y: '-100'}, {duration: .5, opacity: 1, y:0})
    gsap.fromTo(button, {opacity: 0, y: '+100'}, {duration: .5, opacity: 1, y:0})
}