const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data
    displayPhones(phones);
}

const displayPhones = phones => {
    // Step-1 : getid 
    const phoneContainer = document.getElementById('phone_container');
    phones.forEach(phone => {
        console.log(phone)

        // step-2: Create a div 
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 p-2 shadow-xl`
        // step-3 : set inner Html 
        phoneCard.innerHTML = `
            <figure>
                        <img src=${phone.image}>
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title"> Name :- ${phone.phone_name}</h2>
                        <h5>Brand :- ${phone.brand}</h5>
                        <p>Info :- ${phone.slug}?</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary ">Buy Now</button>
                        </div>
                    </div>
        `
        // step -4 : appendChild ( )
        phoneContainer.appendChild(phoneCard)
    });
}


loadPhone()