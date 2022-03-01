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
    const morePhones = phones;
    const phone20 = morePhones.slice(0, 20);
    // console.log(phone20);
    const parentElement = document.getElementById('phone-container');
    parentElement.textContent = '';
    if(phone20.length == 0){
       alert('no result found');
    }
    else{
    for(const phone of phone20){
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-5');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${phone.phone_name}</h4>
                <p class="card-text">${phone.brand}</p>
                <button onclick="details('${phone.slug}')" class="btn btn-info text-light">Show More</button>
            </div>
         </div>
    `;
    parentElement.append(div);  
    }
};
}
    

const details = (phoneId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data));
};

const displayPhoneDetail = data => {
    // console.log(data);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div>
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 "class="card-title">${data.name}</h4>
            <h4 class="card-title">Release-Date: ${data.releaseDate} </h4>
            <h6>Storage: ${data.mainFeatures.chipSet}</h6>
            <h6>Display-Size: ${data.mainFeatures.displaySize}</h6>
            <h6>Memory: ${data.mainFeatures.memory}</h6>
            <h6>Storage: ${data.mainFeatures.storage}</h6>
            <p>${data.mainFeatures.sensors}</p>
            <h6>WLAN: ${data.others.WLAN}</h6>
            <h6>Bluetooth: ${data.others.Bluetooth}</h6>
            <h6>GPS: ${data.others.GPS}</h6>
        </div>
    </div>    
     `;
    phoneDetails.appendChild(div);
};



