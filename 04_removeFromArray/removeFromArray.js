const removeFromArray = function(array, ...moreNums) {
    let newArray;
    if (moreNums.length > 0) {
        newArray = array.filter(item => !moreNums.includes(item))
        return newArray;
    } else {
        return newArray;
    }
    
};

// Do not edit below this line
module.exports = removeFromArray;
