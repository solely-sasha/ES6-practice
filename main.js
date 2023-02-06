

// 1. Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues 
// to work (so the pet's name isn't `"John"`, but instead `"spot"` is returned). 
// You only need to delete `var` and insert `let` and `const`

// John is the pet owner, and his name should be stored differently than the other names.


let name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (var i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log(`man name: ${name}  `)
    return petObjects
}

runForLoop(["cat", "dog"])


// Arrow Function 
// Task 1: 
// Re-write this `.map()` using an arrow function:
// Be aware that if JavaScript sees a `{` directly after the `=>`
// it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }


// console.log(mapVegetables(carrots))


const mapVegetables = carrots.map(carrot => vegObj = {type: "carrot", name: carrot})

console.log(mapVegetables)

// Task 2: 
// Re-write this .filter()'s callback function using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })

// }


const filterForFriendly = people.filter(person => person.friendly)

console.log(filterForFriendly)


// Task 3:
// Re-write the following functions to be arrow funcitons: 

// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

// console.log(doMathSum(2, 3))
// console.log(produceProduct(5, 9))

const doMathSum =  (a, b) => a + b;
console.log(doMathSum(3, 7))

const produceProduct = (a, b) => a * b;
console.log(produceProduct(4, 9))


// Task 4:
function printString(firstName = "Jane", lastName = "Doe", age = 100){
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}

console.log(printString())
console.log(printString("Sasha", "Sims", 36))