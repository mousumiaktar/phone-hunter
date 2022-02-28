const allPhones = () => {
    const searchValue = document.getElementById('inputField').value;
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
};


