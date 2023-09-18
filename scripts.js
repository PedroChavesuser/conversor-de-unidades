// select elements
const inputElement = document.querySelector("#input")
const fromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const outputElement = document.querySelector("#output")
const convertButton = document.querySelector("#convert-btn")
const messageElement = document.querySelector("#message")

// function for converse to unity 
function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
    }
    // Convert the entrance to meter

    let meters
    switch (fromValue) {
        case "m":
            meters = inputElement.value;
            break
        case "Km": 
             meters = inputElement.value * 1000;
             break
        case "cm": 
             meters = inputElement.value / 100;
             break
        case "mm":  
             meters = inputElement.value  / 1000;
             break    
    
    }

    // Convert meters to output unit
    let result
        switch (toValue) {
            case "m":
                result= meters;
                break
                case "km":
                    result = meters / 1000;
                break
                case "cm": 
                result= meters * 100;
                break
                case "mm":  
                result= meters * 1000;
                break    
}

output.value = result.toFixed(2);

const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;
  const message = `${
    inputElement.value
  } ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
  messageElement.textContent = message;
}


convertButton.addEventListener("click", convert);