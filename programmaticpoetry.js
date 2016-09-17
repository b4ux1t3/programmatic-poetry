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
    if (searchText[index])
}

function isAlphabetic(character){
    return str.length === character.match(/[A-Z|a-z|ü|é]/i);
}