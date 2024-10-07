const difference = (a, b) => a - b;
const multiply = (a, b, c) => a * b * c;

// single perameter 
const getAge = (person) => person.age;
const student = { name: 'ananta', age: 23 };
const age = getAge(student);
console.log(age);


const getThird = numbers => numbers[2];
const third = getThird([23, 45, 67, 8]);
console.log(third);

const doubleIt = num => num * 2;

// no perameter 

const getPi = () => Math.PI;
const piValue = getPi();
console.log(piValue);


// large arrow 
const doMath = (a, b, c) => {
    const sum = a + b + c;
    const multiply = a * b * c;
    const result = sum + multiply;;
    return result;
}