
// script.js
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.8566, lon: 2.3522 }, // Coordinates of Paris
        zoom: 12
    });
}

function calculateRoute() {
    document.getElementById('distance').textContent = '5 km';
    document.getElementById('duration').textContent = '15 min';
}

function enableDarkMode() {
    document.body.classList.add("dark-mode");
}

function enableLightMode() {
    document.body.classList.remove("dark-mode");
}

function toggleDarkMode(checked) {
    if (checked) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

function calculateRoute() {
    document.getElementById('distance').textContent = '5 km';
    document.getElementById('duration').textContent = '15 min';
}

function checkWeather() {
    console.log('Checking weather...'); // Placeholder for actual functionality
}
