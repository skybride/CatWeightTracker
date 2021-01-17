/*Display input values into Data section*/
updateDisplay = () => {
    /* create a new p each time*/
    const weightNala = document.createElement("p");
    const weightKiki = document.createElement("p");
    const weightPekoe = document.createElement("p");
    const weightRogue = document.createElement("p");

    /*
    - take userinput and store in variable
    - clear input element with id nalaWeight
    */
    const inputValue = document.getElementById("nalaWeight").value;
    document.getElementById("nalaWeight").value = "";

    const inputValue2 = document.getElementById("kikiWeight").value;
    document.getElementById("kikiWeight").value = "";

    const inputValue3 = document.getElementById("pekoeWeight").value;
    document.getElementById("pekoeWeight").value = "";

    const inputValue4 = document.getElementById("rogueWeight").value;
    document.getElementById("rogueWeight").value = "";

    /*create nodes that will hold the variables above*/
    const weightValueNala = document.createTextNode(inputValue);
    const weightValueKiki = document.createTextNode(inputValue2);
    const weightValuePekoe = document.createTextNode(inputValue3);
    const weightValueRogue = document.createTextNode(inputValue4);

    /*append nodes to p elements create at very top*/
    weightNala.appendChild(weightValueNala);
    weightKiki.appendChild(weightValueKiki);
    weightPekoe.appendChild(weightValuePekoe);
    weightRogue.appendChild(weightValueRogue);

    /*display at specified element ids*/
    document.getElementById("nalaWeightDisplay").appendChild(weightNala);
    document.getElementById("kikiWeightDisplay").appendChild(weightKiki);
    document.getElementById("pekoeWeightDisplay").appendChild(weightPekoe);
    document.getElementById("rogueWeightDisplay").appendChild(weightRogue);

}

/*Store into local storage*/

