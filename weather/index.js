var inputvalues = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Changed variable name
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "a3ed9a3881503651d3d37cba5ffa391f";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalues.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description']; // Fixed accessing weather description
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`; // Used backticks for template literals
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`; // Changed variable name
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`; // Corrected variable name
        })
        .catch(err => alert('You entered the wrong city name'));
});
