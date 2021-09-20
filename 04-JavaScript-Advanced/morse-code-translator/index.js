"use strict";

// Breakdown

// Grab the variables I want to interact with

const button = document.querySelector("button");
const input = document.querySelector("input");
const output = document.querySelector("output");

// Add an event listener to the button for on click

button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.toggle("btn-clicked");
    // Display the value in the output
    output.innerHTML = input.value;
});
