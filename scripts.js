/*Display input values into Data section*/
updateDisplay = () => {
    /* create a new p each time*/
    const weightNala = document.createElement("p");
    const weightKiki = document.createElement("p");
    const weightPekoe = document.createElement("p");
    const weightRogue = document.createElement("p");

    /*take userinput and store in variable*/
    const inputValue = document.getElementById("nalaWeight").value;
    const inputValue2 = document.getElementById("kikiWeight").value;
    const inputValue3 = document.getElementById("pekoeWeight").value;
    const inputValue4 = document.getElementById("rogueWeight").value;

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
    
    save();

    /*clear input value after saving to local storage*/
    document.getElementById("nalaWeight").value = "";
    document.getElementById("nalaWeight").value = "";
    document.getElementById("nalaWeight").value = "";
    document.getElementById("nalaWeight").value = "";
}

/*Store into local storage*/
save = () => {
    /*generate a unique key using the current date*/
    const key = new Date();
    const value = document.getElementById("nalaWeight").value;

    /*store value*/
    localStorage.setItem(key, value);
    
}
