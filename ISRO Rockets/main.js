headTextStorageArray=["Welcome!",
"SLV",
"ASLV"
,"","","","","","","","","","","","","","","",];

bodyTextStorageArray=["Welcome to my website! Here I have compiled the most significent ISRO satellite Launchers! I hope you enjoy!",

"The Satellite Launch Vehicle or SLV was a small-lift launch vehicle project started in the early 1970s by the Indian Space Research Organisation to develop the technology needed to launch satellites. SLV was intended to reach a height of 400 kilometres and carry a payload of 40 kg."

,"The Augmented Satellite Launch Vehicle or Advanced Satellite Launch Vehicle, also known as ASLV, was a Small-lift launch vehicle five-stage solid-fuel rocket developed by the Indian Space Research Organisation to place 150 kg satellites into LEO."
,"","","","","","","","","","","","","","","",];

pageCounter=1;
ArrayCounter=0;


function previous(){
    pageCounter = pageCounter-1;
    ArrayCounter=ArrayCounter-1;

    document.getElementById("contentTextHeader").innerHTML=headTextStorageArray[ArrayCounter];
    document.getElementById("contentBodyText").innerHTML=bodyTextStorageArray[ArrayCounter];
}

function next(){
    pageCounter = pageCounter+1;
    ArrayCounter=ArrayCounter+1;

    document.getElementById("contentTextHeader").innerHTML=headTextStorageArray[ArrayCounter];
    document.getElementById("contentBodyText").innerHTML=bodyTextStorageArray[ArrayCounter];
}