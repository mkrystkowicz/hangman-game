import gsap from "gsap/gsap-core";

export default function initGame(object) {
  const { word, definitions } = object;
  const { definition: wordDefinition } = getWordDefinition(definitions);

  updateDefinition(wordDefinition);
}

function getWordDefinition(array) {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
}

function updateDefinition(wordDefinition) {
  const definitionText = document.querySelector(".definition-box span");
  // gsap.fromTo()
  definitionText.textContent = wordDefinition;
}
