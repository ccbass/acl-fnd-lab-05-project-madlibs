// import functions and grab DOM elements

import { sync } from './dom-utilities.js';

const submitButton = document.getElementById('button-main');
const paragraph = document.getElementById('libs-paragraph');

// initialize state

const syncInit = () => {
    for (let i = 1; i < 14; i++) {
        const inputElement = document.getElementById(`input-${i}`);
        const spanElement = document.getElementById(`blank-${i}`);
        inputElement.placeholder = spanElement.textContent;
    };
};

syncInit();

// set event listeners to update state and DOM

submitButton.addEventListener('click', () => {
    for (let i = 1; i < 14; i++) {
        // TODO: check that the inputs are actually filled out
        const inputElement = document.getElementById(`input-${i}`);
        const spanElement = document.getElementById(`blank-${i}`);
        sync(inputElement, spanElement);
    }
    
    paragraph.style.display = 'flex';
});


