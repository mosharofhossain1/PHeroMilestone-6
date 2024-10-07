// for of use on array 
// for in use on Object 
const numbers = [3, 4, 6, 7, 8];
// for(let i = 0; i < numbers.length; i++){}
// while

for (const num of numbers) {
    // console.log(num);
}

const nobab = 'Siraj Ud Doulla';
for (const char of nobab) {
    // console.log(char);
}

const glass = { name: 'glass', color: 'golden', price: 12, isCleand: true };
/* for(const key of glass){
    // console.log(key) Not working 
}
 */

for (const key in glass) {
    const value = glass[key]
    // console.log(key, value)
}

const keys = Object.keys(glass);
for (const key of keys) {
    const value = glass[key]
    console.log(key, value)
}