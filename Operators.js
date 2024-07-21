
//Optional chaining (?.)
//The optional chaining (?.) operator accesses an object's property or calls a function. 
//If the object accessed or function called using this operator is undefined or null, 
//the expression short circuits and evaluates to undefined instead of throwing an error.

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

//Nullish coalescing operator (??)
//The nullish coalescing (??) operator is a logical operator 
//that returns its right-hand side operand when its left-hand side operand 
//is null or undefined, and otherwise returns its left-hand side operand.
console.log(false ?? 'hellooo') //false
console.log(null ?? 'hellooo') //'hellooo'
console.log(null || 'hellooo') //'hellooo'
console.log((false || null) ?? 'hellooo') // 'hellooo'
console.log(null ?? (false || 'hellooo')) // 'hellooo'