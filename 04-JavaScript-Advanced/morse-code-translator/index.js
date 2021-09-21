"use strict";

// Breakdown

// Grab the variables I want to interact with
// To be moved to the relevant classes once refined

const input = document.querySelector("input");
const output = document.querySelector("output");

const switchBtn = document.querySelector(".switch");
const switchTitle = document.querySelector("h4");

const translateBtn = document.querySelector(".translate");
const sectionTwo = document.querySelector(".s2");

// Created my class for the Translator
class Translator {
    constructor(english, morse) {
        this.english = english;
        this.morse = morse;
    }

    translate() {
        // Object for the morse code alphabet
        const alphabet = {
            a: ".-",
            b: "-...",
            c: "-.-.",
            d: "-..",
            e: ".",
            f: "..-.",
            g: "--.",
            h: "....",
            i: "..",
            j: ".---",
            k: "-.-",
            l: ".-..",
            m: "--",
            n: "-.",
            o: "---",
            p: ".--.",
            q: "--.-",
            r: ".-.",
            s: "...",
            t: "-",
            u: "..-",
            v: "...-",
            w: ".--",
            x: "-..-",
            y: "-.--",
            z: "--..",
        };

        console.log(alphabet);

        // Loop through the object above to get the values only
        // Object.values(alphabet).forEach((letter) => console.log(letter));

        // using local storage to setItems and get them back on the page
        const value = localStorage.setItem(alphabet, input.value);
        const inputValue = localStorage.getItem(alphabet, value);

        const string = JSON.stringify(inputValue);
        const newVal = JSON.parse(string);

        output.innerHTML = newVal;

        // Error handling
        if (!newVal) {
            translateBtn.classList.toggle("btn-clicked-fail");
            sectionTwo.classList.toggle("s2-toggled-fail");
            output.innerHTML = `You need to enter some text`;
        }
    }

    // Method for switching the title. To be moved elsewhere
    switchTitle() {
        if (switchTitle.innerHTML === "English to Morse Code") {
            switchTitle.innerHTML = "Morse Code to English";
        } else {
            switchTitle.innerHTML = "English to Morse Code";
        }
    }

    // Method for if its translated successfully.
    handleTranslateBtnSuccess() {
        translateBtn.classList.toggle("btn-clicked");
        sectionTwo.classList.toggle("s2-toggled");
    }
}

// Created a new translator
const translator = new Translator();

// Adding Event Listeners to the 2 buttons

switchBtn.addEventListener("click", () => {
    translator.switchTitle();
});

translateBtn.addEventListener("click", () => {
    translator.handleTranslateBtnSuccess();
    translator.translate();
});
