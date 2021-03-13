export default async function randomWord() {
  const randomWordURL = "https://random-words-api.herokuapp.com/w?n=1/";

  try {
    const response = await fetch(randomWordURL);
    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error("Could not get word", err);
  }
};
