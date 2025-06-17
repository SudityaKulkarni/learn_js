const coding = ["js", "python", "java", "c++", "ruby"]

//for each loop
// coding.forEach(function (val){
//     console.log(val)
// })

// //another way to write for each loop
// coding.forEach( (val) => {
//     console.log(val)
// })

//another way
// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)


//how do we know what parameter is being passed to the function?
//there is a fixed order set for the parameters in the forEach function i.e the first parameter is always the array element, the second parameter is always the index and the third parameter is always the array itself
// maximum only 3 parameters can be passed to the forEach function
// coding.forEach((val, index ,arr) => {
//     console.log(val, index, arr)
// })

// const mycode = [
//     {
//         mylang : "js",
//         filetype: "js",
//     },
//     {
//         mylang : "python",
//         filetype: "py",
//     },
//     {
//         mylang : "java",
//         filetype: "java",
//     },
//     {
//         mylang : "c++",
//         filetype: "cpp",
//     },
//     {
//         mylang : "ruby",
//         filetype: "rb",
//     }
// ]

// //applying forEach loop to an array of objects which is a common use case in frontend development

// mycode.forEach((item) => {
//     console.log(item.mylang, item.filetype)
// })

// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = mynums.filter((num) => num>4)
// //another wayy of writing the filter function
// const dupnums = mynums.filter((num) => {
//     return num > 4
// }) //when we use curly braces, we need to use return statement
// console.log(dupnums)
// console.log(newnums)

const mynums = [1,2,3]
const myTotal = mynums.reduce((acc,curval) => {
    console.log(acc, curval)
    return acc + curval
}, 0) //0 is the initial value of the accumulator
console.log(myTotal)