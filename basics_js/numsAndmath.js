const score = 'SUDO'
//Numbers - 64 bit floating point
// const num = new Number(123.899) // creates a Number object

// console.log(score)
// console.log(num) 

// console.log(num.toString().length)
// console.log(num.toFixed(2)) 
// console.log(num.toExponential(2)) 
// console.log(num.toPrecision(2)) 



//*************Maths***************
console.log(Math)
console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045
console.log(Math.abs(-10)) // 10
console.log(Math.ceil(10.1)) // 11  
console.log(Math.floor(10.9)) // 10
console.log(Math.round(10.6)) // 11
console.log(Math.max(10, 20, 30)) // 30
console.log(Math.min(10, 20, 30)) // 10
console.log(Math.random()) // random number between 0 and 1
console.log(Math.random() * 10) // random number between 0 and 10   
console.log(Math.sqrt(16)) // 4 
console.log(Math.pow(2, 3)) // 8
console.log(Math.sin(30)) // -0.49999999999999994

const min = 10
const max = 20

const random = Math.floor(Math.random() * (max - min + 1)) + min
console.log(random) // random number between 10 and 20