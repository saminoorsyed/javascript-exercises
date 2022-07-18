const palindromes = function (input) {
    let first = input.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let second = first.split('').reverse().join('');
    return (first === second)
};

// Do not edit below this line
module.exports = palindromes;
