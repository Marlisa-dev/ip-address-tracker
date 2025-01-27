const searchInput = document.getElementById('search');
const searchValue = searchInput.value;
const searchBtn = document.getElementById('search-icon');
const iPAddress = document.getElementById('ip-address');
const location = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');
let map = document.getElementById('map');

map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let latitude;
let longitude;

function renderResults () {
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

        latitude = data.location.lat;
        longitude = data.location.lng;

        updateMap(latitude, longitude);
    })
    .catch((err) => {
        console.log(err);
    })
}

const updateMap = (latitude, longitude) => {
    map.setView([latitude, longitude], 13);
    L.marker([latitude, longitude]).addTo(map);
}

searchBtn.addEventListener('click', renderResults);