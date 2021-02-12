// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { sync } from './dom-utilities';

const submitButton = document.getElementById('button-main');

submitButton.addEventListener('click', () => {});

const syncInit = () => {
    for (let i = 1; i < 14; i++) {
        const inputElement = document.getElementById(`input-${i}`);
        const spanElement = document.getElementById(`blank-${i}`);
        inputElement.placeholder = spanElement.textContent;
    }
};

syncInit();

document.addEventListener('DOMContentLoaded', syncInit());