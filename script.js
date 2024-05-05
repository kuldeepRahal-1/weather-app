document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const btn = document.getElementById('btn');
    const showData = document.getElementById('showData');

    btn.addEventListener('click', async () => {
        const city = input.value;
        const apiKey = 'f5a58ec17640a4fe471c2ab204fdd16b'; // Replace with your API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const feelsLike = data.main.feels_like;

            showData.textContent = `Weather in ${city}: ${weatherDescription}. Temperature: ${temperature}°C. Feels like: ${feelsLike}°C.`;

        } catch (error) {
            showData.textContent = `Error fetching data: ${error.message}`;
        }
    });
});
