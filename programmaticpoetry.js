/*
Main Program
*/

/* 
todo:
Figure out how to select a WORD at a certain index.
Preload two files and give their output.
*/
var textToBeIndexed;  // The Harry Potter book from the example
var textToBeSearched; // The Bible from the example
var inputWord;        // The word "girl" from the example

// This function will check if the character at the beginning index is 
// alphabetic. If it is white space, it will move forward one index at 
// a time until it finds an alphabetic character.
// If the beginning index is an alphabetic character, it will move the 
// index back until it finds a white space, and then select up through
// the next whitespace or non-alphabetic character.
function findWordAtIndex(searchText, index){
    // First check if something isAlphabetic. If it is, move backwards 
    // through the string until you find a non-alphabetic character. 
    // Then save the index after that as the beginning of the word. 
    while (isAlphabetic(searchText.charAt(index))){
        index--;
    }
    // Index should now be at the beginning of the word.
    ++index;  
    // If it isn't (as in, if the first while statement was false),
    // move forward until you find an alphabetic character, then
    // set startIndex to index.
    while (!isAlphabetic(searchText.charAt(index))){
        index++;
    }                          
    var startIndex = index;

    // Then, move forward through the string until you find a
    // non-alphabetic character, and return the substring 
    // starting at startIndex, and ending at the current index.
    // This means we select everything up to but not including
    // the current index, and we shouldhave our word!
    while (isAlphabetic(searchText.charAt(index))){
        index++;
    }
    return searchText.subString(startIndex, index);
}

function isAlphabetic(character){
    // Use regex sorcery from https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
    return str.length === character.match(/[A-Z|a-z|ü|é]/i);
}