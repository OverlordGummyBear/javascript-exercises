const totalIntegers = function(input, isFirstCall = true) {
    if(isFirstCall && Number.isInteger(input)) return undefined;
    
    if(Number.isInteger(input)) 
        return 1;
    else if(!Array.isArray(input) && typeof input !== "object")
        return undefined; 
    else{
        let res = 0;

        for(var item in input){
            let itemValue = totalIntegers(input[item], false);
            if(itemValue !== undefined) res += itemValue;
        }
        
        return res;
    }
};

// Do not edit below this line
module.exports = totalIntegers;
