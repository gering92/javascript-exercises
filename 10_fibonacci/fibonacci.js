const fibonacci = function(number) {
    if (typeof number !== "number") {
        number = parseInt(number);
    }
    
    if (number < 0) {
        return "OOPS";
    } else {
        phi = (1 + Math.sqrt(5)) / 2;
        let result = Math.round((phi ** number) / Math.sqrt(5));
        return result;
    }
};

// Do not edit below this line
module.exports = fibonacci;
