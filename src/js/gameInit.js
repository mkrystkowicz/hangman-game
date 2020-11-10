export default function gameInit(object) {
  const { word, definitions } = object;

  const {  definition: wordDefinition  } = getWordDefinition(definitions);
  console.log(wordDefinition);;
}

function getWordDefinition(array) {
  const index = Math.floor(Math.random() * array.length);
  
  return array[index];  
}
