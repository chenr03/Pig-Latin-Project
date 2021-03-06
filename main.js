'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const pigLatin = (word) => {


  word = word.trim().toLowerCase();
  console.log(`Your word is ${word}`);
  let firstLetter = word.charAt(0);

  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    let vowelFirst = word + "yay";
    console.log(`${word} starts with a vowel`)
    console.log(`${vowelFirst}`)

    return vowelFirst

  } else {
    let firstMatch = word.match(/[aeiou]/g) || 0;
    let vowel = word.indexOf(firstMatch[0]);
    let consFirst = word.substring(vowel) + word.substring(0, vowel) + "ay";
    console.log(`${word} starts with a consonant`)
    console.log(`${consFirst}`)

    return consFirst

  }
}

const translateNow = () => {

  let inputBox = document.getElementById('textInput');
  let input = inputBox.value
  let newWord = pigLatin(input)
  let output = document.createElement('div')
  let text = document.createTextNode(newWord)
  let answer = document.getElementById('textOutput')
  answer.appendChild(output)
  output.appendChild(text)
}

  // document.getElementById('translate').addEventListener('click', translateNow)


const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}



// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === 'function') {
//
//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {
//
//   getPrompt();

// }


//from here up is the function for JS

//from here down is attached to HTML File for JS





// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
