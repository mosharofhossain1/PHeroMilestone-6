// map :-> loop through each element of the array and do the operation that you passed in the callback function and hold the result from each operation in an array and finally returans ypu the array


const numbers = [4, 5, 2, 6, 10];
/* const duobled = [];
for (const num of numbers) {
    const double = num * 2;
    duobled.push(double)
}
console.log(duobled); */


// create a callback function 
function doubleIt(num) {
    // console.log('num of ', num)
    return num * 2
}
const result = numbers.map(doubleIt);
// console.log(result);

const duobled2 = n => n * 2;
const result2 = numbers.map(duobled2);

// map with callback function 
const outPutWithMap = numbers.map(n => n * 2);
console.log(outPutWithMap);


