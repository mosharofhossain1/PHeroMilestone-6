// spread operator use only array and object 

const max = Math.max(3, 4, 6, 7, 9, 354, 977);
console.log(max)

const numbers = [3, 6, 7, 8, 9, 5765];
const arrayMaths = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMaths);

// use spread operator to copy 
const num1 = [3, 5, 6, 7, 8, 9];
const num2 = num1; //  referance carey num1 
const num3 = [...num1] //copy kore pele direct 
num2.push(10);
console.log(num1);
console.log(num2);
console.log(num3)
