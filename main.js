
/*
    steps to create the project
    [01]create html markup
    [02]add styling  and sepatate form logic
    [03]crate the app logic
    ---[01] Add levels
    ---[02]  show level and seconds
    ---[03]  add array of words
    ---[04]  add start game button 
    ---[05]  generate upcoming words
    ---[06]  disable copy word and paste Event + focus on input 
    ---[07]  start play function
    ---[08]   start the time and count score
    ---[09]   add the Error Anf success masseges
    [04]
    
*/

// Array Of Word 
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "paradigm",
    "styling",
    "Cascode",
    "Task",
    "Azzom",
    "Development",
    "Rust",
    "Playing",
    "Styding",
    "Sleeping",
    "Go",
    "School",
    "Spaces",
    "Point",
    "Buy"
]

// setting Levels

const lvls = {
    "Easy": 7,
    "Normal": 6,
    "Hard": 3
};

//Defult Level 
let defultLevelName = "Normal"; // change Level From Here
let defultLevelSeconds = lvls[defultLevelName];

//catch selectors
let startButton = document.querySelector(".start");
let levelNameSpan = document.querySelector(".message .lvl");
let SocendsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timespan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finshMassege = document.querySelector(".finish");

// setting Level Name + Seconds + Score

levelNameSpan.innerHTML = defultLevelName;
SocendsSpan.innerHTML = defultLevelSeconds;
timespan.innerHTML = defultLevelSeconds;
scoreTotal.innerHTML = words.length;

// disable Past Event

input.onpaste = function() {
    return false;
}

// Start Game

startButton.onclick = function() {
    this.remove();
    input.focus();
    // Generate word function
    genword();
}

function genword () {
    // get random word from array
    let randomWord = words[Math.floor(Math.random()* words.length)];
    // get word index
    let index = words.indexOf(randomWord);
    // remove word from array
    words.splice(index, 1);
    // Show The random Word
    theWord.innerHTML  = randomWord;
    //empety upcoming word
    upcomingWords.innerHTML = '';
    // generate up coming word
    for(let i=0; i < words.length; i++) {
        // create div element
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    // start play funtion
    startplay()
}

// start play funtion
function startplay() {
    timespan.innerHTML = defultLevelSeconds;
    let start  = setInterval(() => {
        timespan.innerHTML--;
        if(timespan.innerHTML === "0") {
        // stop Timer
        clearInterval(start);
        // compare Words
        if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
        input.value = '';
        // increase score
        scoreGot.innerHTML++;
        if(words.length >0) {
            // call genrate word fucntion
            genword();
        }else {
            let span = document.createElement("span");
            span.className = "Excellencet";
            let spanText = document.createTextNode("Congratulations you Won");
            span.appendChild(spanText);
            finshMassege.appendChild(span);
            
            //remove upcomingWords
            upcomingWords.remove();
        }
        }else {
            let span = document.createElement("span");
            span.className = "bad";
            let spanText = document.createTextNode("Game Over");
            span.appendChild(spanText);
            finshMassege.appendChild(span);
        }
        }
    }, 1000);
    
}