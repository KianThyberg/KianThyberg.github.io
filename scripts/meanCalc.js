let data = [];

function addData(){
    //take in data from input
    let newData = Number(document.getElementById("numInput").value);
    //validate input
    if (!isNaN(newData)){
        //add to array
        data.push(newData);
        //display new array
        displayArray();
        //display new mean
        calculateMean();
    }
    else{
        //display error
        alert("Invalid Input");
    }
}

function removeData(){
    //take in data from input
    let toFind = Number(document.getElementById("numInput").value);
    let searchComplete = false;
    //validate input
    if (!isNaN(toFind)){
        //loop through array
        for (let i in data){
            if (data[i] == toFind){
                //remove from array
                data.splice(i,1);
                //display new array
                displayArray();
                //display new mean
                calculateMean();
                //show success and break;
                searchComplete = true;
                break;
            }
        }
    }
    else{
        //display error
        alert("Invalid Input");
        searchComplete = true;
    }
    if (!searchComplete){
        //display error
        alert(toFind + " is not in dataset.");
    }
}

function calculateMean(){
    let sum = 0;
    //sum all values
    for (i of data){
        sum += i;
    }
    //divide by number of values
    let mean = sum / data.length;
    //display mean
    document.getElementById("mean").innerHTML = "<p>" + mean + "</p>";
}

function displayArray(){
    let displayOutput = "<p>";
    for (let i in data){
        //loop through array
        displayOutput += data[i];
        if (i < data.length - 1){
            //only add comma if not last entry
            displayOutput += ", "
        }
    }
    document.getElementById("dataset").innerHTML = displayOutput + "</p>";
}