const reverseString = function(phrase) {
    let temp = "";
    let pointer = "";
    pointer = phrase.length - 1;
    if (phrase.length = 0) {
        return phrase;
    } else {
        for (let i = pointer; i >= 0; i--) {
            temp += phrase[i];
        }
    }
    return temp;
};

// Do not edit below this line
module.exports = reverseString;