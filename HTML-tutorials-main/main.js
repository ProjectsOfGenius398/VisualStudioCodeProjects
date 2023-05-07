headArray = ["", "", ""];
bodyArray = ["", "", ""];

//And you can add more

ArrayCounter = 0;
PageCounter = 0;
//Both of those variable are important for the functionality

function next() {

    document.getElementById("").innerHTML = headArray[ArrayCounter];
    document.getElementById("").innerHTML = bodyArray[ArrayCounter];


    //This code is for anchor tags
    document.getElementById("").innerHTML = ""; //Change it here
    document.getElementById("").href = ' ';//And here


}