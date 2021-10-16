"use strict";

const input = document.querySelector("input");
const output = document.querySelector("output");

const switchBtn = document.querySelector(".switch");
const switchTitle = document.querySelector("h4");

const translateBtn = document.querySelector(".translate");
const clearBtn = document.querySelector(".clear");
const sectionTwo = document.querySelector(".s2");

let outputArray = [];
let newOutputArray = [];
// Created my class for the Translator
class Translator {
    constructor(alphabet, morse) {
        this.alphabet = {
            a: ".-",
            b: "-...",
            c: "-.-.",
            d: "-..",
            e: " .",
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
        this.morse = {
            ".-": "a",
            "-...": "b",
            "-.-.": "c",
            "-..": "d",
            " .": "e",
            "..-.": "f",
            "--.": "g",
            "....": "h",
            "..": "i",
            ".---": "j",
            "-.-": "k",
            ".-..": "l",
            "--": "m",
            "-.": "n",
            "---": "o",
            ".--.": "p",
            "--.-": "q",
            "--.-": "r",
            "...": "s",
            "-": "t",
            "..-": "u",
            "...-": "v",
            ".--": "w",
            "-..-": "x",
            "-.--": "y",
            "--..": "z",
        };
    }

    clearOutput() {
        output.value = "";
        localStorage.clear();
        translateBtn.classList.remove("btn-clicked");
        sectionTwo.classList.remove("s2-toggled");
    }

    translate() {
        // Object for the morse code alphabet
        const inputValue = input.value.toLowerCase();

        Object.values(inputValue).forEach((letter) =>
            outputArray.push(this.alphabet[letter])
        );

        const newValue = outputArray.join("");

        output.innerHTML = newValue;
        input.value = "";
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
        translateBtn.classList.add("btn-clicked");
        sectionTwo.classList.add("s2-toggled");
    }
}

// Created a new translator
const translator = new Translator();

// Adding Event Listeners to the buttons

switchBtn.addEventListener("click", () => {
    translator.switchTitle();
    translator.clearOutput();
});

translateBtn.addEventListener("click", () => {
    translator.handleTranslateBtnSuccess();
    translator.translate();
});

clearBtn.addEventListener("click", () => {
    translator.clearOutput();
});
