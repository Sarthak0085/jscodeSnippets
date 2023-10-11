const isDivisibleByNumber = (dividend, divisor) => {
    console.log(dividend % divisor === 0);
}

isDivisibleByNumber(6, 3); //true
isDivisibleByNumber(56, 9); //false
isDivisibleByNumber(363771, 9); //true


const os = require('os');
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)