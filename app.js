// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headImg = document.getElementById('head');
const middleImg = document.getElementById('middle');
const bottomImg = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const chatchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
// set state for all of the character's catchphrases
let catchPhraseArray = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const headId = headDropdown.value;
    // increment the head change count state
    headCount++;
    // update the dom for the head
    if (headImg.hasChildNodes()) {
        const imgEl = headImg.firstChild;
        headImg.removeChild(imgEl);
    }

    headImg.src = `./assets/${headId}-head.png`;

    // update the stats to show the new count
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    const middleId = middleDropdown.value;

    middleCount++;

    if (middleImg.hasChildNodes()) {
        const imgEl = middleImg.firstChild;
        middleImg.removeChild(imgEl);
    }

    middleImg.src = `./assets/${middleId}-middle.png`;

    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    const bottomId = bottomDropdown.value;
    
    bottomCount++;
    
    if (bottomImg.hasChildNodes()) {
        const imgEl = bottomImg.firstChild;
        bottomImg.removeChild(imgEl);
    }
    
    bottomImg.src = `./assets/${bottomId}-pants.png`;
    
    displayStats();
    
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    
    // push the new catchphrase to the catchphrase array in state
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (call a function to do this work)

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(); // call this function with the correct arguments
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
