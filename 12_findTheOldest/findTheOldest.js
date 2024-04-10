const findTheOldest = function(peoples) {
    let oldest = peoples.sort(function(a, b) {
        let lastPerson;
        let nextPerson;
        if (typeof a.yearOfDeath === "undefined") {
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            lastPerson = currentYear - a.yearOfBirth;
        } else {
            lastPerson = a.yearOfDeath - a.yearOfBirth;
        }
        if (typeof b.yearOfDeath === "undefined") {
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            nextPerson = currentYear - b.yearOfBirth;
        } else {
            nextPerson = b.yearOfDeath - b.yearOfBirth;
        }
        return lastPerson > nextPerson ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
