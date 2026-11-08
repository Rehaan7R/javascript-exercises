const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        let oldestDeathYear = oldest.yearOfDeath === undefined ? new Date().getFullYear() : oldest.yearOfDeath;
        let currentDeathYear = current.yearOfDeath === undefined ? new Date().getFullYear() : current.yearOfDeath;

        let oldestAge = oldestDeathYear - oldest.yearOfBirth;
        let currentAge = currentDeathYear - current.yearOfBirth;

        return currentAge > oldestAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
