const repeatString = function(phrase, numRepeat) {
    let result = "";
    if (numRepeat >= 0) {
        for (i = 0; i < numRepeat; i++) {
            result += phrase;
        }
    } else {
        return "ERROR"
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
