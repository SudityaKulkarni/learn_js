// function addNos(a, b) {
//   console.log(a + b)
// }

// addNos(10, 20)

// //mostly everything is pretty much same as python except for the syntax and the way of defining functions

// //varargs in js

// function storeCartPrices(...nums){
//     console.log(nums) // [ 1, 2, 3, 4, 5 ] (array)
// }

// storeCartPrices(1, 2, 3, 4, 5) // [ 1, 2, 3, 4, 5 ] (array)


const user = {
    username: "Federer",
    titles: 20,
}

function printUserDetails(anyobject){
    console.log(`Name of the user is ${anyobject.username} and he has ${anyobject.titles} titles`)
}

printUserDetails(user) // Name of the user is Federer and he has 20 titles