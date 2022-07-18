const fibonacci = function(num) {
    let nums = parseInt(num)
    if (nums === NaN || nums < 0){
        return "OOPS"
    }else if (nums == 1){
        return 1
    }else if (nums == 2){
        return 1
    }else {
        return fibonacci(nums-1)+fibonacci(nums-2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
