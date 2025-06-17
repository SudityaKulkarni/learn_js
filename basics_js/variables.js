const accountId = 242431
let accountEmail = "suditya.kulkarni@gmail.com"
var accountPassword = "suditya123"

//accountId = 123 // This will throw an error because accountId is a constant and cannot be reassigned
accountEmail = "sudoKul@gmail.com" // This is allowed because accountEmail is declared with let and can be reassigned
accountPassword = "suditya1234" // This is allowed because accountPassword is declared with var and can be reassigned
console.log(accountId) // 242431

console.table([accountId, accountEmail, accountPassword]) // This will print the values of the variables in a table format

var a;
console.log(a)
