export default function gameInit(obj) {
  const { word, definitions } = obj;

  const wordDefinition = getWordDefinition(definitions);

  console.log(word);
}

function getWordDefinition(array) {
  const index = Math.floor(Math.random() * array.length);
  const { definition } = array[index];

  return definition;
}
