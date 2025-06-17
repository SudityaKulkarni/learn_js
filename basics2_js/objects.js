//singleton - a class with only one instance

//objects and object literals


const mySym = Symbol("mykey1") //symbol is a primitive data type in js

const user = {
    name: "Suditya",
    age: 20,
    [mySym]: "mykey1", //computed property name
    "email": "suditya.kulkari@gmail.com",
    isStudent: true,
    hobbies: ["cricket", "tennis", "football"],
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    },
}

// console.log(user.name) //accessing object properties using dot notation
// console.log(user["name"]) //accessing object properties using bracket notation
// console.log(user["email"])
// //console.log(user."email") //this will throw an error because of the dot notation

// console.log(typeof user["hobbies"])
// console.log(user["hobbies"][0]) //accessing array inside an object
// console.log(user["address"]["city"]) //accessing nested object properties   

// console.log(typeof user["address"]) //object

// console.log(user[mySym]) //accessing symbol property
// console.log(user[Symbol("mykey1")]) //undefined because the symbol is not the same as the one defined above

// user["email"] = "sudokul@gmail.com"
// //Object.freeze(user) //freezes the object and makes it immutable
// user["email"] = "satwikul@gmail.com" //this will not change the email property because the object is frozen

//basically freezing an object makes it immutable and you cannot add, delete or change any properties of the object
//console.log(user["email"]) //this will still print the old email property because the object is frozen

user.greeting = function () {
    console.log("Hello " + this.name) //this refers to the object that calls the function
}

console.log(user.greeting()) //Hello Suditya
console.log(user.greeting) // [Function: greeting]