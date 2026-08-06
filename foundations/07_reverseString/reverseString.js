const reverseString = function(word) {
    let charArray = [];
    
    for(let i = 0; i < word.length; i++){
        charArray.unshift(word.at(i));
    }

    return charArray.join("");
};

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
