
if(localStorage.length > 0){

    let display = document.getElementById("nalaWeightDisplay");
    display.innerHTML="";
    
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let keyValue = localStorage.getItem(key);
        display.innerHTML += keyValue + "<br>";
    }
}

getIdValue = id => {
    let idValue = id;
    let displayArea = "";

    if(idValue === "nala"){
        displayArea = document.getElementById("nalaWeightDisplay");
    }
    if(idValue === "kiki"){
        displayArea = document.getElementById("kikiWeightDisplay");
    }
    idName = displayArea.id;
    display(idName);

}

display = idName => {
    console.log(idName);
    let pairs = [];

    let display = document.getElementById(idName);
    display.innerHTML="";
    
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let keyValue = localStorage.getItem(key);
        pairs.push({ key: i, value: keyValue });
    }

    pairs.forEach(function(pair){
        console.log(pair.key + ": " + pair.value);
        display.innerHTML += pair.value + "<br>";
    });

    save();
}

/*Store into local storage*/
save = () => {
    /*generate a unique key using the current date*/
    const key = new Date();
    const value = document.getElementById("nalaWeight").value;

    /*store value*/
    localStorage.setItem(key, value);
    //location.reload();
}

