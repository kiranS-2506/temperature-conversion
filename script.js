function convTemp() {
    const tempInput = document.getElementById("temp").value;
    const unitSelect = document.getElementById("option").value;
    const resultDiv = document.getElementById("result");


    let result;

    if (unitSelect === "K") {
        // Convert Celsius to Fahrenheit
        result = (tempInput - 32)*(5/9) + 273.15;
        resultDiv.innerHTML = `${tempInput} °F is equal to ${result.toFixed(2)} °K`;
    } else {
        // Convert Fahrenheit to Celsius
        result = (tempInput - 32) * 5/9;
        resultDiv.innerHTML = `${tempInput} °F is equal to ${result.toFixed(2)} °C`;
    }
 }