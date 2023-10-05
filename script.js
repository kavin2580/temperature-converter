function convertToCelsius() {
    const celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
    if (!isNaN(celsiusInput)) {
        const fahrenheit = (celsiusInput * 9 / 5) + 32;
        document.getElementById("result").textContent = `${celsiusInput}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid number";
    }
}

function convertToFahrenheit() {
    const celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
    if (!isNaN(celsiusInput)) {
        const celsius = (celsiusInput - 32) * 5 / 9;
        document.getElementById("result").textContent = `${celsiusInput}°F is ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid number";
    }
}

