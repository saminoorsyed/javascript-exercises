const repeatString = function(string, number) {
    let str = string;
    for (let i = 0; i< number; i++){
        str += str;
    };
    return str;
};

// Do not edit below this line
module.exports = repeatString;
