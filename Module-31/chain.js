// data access

const date = [
    {
        id: 1,
        name: 'abul',
        address: 'kocu kat'
    }

]

// console.log(date);
// console.log(date[0])
console.log(date[0].address)

const products = {
    count: 50990,
    data: [
        { id: 1, name: 'lenovo', price: 45000 },
        { id: 1, name: 'lenovo', price: 45000 }
    ]
}
// console.log(products.data)
// console.log(products.data[1])
console.log(products.data[1].price)

const user = {
    id: 5001,
    name: 'nayek vai',
    address: {
        street: {
            first: '54/1 uttora,dhaka',
            second: 'poribag',
            third: 'no dorai'
        },
        city: 'phulpur'
    }
}
// console.log(user.address.street.third)


// use of optional channing 
const use2 = {
    id: 5002,
    name: 'pori bibir kala',
    address: {
        city: 'chattagong',
        country: 'Bangladesh'
    }
}

console.log(user.address.street?.third);
console.log(use2.address.street?.second);