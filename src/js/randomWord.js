export default function randomWord() {
  const API_URL = "https://random-words-api.herokuapp.com/w?n=1";

  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data[0])
    .catch((err) => err);
}
