// inputString is the substring you would like to search for, searchString 
// is the string you would like to search through
function getSubstrings(inputString, searchString, start = 0, end = searchString.length){
    var index = start;
    var temp = index;
    var substringLocations = [];

    while(index !== -1 && index < end){

        temp = searchString.indexOf(inputString, index);
        
        if (temp !== -1){
            substringLocations.push(temp);
            index = temp + inputString.length;         
        } else {
            index = temp;
        }
    }

    return substringLocations;
}

function testGetSubstrings(){
    var x = "rainbows rainbows boy do I love rainbows";
    var y = "rainbows";
    var test = getSubstrings(y, x);
    console.log(test);
    console.log("Should contain 0, 9, 32");

    test = getSubstrings(y, x, 1); 
    console.log(test);
    console.log("Should contain 9, 32");

    test = getSubstrings(y, x, 0, 10); 
    console.log(test);
    console.log("Should contain 0, 9");
}