function loadData3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUserData(data))
}

function displayUserData(data) {
    const ul = document.getElementById('ul_container');
    for (const user of data) {
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li)
    }
}