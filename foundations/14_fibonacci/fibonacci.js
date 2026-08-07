const fibonacci = function(number) {
    if(number < 0) return "OOPS";

    if(number == 0) return 0;
    if(number == 1 || number == 2) return 1;
    
    let f2 = 1;
    let f1 = 1;
    let f = f2 + f1;

    for(let i = 4; i <= number; i++){
        f2 = f1;
        f1 = f;
        f = f2 + f1;
    }

    return f;
};

console.log(fibonacci(4));
console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
