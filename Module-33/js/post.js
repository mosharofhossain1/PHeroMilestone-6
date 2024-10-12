function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(data) {
    const postContainer = document.getElementById('post_Container')
    for (const user of data) {
        // console.log(user.name)
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>User Name :- ${user.name}</h4>
            <h5>User Email :- ${user.email}</h5>
            <p>User Address :- ${user.address.city}
            <p>User Phone :- ${user.phone}</p>
            <p>Company Name :- ${user.company.name}</p>
        `
        postContainer.appendChild(div)
    }
}

loadPost()