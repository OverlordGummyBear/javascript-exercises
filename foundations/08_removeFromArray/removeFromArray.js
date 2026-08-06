const removeFromArray = function(array, ...item) {
    for(let i = 1; i < arguments.length; i++){        
        array = array.filter(item => item !== arguments[i]);
    }

    return array;
};

console.log(removeFromArray([1,2,2,3,4], 2, 4, 3));

// Do not edit below this line
module.exports = removeFromArray;
