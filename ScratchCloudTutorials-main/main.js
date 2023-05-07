//arrays
tutorialHeaderArray=[
"Welcome!",

"What are cloud Variables?",

"How to upgrade to scratcher status?",

"How to turn a variable into a cloud variable?","","","","",""];


tutorialBodyArray=[
"Welcome to Scratch Cloud Tutorials! This tutorial series will help you to make cloud games on scratch.",

"Cloud Variables are basicly varibles stored on a server. In other words, a cloud variables can be accessed anywhere, but a normal variable can be accessed locally (on your computer) only. On scratch, only a scratcher can obtain cloud variables. Go to the next page to see how to become a scratcher!"

,"When you make a new scratch account, you are a 'New Scratcher'. To have access to cloud variables, you need to become a scratch. It happens usually 2-3 weeks after you make your scratch account. To make it happen faster, share more projects and comment more in Scratch! "

,"","","","","","","","","","","","","","","","","","","",""];
//arrays over

//variables
tutorialPageCounter = 1;
tutorialArrayCounter = 0;

//variables over
//functions
function next(){
    tutorialPageCounter = tutorialPageCounter + 1;
    tutorialArrayCounter = tutorialArrayCounter +1;

    document.getElementById("tutorialHead").innerHTML=tutorialHeaderArray[tutorialArrayCounter];
    document.getElementById("tutorialText").innerHTML=tutorialBodyArray[tutorialArrayCounter];
}

function previous(){
       tutorialPageCounter = tutorialPageCounter - 1;
        tutorialArrayCounter = tutorialArrayCounter - 1;
    
        document.getElementById("tutorialHead").innerHTML=tutorialHeaderArray[tutorialArrayCounter];
        document.getElementById("tutorialText").innerHTML=tutorialBodyArray[tutorialArrayCounter];   
}