const fibonacci = function(num) {
    let nums = parseInt(num);
    if (nums === NaN || nums < 0){
        return "OOPS";
    };
    let cache = Array(nums+2);
    cache[0] = 0;
    cache[1] = 1;
    for (let i = 2; i <= nums; i++){
        cache[i] = cache[i-1]+cache[i-2];
    }
    return cache[nums]
};

// Do not edit below this line
module.exports = fibonacci;
