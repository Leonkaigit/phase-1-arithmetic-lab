let num1 = 2;
let num2 = 31;

let multiply = num1 * num2;
console.log(multiply);

function generateRandomIntegerGreaterThanZero() {
    let randomFloat = Math.random();

    let randomInteger = Math.floor(randomFloat * Number.MAX_SAFE_INTEGER);
    return randomInteger
}

let random = generateRandomIntegerGreaterThanZero();
console.log(random);

let num3 = 14;
let num4 = 10;

let mod = num3 % num4;

let numbers = [6, 12, 7, 3, 20, 11];
let max = Math.max(...numbers);
    

    
    
