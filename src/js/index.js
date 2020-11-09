import showGameInfo from "./showGameInfo";
import "../scss/main.scss";

window.addEventListener("DOMContentLoaded", () => {
  const gameStartBtn = document.querySelector(".game-start-btn");
  const gameInfoBtn = document.querySelector(".game-info-btn");

  gameInfoBtn.addEventListener("click", showGameInfo);
});