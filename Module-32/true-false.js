/* ***
    ** Truthy values 
        1-true
        2- any number (+ve, -ve) will be truthy other than 0
        3- any string truthy than empthy string 
        4- '0', 'false', 'something'  string is truthy
        5- empthy object truthy 
        6- empthy array truthy 

    ** False Values
        1- false 
        2- 0 
        3- empty('') string
        4- undifined 
        5- null

*/

const x = 0;
if (x) {
    console.log('Value of x is Truthy')
}
else {
    console.log('Value of falsey')
}


// optional 
const y = null;
if (!y) {
    console.log('false value')
}
else {
    console.log('truthy value')
}

const z = 50;
if (!!z) {
    console.log('value truthy')
}
else {
    console.log('value is falsy')
}

