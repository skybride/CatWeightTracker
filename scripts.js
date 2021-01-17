if(localStorage.length > 0){
    let pairs = [];
    let display = document.getElementById("nalaWeightDisplay");

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
}

/*Store into local storage*/
save = () => {

    /*generate a unique key using the current date*/
    const key = new Date();
    const value = document.getElementById("nalaWeight").value;

    /*store value*/
    localStorage.setItem(key, value);
    location.reload();
}
