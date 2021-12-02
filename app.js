// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headImg = document.getElementById('head');
const middleImg = document.getElementById('middle');
const bottomImg = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
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

    const img = document.createElement('img');
    img.src = `./assets/${headId}-head.png`;

    headImg.appendChild(img);
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
    
    const img = document.createElement('img');
    img.src = `./assets/${middleId}-middle.png`;
    
    middleImg.appendChild(img);
    
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    const bottomId = bottomDropdown.value;
    
    bottomCount++;
    
    if (bottomImg.hasChildNodes()) {
        const imgEl = bottomImg.firstChild;
        bottomImg.removeChild(imgEl);
    }
    
    const img = document.createElement('img');
    img.src = `./assets/${bottomId}-pants.png`;
    
    bottomImg.appendChild(img);
    
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const catchPhrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchPhraseArray.push(catchPhrase);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases();
});

function displayStats() {
    // change the text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You clicked the head ${headCount} times, the middle ${middleCount} times, and the bottom ${bottomCount} times`;

    const statsString = makeStatsString(headCount, middleCount, bottomCount); // call this function with the correct arguments
    makeStatsString(statsString);
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    // and for each catchphrase
    for (let catchPhrase of catchPhraseArray) {

        const p = document.createElement('p');
        p.classList.add('catchPhrase');
        p.textContent = catchPhrase;

        catchphrasesEl.append(p);
    }
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
