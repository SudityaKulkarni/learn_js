//IIFE - Immediately Invoked Function Expression


(function chai(){
    console.log("DB Connectd")
})(); //semicolon is imp cause it ends the function here and lets the further execution.


//another way to write IIFE
((name) =>{
    console.log(`DB2 Connected name is: ${name}`)
})("sudo") //passing the name as an argument to the function


// IIFE is used to avoid global scope pollution
//global scope pollution is when you create a variable in the global scope and it can be accessed from anywhere in the code
//IIFE is used to create a new scope and avoid global scope pollution

