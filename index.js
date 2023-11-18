
let word1 = "enthusiastic";
let word2 = "reflect";
let word3 = "neutral";
let word4 = "stream";
let word5 = "transform";
//characters automatically populated(r/n/s/t/l/e)
function randomWords() {
  //used to create random numbers 1-5 since we have 5 words
  let randomNumb = Math.ceil(Math.random() * 5);
  //when random numb=1,display line word1
  //we use else if so that we dont overload the machine to load all instructions at ounce.
  if (randomNumb === 1) {
    return word1;
  } else if (randomNumb === 2) {
    return word2;
  } else if (randomNumb === 3) {
    return word3;
  } else if (randomNumb === 4) {
    return word4;
  } else if (randomNumb === 5) {
    return word5;
  }
  //return randomNumb();
}
console.log(randomWords());

/* A word is chosen at random from a pool of, at minimum, five words.
The following characters are automatically populated in the chosen random word: 'r', 's', 't', 'l', 'n', 'e'.
A player types in a letter as a guess, if they are correct the letter is filled in and if they are incorrect one rope emoji appears in the prompt.
If the user guesses all the correct letters, they win.
If the user gets three incorrect guesses, they lose
 */
function freeLetters(str) {
  let freeLetters = "rstlne";
  let output = "";
  /* let showLetters="r"||"s"||"t"||"l"||"n"||"e"||;
need for loop for iterate thru letters
connect the output to display free letters and stars */
  for (let i = 0; i < str.length; i++) {
    if (freeLetters.includes(str[i])) 
    {
      output += str[i];
    } 
    else 
    {
      output += "☆";
    }
  }
  return output;
}
function updatedDisplayedWord(displayedWord,letterGuessed,word){
  let updatedDisplayedWord="";
for(let i=0;i<word.length;i++)
{
  if (letterGuessed===word[i]) 
  {
    updatedDisplayedWord+=word[i];
  }else
    {
      updatedDisplayedWord += displayedWord[i];
    } 
    }
    return updatedDisplayedWord;

  }
  


// console.log(freeLetters(word5));

function letterGuessed() {
  let word = randomWords();
  //let displayedWord = (freeLetters += "☆");
  let displayedWord=freeLetters(word);
  let rope = "";
  //let guessWord = "";
  let chances = 0;

  while (chances < 3) {
    let letterGuessed = prompt(
      `I'm thinking of a word. would you like to guess the letter?\n ${displayedWord} \n ${rope}`
    );
    if (word.includes(letterGuessed)) {
      displayedWord = updatedDisplayedWord(displayedWord,letterGuessed,word);
      if (!displayedWord.includes ("☆")){
        alert("you won");
        return;
      }
    } 
    else 
    {
      chances += 1;
      rope += "🪢";
      if ( chances===3){
        alert("you lose")
        break;
      }
        
   
    }
  }
   }
  letterGuessed();

       