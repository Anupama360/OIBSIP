function temprature() {
    
    let tempValue = document.querySelector('.takval').value;
    let unit = document.getElementById('unit').value;
    tempValue = parseFloat(tempValue);
    let resultElement = document.querySelector('.value');
    if (isNaN(tempValue)) {
        resultElement.textContent = "Please enter a valid number!";
        return;
    }
     let result = 0;

    if (unit === "Celsius") {
        // Convert Celsius to Fahrenheit
        result = (tempValue * 9/5) + 32;
        resultElement.textContent = `${result.toFixed(2)} °F`;
        updateUI(result, 'Fahrenheit');
    } else if (unit === "Fahrenheit") {
        // Convert Fahrenheit to Celsius
        result = (tempValue - 32) * 5/9;
        resultElement.textContent = `${result.toFixed(2)} °C`;
        updateUI(result, 'Celsius');
    }
}
function updateUI(temp, unit) {
    let iconElement = document.getElementById('icon');
    let parElement = document.getElementById('par');
    parElement.textContent = '';

    if (unit === 'Fahrenheit') {
        if (temp > 85) {
            iconElement.className = 'fa-solid fa-face-grin-beam';
            parElement.textContent = 'Its hot!';
        } else if (temp < 32) {
            iconElement.className = 'fa-solid fa-face-sad-tear';
            parElement.textContent = 'Its freezing!';
        } else {
            iconElement.className = 'fa-solid fa-face-grin';
            parElement.textContent = 'The weather is moderate.';
        }
    } else if (unit === 'Celsius') {
        if (temp > 29) {
            iconElement.className = 'fa-solid fa-face-grin-beam';
            parElement.textContent = 'Its hot!';
        } else if (temp < 0) {
            iconElement.className = 'fa-solid fa-face-sad-tear';
            parElement.textContent = 'Its freezing!';
        } else {
            iconElement.className = 'fa-solid fa-face-grin';
            parElement.textContent = 'The weather is moderate.';
        }
    }
}
