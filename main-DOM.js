

const pigLatin = (word) => {

    word = document.getElementById('textInput').value;
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



//from here up is the function for JS

//from here down is attached to HTML File for JS

let inputfield = pigLatin();

const textInput = document.getElementById('textInput')
const textOutput = document.getElementById('textOutput')
const button = document.getElementById('button')
const reset = document.getElementById('reset')

console.log()

//Event Listeners
// console.log(textInput)

textInput.addEventListener('click', (event)=>{
    inputfield = event.target.value;


})
// textInput.addEventListener('click', (event) => {
//   const input = event.target.value
//   console.log(input)
//   textOutput.innerText = input;
// })

button.addEventListener('click', (event) => {
    let words = inputfield.split(' ');
    word = words.map(word => pigLatin(word)).join(' ');
    textOutput.innerText = word;
})

reset.addEventListener('click', (event) => {
    textInput.value = '';
    textOutput.innerText='';
    inputfield = '';
    console.log('click')
})
