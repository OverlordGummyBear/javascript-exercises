const findTheOldest = function(peopleArray) {
    let arrWithTotalAge = peopleArray.map(person => 
        [('yearOfDeath' in person ? person.yearOfDeath : new Date().getFullYear())
            - person.yearOfBirth, person]);

    arrWithTotalAge.sort((a, b) => b[0] - a[0]);

    return arrWithTotalAge[0][1];
};

// Do not edit below this line
module.exports = findTheOldest;
