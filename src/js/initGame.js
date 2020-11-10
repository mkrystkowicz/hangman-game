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
  const definitionBox = document.querySelector(".definition-box span");
  definitionBox.textContent = wordDefinition;
}
