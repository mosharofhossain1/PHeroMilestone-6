const glass = { name: 'glass', color: 'golden', price: 12, isCleand: true };
console.log(glass);

// object keys 
const keys = Object.keys(glass);
console.log(keys);

// Object Valuse 
const values = Object.values(glass);
console.log(values);


// entries 
// array of array , two dimensation array 
const entries = Object.entries(glass);
console.log(entries);

// delete operation 

// delete glass.isCleand;
// console.log(glass);

const { isCleand, ...shortGlass } = glass;
console.log(shortGlass);

// freeze and seal
// Object.seal()
Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 343434;
console.log(glass);
delete glass.name;


