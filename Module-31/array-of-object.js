const products = [
    { id: 1, name: 'Lenevo', price: 65000 },
    { id: 2, name: 'hp', price: 45000 },
    { id: 3, name: 'dell', price: 55000 },
    { id: 4, name: 'mac', price: 165000 }
]

// map use
const mapProduct = products.map(p => p.id);
const names = products.map(p => p.name);
// console.log(names)
// console.log(mapProduct);

// forEach 
products.forEach(p => console.log(p.id))

// filter 
const expensive = products.filter(p => p.price > 60000);
console.log(expensive);


// find 
const affordable = products.find(p => p.price > 60000);
console.log(affordable);


// reduce 

const reduceAmount = products.reduce((pre, curr) => pre + curr.price, 0);
console.log(reduceAmount);

