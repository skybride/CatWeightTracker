function updateDisplay(){
    var weightNala = document.createElement("p");
    var weightKiki = document.createElement("p");
    var weightPekoe = document.createElement("p");
    var weightRogue = document.createElement("p");

    var inputValue = document.getElementById("nalaWeight").value;
    console.log(inputValue);
    document.getElementById("nalaWeight").value = "";

    var inputValue2 = document.getElementById("kikiWeight").value;
    console.log(inputValue2);
    document.getElementById("kikiWeight").value = "";

    var inputValue3 = document.getElementById("pekoeWeight").value;
    console.log(inputValue3);
    document.getElementById("pekoeWeight").value = "";

    var inputValue4 = document.getElementById("rogueWeight").value;
    console.log(inputValue4);
    document.getElementById("rogueWeight").value = "";

    var weightValueNala = document.createTextNode(inputValue);
    var weightValueKiki = document.createTextNode(inputValue2);
    var weightValuePekoe = document.createTextNode(inputValue3);
    var weightValueRogue = document.createTextNode(inputValue4);

    weightNala.appendChild(weightValueNala);
    weightKiki.appendChild(weightValueKiki);
    weightPekoe.appendChild(weightValuePekoe);
    weightRogue.appendChild(weightValueRogue);


    document.getElementById("nalaWeightDisplay").appendChild(weightNala);
    document.getElementById("kikiWeightDisplay").appendChild(weightKiki);
    document.getElementById("pekoeWeightDisplay").appendChild(weightPekoe);
    document.getElementById("rogueWeightDisplay").appendChild(weightRogue);

    // if(validateNumber(inputValue) === true){
    //     document.getElementById("nalaWeightDisplay").appendChild(weightNala);
    // }
    // else if(validateNumber(inputValue2) === true){
    //     document.getElementById("kikiWeightDisplay").appendChild(weightKiki);
    // }

    // else if(validateNumber(inputValue3) === true){
    //     document.getElementById("pekoeWeightDisplay").appendChild(weightPekoe);
    // }

    // else if(validateNumber(inputValue4) === true){
    //     document.getElementById("rogueWeightDisplay").appendChild(weightRogue);
    // }
   
}

function validateNumber(weight){
    var errorDisplay="";
    var errorText= "";

    var weightInt = parseInt(weight);
    if(isNaN(weightInt)){

        errorDisplay = document.createElement("p");
        errorText = document.createTextNode("That was not a number, try again.");
        errorDisplay.appendChild(errorText);

        document.getElementById("errorDisplay").appendChild(errorDisplay);
        return false;
    } else {
        console.log(weightInt);
        return true;
    }
}