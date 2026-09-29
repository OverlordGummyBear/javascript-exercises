const contains = function(obj, searchValue) {
    if(obj === searchValue) 
        return true;
    else if(Number.isNaN(searchValue))
        return true;
    else if(typeof obj !== "object")
        return; 
    else{
        for(var key in obj){
            let isObject = contains(obj[key], searchValue);
            
            if(isObject) return true;
        }
    }

    return false;
};

const meaningOfLifeArray = [42];
const object = {
    data: {
      duplicate: "e",
      stuff: {
        thing: {
          banana: NaN,
          moreStuff: {
            something: "foo",
            answer: meaningOfLifeArray,
          },
        },
      },
      info: {
        duplicate: "e",
        magicNumber: 44,
        empty: null,
      },
    },
  };

console.log(contains(object, NaN))

// Do not edit below this line
module.exports = contains;
