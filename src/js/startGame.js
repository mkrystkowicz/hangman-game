import gsap from "gsap";
import getRandomWord from "./randomWord";
import getWordDefinitions from "./getWordDefinitions";
import initGame from "./initGame";

export default function startGame() {
  scrollToGame();
  disableButtons();

  const logoContainer = document.querySelector(".game__header .logo-container");

  randomWordAndDefinitions();

  logoContainer.addEventListener("click", () => restartGame());
}

function randomWordAndDefinitions() {
  getRandomWord()
    .then((data) => getWordDefinitions(data))
    .then((wordDefsObj) => {
      if (wordDefsObj.hasOwnProperty("success")) {
        randomWordAndDefinitions();
      } else if (
        wordDefsObj.hasOwnProperty("definitions") &&
        wordDefsObj.definitions.length > 0
      ) {
        initGame(wordDefsObj);
      } else {
        randomWordAndDefinitions();
      }
    });
}

function scrollToGame() {
  const height = window.innerHeight;
  const header = document.querySelector(".header");
  const gameHeader = document.querySelector(".game__header");

  const tl = gsap.timeline();
  tl.to(header, { duration: 0.5, scale: 0, y: `-=${height / 4}` });
  window.scrollTo({
    top: height,
    left: 0,
    behavior: "smooth",
  });
  tl.to(gameHeader, { duration: 0.3, opacity: 1, y: 0 });
}

function disableButtons() {
  const header = document.querySelector(".header");
  const buttons = header.querySelectorAll(".btn");

  buttons.forEach((btn) => btn.setAttribute("disabled", "1"));
}

function restartGame() {
  window.location.assign(window.location.href);
}
