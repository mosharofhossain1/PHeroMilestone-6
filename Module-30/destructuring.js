const actor = {
    name: 'Anantar ray',
    age: 23,
    phone: '012522456',
    money: 5858989
}

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
// console.log(phone);
// console.log(name);
// console.log(age);

// Destructuring system 
// if right side is an object left side destructuring will be object as well

// use property name as a variable that contains the property value 
const { name, age: herAge, phone } = actor;
console.log(name, herAge, phone);


// array distructring 
const numbers = [45, 88];
const [first, second] = numbers;
console.log(first, second);

const [x, y] = [23, 34];
console.log(x, y);


// 
function doubleThem(a, b) {
    return [a * 2, b * 2];
}

// advance 
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);

