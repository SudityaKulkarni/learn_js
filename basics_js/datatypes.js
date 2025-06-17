"use strict"; //treats all JS code as newer version
// This file contains the data types used in the application

//alert("Hello World") // This will show an alert box with the message "Hello World"


//datatypes
// 1. String
// 2. Number => 2^53 - 1 (max value) and -2^53 + 1 (min value)
// 3. Boolean
// 4. Undefined
// 5. Null => standalone value that represents no value or object
// 6. Symbol (ES6) => used to create unique identifiers for objects
// 7. BigInt (ES11)
// 8. Object

console.log(typeof "Hello World") // string
console.log(typeof 123) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined  
console.log(typeof null) // object (this is a bug in JS)


//primitive datatypes
// 7 types : string, number, boolean, undefined, null, symbol, bigint

// reference datatypes (non primitive datatypes)
// 1. Object
// 2. Array => array is a special type of object
// 3. Function => function is a special type of object  

const num  = 12325346546435346n // BigInt represents large integers with n suffix
console.log(num) 


//arrrays
const heroes = ["spiderman", "batman", "superman"] // array is a special type of object
console.log(heroes) // ["spiderman", "batman", "superman


//objects
let my_obj = {
    name: "Suditya",
    age: 20,
    isStudent: true,
}

console.log(my_obj) // { name: "Suditya", age: 20, isStudent: true }
console.log(my_obj.name) // Suditya
console.log(my_obj["name"]) // Suditya
console.log(my_obj.age) // 20
console.log(my_obj["age"]) // 20
console.log(my_obj.isStudent) // true
console.log(my_obj["isStudent"]) // true



//funtions
const myfunction = function()
{
    console.log("Hello World")
}

console.log(myfunction) // [Function: myfunction]
console.log(myfunction()) // Hello World
