import gsap from "gsap";
import getRandomWord from "./randomWord";
import getWordDefinitions from "./getWordDefinitions";

export default function startGame() {
  scrollToGame();
  removeTabIndex();

  const logoContainer = document.querySelector(".game__header .logo-container");
  
  getRandomWord().then((data) => getWordDefinitions(data));

  logoContainer.addEventListener("click", () => restartGame());
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
  tl.to(
    gameHeader,
    { duration: 0.3, opacity: 1, y: 0 }
  );
}

function removeTabIndex() {
  const header = document.querySelector(".header");
  const buttons = header.querySelectorAll(".btn");

  buttons.forEach((btn) => btn.setAttribute("tabindex", "-1"));
}

function restartGame(){
   window.location.assign(window.location.href)
};
