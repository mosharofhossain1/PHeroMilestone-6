const user = { id: 1, name: 'gorib', job: 'actor' };
console.log(user);
// JavaScript Object Notaion (JSON)

const userStringify = JSON.stringify(user);
console.log(userStringify);


const shop = {
    owner: 'Alia',
    address: {
        street: 'Kocukat voter goili',
        city: 'sicago'
    },
    products: ['latop', 'monitor', 'mic', 'keyboard'],
    isOpen: true,
    isOld: false
}

console.log(shop);
const shopStringify = JSON.stringify(shop);
console.log(shopStringify);

const shopObj = JSON.parse(shopStringify);
console.log(shopObj);
