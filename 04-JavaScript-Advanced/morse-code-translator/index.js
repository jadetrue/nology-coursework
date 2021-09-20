"use strict";

// Breakdown

// Grab the variables I want to interact with

const translateBtn = document.querySelector(".translate");
const input = document.querySelector("input");
const output = document.querySelector("output");
const sectionTwo = document.querySelector(".s2");

const switchBtn = document.querySelector(".switch");
const switchTitle = document.querySelector("h4");

// Created my class for the Translator

class Translator {
    constructor() {}

    switchTitle() {
        if (switchTitle.innerHTML === "English to Morse Code") {
            switchTitle.innerHTML = "Morse Code to English";
        } else {
            switchTitle.innerHTML = "English to Morse Code";
        }
    }

    handleTranslateBtn() {
        translateBtn.classList.toggle("btn-clicked");
        sectionTwo.classList.toggle("s2-toggled");
        // Display the value in the output
        output.innerHTML = input.value;
    }
}

// Created a new translator
const translator = new Translator();

switchBtn.addEventListener("click", () => {
    translator.switchTitle();
});

translateBtn.addEventListener("click", () => {
    translator.handleTranslateBtn();
});
