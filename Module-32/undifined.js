/* **
    * 8 wayse to get undifined 
    * 1- variable that is not initialized will give ubdifined 
    * 2- fucntion with no return 
    * 3- parameter that is not passed will be unde
    * 4- if return has nothing on the right side will return undifined 
    * 5- property that doesent on an object will give you undifined 
    * 6- accessing array elements outside of the index range 
    * 7- deleting an elements inside an array
    * 8- set a value directly to undifined
* */

let first;
console.log(first);

function second(a, b) {
    const total = a + b;
}

const result = second();

function third(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(total);
}
const result1 = third(2, 4);

function noNegetive(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b
}
const result2 = noNegetive(2, -4);

const fifth = { id: 2, name: 'ponchom', age: 34 }
console.log(fifth.age, fifth.salary)

const sixth = [23, 45, 37, 47, 78];
console.log(sixth[1], sixth[5], sixth[9]);

const seventh = undefined;

const eight = null;

const data = { result: [], update: null };
console.log(typeof null);
