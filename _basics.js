console.log("Hello world, I am learning javascript");
console.table({
    city: ["jaipur", "delhi"], 
    state: ["rajasthan", "delhi"] 
});

// var score = 102 // old way to store variables
let myScore = 100;
let name = "satyam gupta";
let isLoggedIn = true;
const username = "satyamgupta"; // cannot re-assign new value to this const variable

// objects: arrays & json
let teatypes = ["masala tea", "orange tea", "ginger tea"];
let userObject = {
    name: "satyam", 
    score: myScore
};

console.warn(userObject);
console.log(typeof userObject); // --> to find the data type of your variable

// primitive datatypes through classes (objects)
let newNumberClass = new Number(1000);
console.log(newNumberClass);
console.log(`Hello! My name is ${newNumberClass}`);

// understanding non-primitives
const loginSchema = {
    username: "satyamgupta@gmail.com",
    emailAddress: "satyamgupta@gmail.com"
};

loginSchema.password = "New Password";
console.table(loginSchema);
