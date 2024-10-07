// declear a function 

// function add(a, b) {
//     const result = a + b;
//     return result;
// }


function add(a, b) {
    return a + b;
}

// const sum = add(90, 5);

// console.log(sum);


// function expression 
const add2 = function (a, b) {
    return a + b
}


// arrow function 
const add3 = (a, b) => a + b;
const add4 = (a, b, c, d, e) => a + b + c + d + e;
const add5 = (a, b) => a * b;

const sum1 = add3(4, 3)
const sum2 = add4(2, 3, 4, 5, 6);
const sum3 = add5(5, 5)
console.log(sum1);
console.log(sum2)
console.log(sum3);

