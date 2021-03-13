export default async function getWordDefinitions(array) {
  const [word] = array;
  const definitionsAPIURL = `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`;

  try {
    const response = await fetch(definitionsAPIURL, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.WORD_DEFINITION_API_KEY,
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error('Could not get word definition', err);
  }
}
