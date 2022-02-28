const allPhones = () => {
    const searchValue = document.getElementById('inputField').value;
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDisplay(data.data));
};

const showDisplay = (phones) => {
    // console.log(phones);
    for(const phone of phones){
        // console.log(phone);
        const parentElement = document.getElementById('phone-container');
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-5');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
                <button class="btn btn-info text-light">Show More</button>
            </div>
         </div>
    `;
    parentElement.append(div);  
    }
}

