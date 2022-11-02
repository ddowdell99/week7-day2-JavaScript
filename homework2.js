//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let favoriteFood = (dict) => {
    for (let [type,food] of Object.entries(dict)){
        if (type === 'shakes'){
            for ([place] of Object.entries(dict[type])){
                for ([place2,shake] of Object.entries(dict[type][place]))
                console.log(`Favorite ${type} from ${place2}: ${shake}`)
            }
        } else {
            console.log(`Favorite ${type}: ${food}`)
        }
    }
    
}

favoriteFood(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };


// Use an arrow to create the printInfo method


    printInfo = () => {
        console.log(`Hello ${this.name}! You are ${this.age} years old!`);
    };

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

    addAge = () => {
        this.age += 1;
        console.log(`${this.name} is now ${this.age} years old!`);
    };

};

let newPer1 = new Person('Diante', 23)
let newPer2 = new Person('Shayla', 24)
newPer1.printInfo()
newPer2.printInfo()
newPer1.addAge()
newPer1.addAge()
newPer1.addAge()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let bigWord = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve(str);
        } else {
            reject(str);
        }
    })
};

bigWord('superduperdude')
.then( (result) => {
    console.log('Big Word');
}).catch( (result) => {
    console.log('Small Word')
})

/*
Square Every Digit Problem (NOT DONE PREVIOUSLY)

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num){
    let num_string = num.toString().split("");
    for (let i = 0; i < num_string.length; i++){
        num_string[i] = parseInt(num_string[i])**2
    } return (parseInt(num_string.join("")))
}

console.log(squareDigits(555))

/*
Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    let count = 0;
    let vowels = ['a','e','i','o','u'];
    for (let i = 0; i < str.length; i++){
      if (vowels.includes(str[i])){
        count += 1
      }
    }return count
  }

console.log(getCount('Diante'))