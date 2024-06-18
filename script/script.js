import {
  getCharacterCards,
  getCharacterModals,
  // Загрузка персонажей с URL - раскоментировать
  // fetchCharacters,
} from "./fun.js";

// Загрузка персонажей с File - закоментировать
import { characters } from "../data/data.js";

async function start() {
  let characterCardBox = document.querySelector("#character-card-box");
  let characterModalBox = document.querySelector("#character-modal-box");
  // Загрузка персонажей с URL - раскоментировать
  // let characters = await fetchCharacters();

  characterCardBox.innerHTML = getCharacterCards(characters).join("");
  characterModalBox.innerHTML = getCharacterModals(characters).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  start();
});
