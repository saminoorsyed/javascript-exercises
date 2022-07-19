const caesar = function(readable,cipher) {
    const confidential = readable.split("");
    
    for (let i = 0; i< confidential.length; i++) {
        if ((/[a-zA-Z]/).test(confidential[i])){
            const start = confidential[i] === confidential[i].toLowerCase() ? "a".charCodeAt(0) : "A".charCodeAt(0);
            const diff = confidential[i].charCodeAt(0) - start;
            const shift = cipher >=0 ? diff + cipher : diff + Math.abs(26 - Math.abs(cipher%26));
            confidential[i] = String.fromCharCode(shift % 26 + start);
        }
    }
    return confidential.join("")
};

// Do not edit below this line
module.exports = caesar;
