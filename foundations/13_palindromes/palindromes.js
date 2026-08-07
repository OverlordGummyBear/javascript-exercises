const palindromes = function (str) {
    let individualWords = str.split(" ").join("");
    individualWords = individualWords.split(",").join("");
    individualWords = individualWords.split("!").join("");
    individualWords = individualWords.split(".").join("").toLowerCase();
    
    let reverseStrArray = [];
    for(let i = 0; i < individualWords.length; i++){
        reverseStrArray.unshift(individualWords.at(i));
    }

    let reverseStr = reverseStrArray.join("");

    return individualWords === reverseStr;
};

console.log(palindromes("A car, a man, a maraca."))

// Do not edit below this line
module.exports = palindromes;
