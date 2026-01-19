 
    const temp = 28; // °C
    const windSpeed = 10; // km/h
    const windchillElement = document.getElementById('windchill');

    function calculateWindChill(temp, windSpeed) {
      return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    }

    if (temp <= 10 && windSpeed > 4.8) {
      windchillElement.textContent = calculateWindChill(temp, windSpeed);
    } else {
      windchillElement.textContent = 'N/A';
    }

    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;