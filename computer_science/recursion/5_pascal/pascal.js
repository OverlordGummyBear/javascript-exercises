const pascal = function(n) {
    if(n === 1) 
        return [1];  
    else{
        let previousRow = pascal(n-1);

        let currentRow = [];
        for(let i = 0; i < n; i++){
            if(i - 1 < 0)
                currentRow.push(previousRow[i])
            else if(i + 1 <= previousRow.length)
                currentRow.push(previousRow[i - 1] + previousRow[i]);
            else
                currentRow.push(previousRow[i-1]);
        }

        return currentRow;
    }
};

//console.log(pascal(2));
console.log(pascal(5));
  
// Do not edit below this line
module.exports = pascal;
