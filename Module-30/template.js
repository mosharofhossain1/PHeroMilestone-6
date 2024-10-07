const first = 'Mosharof';
const last = 'Hossain';

const name = first + last;
console.log(name);

const message = 'Jon' + ' ' + 'kaka';
console.log(message);


const a = 20;
const b = 5;
const sum = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(sum)

// use template :-> 
const total = `The Sum of ${a} and ${b} is ${a + b}`;
console.log(total);

const messageTem = `Joun meya 
                ki kobor apner 
                Kela ki hobe naki
                `
console.log(messageTem);

const numbers = [23, 45, 56, 88, 90];
const student = { name: 'Karim babu', age: 22 };

const dynamicTem = `The Sum of ${numbers[1]} and ${student.age} is ${numbers[1] + student.age}`;

console.log(dynamicTem);



