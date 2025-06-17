//const tinderUser = new Object(); //singleton object 

const regularUser = {
    email : "someone@gmail.com",
    fullname:{
        username:{
            firstname: "Suditya",
            lastname: "Kulkarni"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.username.firstname) //accessing nested object properties
// console.log(regularUser.fullname.username.lastname) //accessing nested object properties


const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

//const obj3 = {obj1,obj2}    
//const obj3 = Object.assign({}, obj1, obj2) //merging two objects into one object
const obj3 = {...obj1, ...obj2} //merging two objects into one object using spread operator

// console.log(obj3) // { obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e', '6': 'f' } }
// console.log(typeof obj3[1]) //string (because the keys are strings) 



const user = [
    {
        name: "Suditya",
        age: 20,
        email: "suditya.kul@gmail.com"
    },
    {
        name: "Satwik",
        age: 20,
        email: "satkul@gmail.com"
    }
]

// console.log(user[0].name) //Suditya
// console.log(user[1].email) //satkul@gmail.com
// console.log(user)
// console.log(Object.keys(regularUser)) // [ 'email', 'fullname' ] (returns the keys of the object)
// console.log(Object.values(regularUser)) 
// console.log(Object.entries(regularUser)) // same as regularUser.items() in python (returns the key-value pairs of the object)


//object destructuring 
const course = {
    courseName: "JavaScript",
    price:999,
    courseInstructor: "Suditya",
}

const {courseName, price, courseInstructor} = course //destructuring the object
console.log(courseName,price,courseInstructor) //JavaScript 999 Suditya
//im just destructuring the object and assigning the values to the variables with the same name as the keys of the object