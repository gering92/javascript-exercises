const palindromes = function (string) {
    // Gets rid of punctuation in the string
    string = string.replace(/[^\w\s]|_/g, "");
    // Considers the string as just lowercase letters
    string = string.toLowerCase();
    // Gets rid of spaces
    string = string.split(" ").join("");
    let j = string.length - 1;
    for(let i = 0; i <= string.length / 2; i++) {
        if(string[i] === string[j]) {
            j--;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
