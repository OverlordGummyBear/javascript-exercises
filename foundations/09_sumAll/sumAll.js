const sumAll = function(startNumber, endNumber) {
    if(!Number.isInteger(startNumber) || !Number.isInteger(endNumber)) return "ERROR";
    if(startNumber < 0 || endNumber < 0) return "ERROR"

    let sum = 0;
    let lowNumber = 0;
    let highNumber = 0;

    if(startNumber < endNumber){
        lowNumber = startNumber;
        highNumber = endNumber;
    } else {
        lowNumber = endNumber;
        highNumber = startNumber;
    }

    for(let i = lowNumber; i <= highNumber; i++)
        sum += i;

    return sum;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
