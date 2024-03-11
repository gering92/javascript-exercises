const sumAll = function(numStart, numEnd) {
    let sum = 0;
    if (numStart < 0 || numEnd < 0) {
        return "ERROR";
    } else if (typeof numStart !== "number" || typeof numEnd !== "number") {
        return "ERROR"
    } else {
        let smallerNumber = numStart;
        let largerNumber = numEnd
        if (numEnd < numStart) {
            smallerNumber = numEnd;
            largerNumber = numStart;
        }
        for (let i = smallerNumber; i <= largerNumber; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
