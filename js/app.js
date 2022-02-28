const allPhones = () => {
    const inputField = document.getElementById('inputField');
    const searchValue = inputField.value;
    inputField.value = '';
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
                <button onclick="details('${phone.slug}')" class="btn btn-info text-light">Show More</button>
            </div>
         </div>
    `;
    parentElement.append(div);  
    }
};

const details = (phoneId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = data => {
    console.log(data);
    const phoneDetails = document.getElementById('phone-details');
    
    const div = document.createElement('div');
    div.innerHTML = `
    <div>
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
        </div>
    </div>    
     `;
    phoneDetails.appendChild(div);
}

