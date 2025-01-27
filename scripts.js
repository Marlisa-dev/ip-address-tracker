const searchInput = document.getElementById('search');
const searchValue = searchInput.value;
const searchBtn = document.getElementById('search-icon');
const iPAddress = document.getElementById('ip-address');
const location = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');

let latitude;
let longitude;


searchBtn.addEventListener('click', () => {
    const API_KEY="at_JzzyA6OORXKXkjSIvf0BAKq0qI5EG";
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${searchInput.value}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        iPAddress.textContent = data.ip;
        location.textContent = `${data.location.city}, ${data.location.region}`;
        timezone.textContent = `UTC ${data.location.timezone}`;
        isp.textContent = data.isp;

    })
    .catch((err) => {
        console.log(err);
    })


})
