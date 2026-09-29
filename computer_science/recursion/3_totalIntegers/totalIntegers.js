const totalIntegers = function(input, total = 0) {
    if(Number.isInteger(input)) 
        return 1;
    else if(!Array.isArray(input) || !typeof input === "object")
        return 0; 
    
    let res = 0;
    for(var item in input){
        res += totalIntegers(item);
    }

    return res;
};

console.log(totalIntegers([1]));
console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));

// Do not edit below this line
module.exports = totalIntegers;
