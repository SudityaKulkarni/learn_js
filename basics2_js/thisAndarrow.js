
// const user = {
//     username: "Federer",
//     titles: 20,

//     playerInfo : function(){
//         console.log(`Name of the user is ${this.username} and he has ${this.titles} titles`)
//         console.log(this) // { username: 'Federer', titles: 20, playerInfo: [Function: playerInfo] }
//     }
// }

// user.playerInfo() // Name of the user is Federer and he has 20 titles
// user.username = "Nadal"
// user.titles = 22
// user.playerInfo() // Name of the user is Nadal and he has 22 titles

// console.log(this) // {} (empty object)
//user.playerInfo() // Name of the user is Federer and he has 20 titles




//this and arrow functions
// const chai = function(){
//     username = "sudo"
//     console.log(this) // object with many properties
//     console.log(this.username) // undefined
// }

// chai()

// const chai = () => {
//     username = "sudo"
//     console.log(this) // {} (empty object)
//     console.log(this.username) // undefined
// }

// chai()

const addTwo = (num1, num2) => (num1 + num2) // arrow function
console.log(addTwo(10, 20)) // 30

//a function used with an arrow function will always return whatever is in the brackets after the arrow