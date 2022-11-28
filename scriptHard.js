let num =  266219;
let multiplication = num.toString().split(', ').reduce((a, b) => a * b);
let numberConver = Number(multiplication);
console.log(typeof numberConver );
let res = numberConver**2;
let resStr = String(res)

console.log(resStr[0], resStr[1]);
