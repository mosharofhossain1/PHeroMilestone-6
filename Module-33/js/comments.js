// Normal function use data fatch()
function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('erroe happend', error))
}


// arrow function use data fatch()

const arrowFatch = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('error data happed', error))
}

// async await system 

const asyncAwait = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json();
        console.log(data)
    }
    catch (erroe) {
        console.error('Data load error')
    }
}