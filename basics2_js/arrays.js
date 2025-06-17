// const myArray = [1, 2, 3, 4, 5];
// const myArray2 = new Array(1, 2, 3, 4, 5); // another way of declaring arrays

// myArray.push(6)
// myArray.pop() // removes the last element of the array
// myArray.shift() // removes the first element of the array
// myArray.unshift(0) // adds an element at the beginning of the array

// console.log(myArray) // [0, 1, 2, 3, 4, 5]

// console.log(myArray.includes(9)) // false (checks if the array includes the element)
// console.log(myArray.indexOf(3)) // 3 (returns the index of the element)
// console.log(myArray.lastIndexOf(3)) // 3 (returns the last index of the element)

// console.log(myArray.slice(1, 3)) // [1, 2] (returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included))

// const newstr = myArray.join("") // joins the elements of the array into a string
// console.log(newstr) // 012345 (string)

// console.log(myArray.splice(1, 2)) // [1, 2] (removes the elements from the array and returns them)
// console.log(myArray) // [0, 3, 4, 5] (array)
// console.log(myArray.reverse()) // [5, 4, 3, 0] (reverses the array)

// const cricket = ["Sachin", "Dravid", "Kohli", "Dhoni", "Rohit"] 
// const tennis = ["Federer", "Nadal", "Djokovic", "Murray", "Sampras"]

// const cricTennis = cricket.concat(tennis) // concatenates the two arrays
// console.log(cricTennis) // [ 'Sachin', 'Dravid', 'Kohli', 'Dhoni', 'Rohit', 'Federer', 'Nadal', 'Djokovic', 'Murray', 'Sampras' ] (array)

// // a better way to do it is using the spread operator:
// const cricTennis2 = [...cricket, ...tennis] // spread operator
// console.log(cricTennis2) // [ 'Sachin', 'Dravid', 'Kohli', 'Dhoni', 'Rohit', 'Federer', 'Nadal', 'Djokovic', 'Murray', 'Sampras' ] (array)

// const anotherArray = [1, 2, [3,4,5],6,7,8,[9,[10,11,12],13],14,15,16]   
// const flattenedArray = anotherArray.flat(Infinity)

// console.log(flattenedArray) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

console.log(Array.isArray("Suditya")) // false (checks if the variable is an array)
// console.log(Array.isArray([1, 2, 3])) // true (checks if the variable is an array)
console.log(Array.from("Suditya")) // [ 'S', 'u', 'd', 'i', 't', 'y', 'a' ] (converts the string to an array)
console.log(Array.from({name:"Suditya"})) //creates an empty array as we cannot convert an object to an array

let score1 = 100
let score2 = 200   
let score3 = 300