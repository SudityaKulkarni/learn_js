/*const promiseOne = new Promise(function(resolve,reject){
// do an async task 
//DB calls, cryptography, networks

    setTimeout(function(){
        console.log('Async task completed');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed')
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"wimbledon",email:"wimby@gmail.com"})
    },1000)
})

promiseTwo.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error)
            resolve({username:"sudo",passwd:"sudo123"})
        else
            reject("ERROR: Something went wrong nigga")
    },1000)
})

promiseFour.then(function(user){
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => {
    console.log("The promise is either resolved or rejected")
})*/


/*const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error)
            resolve({username:"sudo",passwd:"sudo123"})
        else
            reject("ERROR: something went wrong in JS")
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
            console.log(response)
        }  
    catch(error){
        console.log(error)
    }     
}

consumePromiseFive()*/


//using async-await with fetch instead of promises 
/*async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users') //fetch return a promise
        const data = await response.json()  //it takes time to convert the response into json hence we use await
        console.log(data)
    }
    catch(error){
        console.log("E: ",error)
    }
}

getAllUsers()*/

//directly using fetch as it returns a promise
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})