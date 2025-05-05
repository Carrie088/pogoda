document.getElementById("weatherSection").style.display = "none"; 

document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;

    fetch(`/weather?city=${city}&country=${country}`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            const weatherSection = document.getElementById("weatherSection");

            if (data.error) {
                weatherInfo.innerHTML = data.error;
            } else {
                weatherInfo.innerHTML = `
                    <p>Miasto: ${city}, ${data.country}</p>
                    <p>Temperatura: ${data.temperature}°C</p>
                    <p>Odczuwalna: ${data.feelslike}°C</p>
                    <p>Opis: ${data.description}</p>
                    <p>Wiatr: ${data.wind} m/s</p>
                `;
            }

            weatherSection.style.display = "block";
        })
        .catch(error => {
            console.error('Błąd:', error);
            const weatherInfo = document.getElementById("weatherInfo");
            const weatherSection = document.getElementById("weatherSection");
            weatherInfo.innerHTML = "Wystąpił błąd.";
            weatherSection.style.display = "block";
        });
});
