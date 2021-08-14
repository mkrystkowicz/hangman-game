import api from './api';

const RANDOM_WORD_URL = 'https://random-words-api.herokuapp.com/w?n=1/';
const DEFINITIONS_URL = 'https://wordsapiv1.p.rapidapi.com/words/';

export default function randomWordAndDefinitions() {
  return api(RANDOM_WORD_URL)
    .then(data => {
      const randomNumber = Math.floor(Math.random() * data.length);
      const randomWord = data[randomNumber];

      return api(`${DEFINITIONS_URL}${randomWord}/definitions`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.WORD_DEFINITION_API_KEY,
          'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
      });
    })
    .then(wordDefsObj => {
      if (wordDefsObj.hasOwnProperty('success')) {
        randomWordAndDefinitions();
      } else if (
        wordDefsObj.hasOwnProperty('definitions') &&
        wordDefsObj.definitions.length > 0
      ) {
        return wordDefsObj;
      }
    })
    .catch(err => {
      throw new Error(err);
    });
}
