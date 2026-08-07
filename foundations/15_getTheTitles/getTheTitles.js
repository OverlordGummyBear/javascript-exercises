const getTheTitles = function(objectArray) {
    return objectArray.reduce((accumulatedTitles, currentBook) => {
        accumulatedTitles.push(currentBook.title);

        return accumulatedTitles;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
