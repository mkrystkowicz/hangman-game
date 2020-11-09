import gameInit from "./gameInit";

export default function getWordDefinitions(word) {
  return fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "36f59234bbmsh7b4735ef7b515f9p16ed44jsn3ac5dedfd81e",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => gameInit(data))
    .catch((err) => err);
}
