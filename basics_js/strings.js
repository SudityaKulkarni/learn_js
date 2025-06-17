//strings and string objects along with the funtions that can be used on them

const name = "Suditya"
const surname = " Kulkarni"
const age = 20

const fullname = name + surname // concatenation of strings
console.log(fullname) // Suditya Kulkarni  

console.log(name.length) // 7 (length of string)
console.log(name.charAt(0)) // S (character at index 0)
console.log(name.charAt(1)) // u (character at index 1)

console.log(`Hello my name is ${name} and my age is ${age}`) // Hello my name is Suditya and my age is 20
console.log(`Hello my name is ${name} and my age is ${age}`.length) // 42 (length of string)

//another way of declaring strings
const str = new String("Hello World") // string object
console.log(str) // [String: 'Hello World']

//console.log(str.__proto__)   //not a best practice in modern js
console.log(Object.getPrototypeOf(str)) // better practice

console.log(Object.getOwnPropertyNames(String.prototype)) //lists all the metbods and properties of the String prototype
