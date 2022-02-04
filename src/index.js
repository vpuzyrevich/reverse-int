module.exports = function reverse (n) {
    const num = String(Math.abs(n));
    let result = '';
    for(let i = 0; i < num.length; i++) {
       result = `${num[i]}${result}`;
    }
    return +result;
};
