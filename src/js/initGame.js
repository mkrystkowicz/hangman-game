import gsap from "gsap/gsap-core";

export default function initGame(object) {
  const { word, definitions } = object;
  const { definition: wordDefinition } = getWordDefinition(definitions);

  updateDefinition(wordDefinition);
  updateSecretWord(word);
  animateKeyboard();
}

function getWordDefinition(definitions) {
  const index = Math.floor(Math.random() * definitions.length);

  return definitions[index];
}

function updateDefinition(wordDefinition) {
  const definitionBox = document.querySelector(".definition-box");
  const definitionText = definitionBox.querySelector("span");
  gsap.fromTo(
    definitionBox,
    { opacity: 0, y: "-100" },
    { duration: 0.3, opacity: 1, y: 0 }
  );
  definitionText.textContent = wordDefinition;
}

function updateSecretWord(word) {
  const wordArray = [...word];
  const secretWordContainer = document.querySelector(".secret-word");
  const fragment = new DocumentFragment();

  wordArray.forEach((letter) => {
    const newLetter = document.createElement("div");

    newLetter.textContent = letter;
    newLetter.classList.add("secret-word__letter");
    fragment.appendChild(newLetter);
  });
  secretWordContainer.appendChild(fragment);
  gsap.fromTo(
    [...secretWordContainer.children],
    { opacity: 0, x: "100" },
    { opacity: 1, x: 0, stagger: 0.1 }
  );
}

function animateKeyboard() {
  const keyboardKey = [...document.querySelectorAll(".keyboard__row")];

  gsap.fromTo(
    keyboardKey,
    { opacity: 0, y: "+100" },
    { opacity: 1, y: 0, stagger: 0.1 }
  );
}