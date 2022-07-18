const sumAll = function(number1, number2) {
    if (typeof number1 != typeof number2 || typeof number1 != 'number'){
        return 'ERROR'
    } 

    if (number1 < 0 || number2 <0) {
        return 'ERROR'
    } 
    return ((number1+number2)/2)*(Math.abs((number1-number2))+1)
};

// Do not edit below this line
module.exports = sumAll;
