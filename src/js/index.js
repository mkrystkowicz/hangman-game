import showGameInfo from "./showGameInfo";
import startGame from "./startGame";
import "../scss/main.scss";

window.addEventListener("DOMContentLoaded", () => {
  const gameStartBtn = document.querySelector(".game-start-btn");
  const gameInfoBtn = document.querySelector(".game-info-btn");

  gameStartBtn.addEventListener("click", startGame);
  gameInfoBtn.addEventListener("click", showGameInfo);
});