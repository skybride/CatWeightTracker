function updateDisplay(){
    var weightText = document.createElement("p");

    var inputValue = document.getElementById("weight").value;
    console.log(inputValue);
    document.getElementById("weight").value = "";

    var weightValue = document.createTextNode(inputValue);

    weightText.appendChild(weightValue);

    document.getElementById("nalaWeight").appendChild(weightText);
}