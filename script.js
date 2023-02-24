"use strict";
const keyPress = document.querySelector("#input");

document.addEventListener("keydown", (e) => {
    keyPress.textContent += `${e.key}\xa0`;
});