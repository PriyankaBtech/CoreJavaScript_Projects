const typedTextSpan = document.querySelector('.typed-text'); // area where the typed text will be displayed
const cursor = document.querySelector('.cursor');
const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];
let wordIndex = 0; // track of the current word 
let charIndex = 0; //  track of the current word by index

function type() {
  const currentWord = words[wordIndex]; // Get the current word 
  typedTextSpan.textContent = currentWord.slice(0, charIndex); // show the char up to the current char index
  charIndex++;

  if (charIndex > currentWord.length) {
    wordIndex = (wordIndex + 1) % words.length;
    charIndex = 0;
  }

  setTimeout(type, charIndex === 0 ? 1000 : 200);
}

type()

// NOTE : This project creates a loop where words are typed out one character at a time, and when a word is fully typed, it moves on to the next word. 





/****************************** Another Approch ************************************/

// function type() {

//     const currentWord = words[wordIndex];
//     typedTextSpan.textContent = currentWord.slice(0, ++charIndex);
  
//     if (charIndex === currentWord.length + 1) {
//       charIndex = 0;
//       wordIndex = (wordIndex + 1) % words.length;
//     }
  
//     setTimeout(type, charIndex === 0 ? 1000 : 200);
// }
  

