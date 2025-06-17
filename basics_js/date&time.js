
let myDate = new Date();
// console.log(myDate.toString()); // Current date and time in string format
// console.log(myDate.toDateString()); // Current date in string format
// console.log(myDate.toTimeString()); // Current time in string format
// console.log(myDate.toLocaleString()); // Current date and time in local format
// console.log(typeof myDate); // Object

let newDate = new Date("2005-09-07");
let anotherDate = new Date(2023, 9, 7); // year, month (0-11), day
console.log(newDate.toDateString()); 
console.log(anotherDate.toDateString()); 


let myTimeStamp = Date.now();
console.log(myTimeStamp); // Current timestamp in milliseconds
console.log(myDate.getTime())
console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds