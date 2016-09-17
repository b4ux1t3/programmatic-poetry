/*
The point of this program is to take the substring locations for words 
inside an input text file using substringcounter.js, and then create an
new text file that takes the words in those locations from another 
existing text file.

For instance, you would get all of the indices of the occurrences of the 
word "girl" from a Harry Potter novel, and then use those locations to 
get the words at the same indices in the Christian Bible. The result 
would be a rather long, nonsensical poem.

Maybe you want to make wild conspiracy theories about how those words
match up. Maybe you just want to automate a Twitter bot. Either way,
should be fun.

This is mostly an exercise in using p5js. Maybe I'll add some graphical 
elements
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
// a time until itfinds an alphabetic character.
// If the beginning index is an alphabetic character, it will move the 
// index back until it finds a white space, and then select up through
// the next whitespace or non-alphabetic character.
function findWordAtIndex(searchText, index){
    if (searchText[index])
}

