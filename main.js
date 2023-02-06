

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



