import initGame from "./initGame";
import startGame from "./startGame";

export default async function getWordDefinitions(array) {
  const [word] = array;
  const definitionsAPIURL = `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`;

  try {
    const response = await fetch(definitionsAPIURL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "36f59234bbmsh7b4735ef7b515f9p16ed44jsn3ac5dedfd81e",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      },
    });
    const data = await response.json();

    return initGame(data);
  } catch (err) {
    startGame();
    throw new Error("Could not get word definition", err);
  }
}
