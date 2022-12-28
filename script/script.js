import {
  getCharacterCards,
  getCharacterModals,
  fetchCharacters,
} from "./fun.js";

async function start() {
  let characterCardBox = document.querySelector("#character-card-box");
  let characterModalBox = document.querySelector("#character-modal-box");
  let characters = await fetchCharacters();

  characterCardBox.innerHTML = getCharacterCards(characters).join("");
  characterModalBox.innerHTML = getCharacterModals(characters).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  start();
});
