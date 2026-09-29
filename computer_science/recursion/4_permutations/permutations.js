const permutations = function(arr) {
    if(arr.length === 0 || arr.length === 1) return [arr];

    let resArr = []

    for(let i = 0; i <= arr.length - 1; i++){
        let perms = permutations(arr.toSpliced(i, 1));
        
        perms.forEach(per => {
            resArr.push([arr[i], ...per])
        });
    }

    return resArr;
};

// Do not edit below this line
module.exports = permutations;
