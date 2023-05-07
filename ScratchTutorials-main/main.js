//Arrays

//This array will appear in the head
tutorialHeadArray = [
    "Welcome!",
    "Pong Tutorial",
    "Math Quiz Tutorial", "", "", "", "", "", "", "", ""
]
//This array will appear in the body
tutorialBodyArray = [
    "Welcome to Scratch Tutorials! This is a all-in-one tutorial to teach simple and advanced projects in Scratch! From pong games to platformers, everything is here!",

    "For a pong game, you need 3 sprites : A ball, a paddle, and a line. All of them can be got from the sprite library. Now, use the links for the code:"
    , "For a Math Quiz, you can make (or pick) a sprite of your choice. Then follow the code:"
    , "", "", "", "", "", "", ""
]

//Nothing to do here, variables
tutorialPageCounter = 1;
tutorialArrayCounter = 0;

//Nothing to do here
function loaded(){
    document.getElementById("ImageLinkDiv").style.visibility='hidden';
}




function next() {
    tutorialPageCounter = tutorialPageCounter + 1;
    tutorialArrayCounter = tutorialArrayCounter + 1;
    //copy an if statment and change the code
    if (tutorialPageCounter == 1) {
        document.getElementById("tutorialHead").innerHTML = tutorialHeadArray[tutorialArrayCounter];
        document.getElementById("tutorialText").innerHTML = tutorialBodyArray[tutorialArrayCounter];
        document.getElementById("tutorialPageNumber").innerHTML = tutorialPageCounter;

        document.getElementById("ImageLinkDiv").style.visibility = 'hidden';
        
        //Image1
        document.getElementById("tutorialLinks1").innerHTML=""; //Change it here
        document.getElementById("tutorialLinks1").href=' ';//And here
        //Image1Over

        //Image2
        document.getElementById("tutorialLinks2").innerHTML=""; //Change it here
        document.getElementById("tutorialLinks2").href=' ';//And here
        //Image2Over

        //Image3
        document.getElementById("tutorialLinks3").innerHTML=""; //Change it here
        document.getElementById("tutorialLinks3").href='';//And here
        //Image3Over
    }

    if (tutorialPageCounter == 2) {
        
            document.getElementById("tutorialHead").innerHTML = tutorialHeadArray[tutorialArrayCounter];
            document.getElementById("tutorialText").innerHTML = tutorialBodyArray[tutorialArrayCounter];
            document.getElementById("tutorialPageNumber").innerHTML = tutorialPageCounter;
    
            document.getElementById("ImageLinkDiv").style.visibility = 'visible';
            
            //Image1
            document.getElementById("tutorialLinks1").innerHTML="Code for pong sprite"; //Change it here
            document.getElementById("tutorialLinks1").href='/images/pongImage1.png';//And here
            //Image1Over
    
            //Image2
            document.getElementById("tutorialLinks2").innerHTML="Code for Paddle sprite"; //Change it here
            document.getElementById("tutorialLinks2").href='/images/pongImage2.png';//And here
            //Image2Over
    
            //Image3
            document.getElementById("tutorialLinks3").innerHTML="Code for line sprite"; //Change it here
            document.getElementById("tutorialLinks3").href='/images/pongImage3.png';//And here
            //Image3Over
        
        
    }

    if (tutorialPageCounter == 3) {
        
        document.getElementById("tutorialHead").innerHTML = tutorialHeadArray[tutorialArrayCounter];
        document.getElementById("tutorialText").innerHTML = tutorialBodyArray[tutorialArrayCounter];
        document.getElementById("tutorialPageNumber").innerHTML = tutorialPageCounter;

        document.getElementById("ImageLinkDiv").style.visibility = 'visible';
        
        //Image1
        document.getElementById("tutorialLinks1").innerHTML="Math Quiz Tutorial (Image)"; //Change it here
        document.getElementById("tutorialLinks1").href='/images/mathQuizCode.png';//And here
        //Image1Over

        //Image2
        document.getElementById("tutorialLinks2").innerHTML="Math Quiz Tutorial (Video)"; //Change it here
        document.getElementById("tutorialLinks2").href="https://www.youtube.com/watch?v=HDovnuP3mr0";//And here
        //Image2Over

        //Image3
        document.getElementById("tutorialLinks3").innerHTML=""; //Change it here
        document.getElementById("tutorialLinks3").href='';//And here
        //Image3Over
    }
}

















function previous() {
    tutorialPageCounter = tutorialPageCounter - 1;
    tutorialArrayCounter = tutorialArrayCounter - 1;

    //copy an if statment and change the code
    if (tutorialPageCounter == 1) {
        
            document.getElementById("tutorialHead").innerHTML = tutorialHeadArray[tutorialArrayCounter];
            document.getElementById("tutorialText").innerHTML = tutorialBodyArray[tutorialArrayCounter];
            document.getElementById("tutorialPageNumber").innerHTML = tutorialPageCounter;
    
            document.getElementById("ImageLinkDiv").style.visibility = 'hidden';
            
            //Image1
            document.getElementById("tutorialLinks1").innerHTML=""; //Change it here
            document.getElementById("tutorialLinks1").href='';//And here
            //Image1Over
    
            //Image2
            document.getElementById("tutorialLinks2").innerHTML=""; //Change it here
            document.getElementById("tutorialLinks2").href='';//And here
            //Image2Over
    
            //Image3
            document.getElementById("tutorialLinks3").innerHTML=""; //Change it here
            document.getElementById("tutorialLinks3").href='';//And here
            //Image3Over
        
    }

    if (tutorialPageCounter == 2) {
        
            document.getElementById("tutorialHead").innerHTML = tutorialHeadArray[tutorialArrayCounter];
            document.getElementById("tutorialText").innerHTML = tutorialBodyArray[tutorialArrayCounter];
            document.getElementById("tutorialPageNumber").innerHTML = tutorialPageCounter;
    
            document.getElementById("ImageLinkDiv").style.visibility = 'visible';
            
            //Image1
            document.getElementById("tutorialLinks1").innerHTML="Code for pong sprite"; //Change it here
            document.getElementById("tutorialLinks1").href='/images/pongImage1.png';//And here
            //Image1Over
    
            //Image2
            document.getElementById("tutorialLinks2").innerHTML="Code for Paddle sprite"; //Change it here
            document.getElementById("tutorialLinks2").href='/images/pongImage2.png';//And here
            //Image2Over
    
            //Image3
            document.getElementById("tutorialLinks3").innerHTML="Code for line sprite"; //Change it here
            document.getElementById("tutorialLinks3").href='/images/pongImage3.png';//And here
            //Image3Over
        
        
    }

    if (tutorialPageCounter == 3) {
        
        document.getElementById("tutorialHead").innerHTML = tutorialHeadArray[tutorialArrayCounter];
        document.getElementById("tutorialText").innerHTML = tutorialBodyArray[tutorialArrayCounter];
        document.getElementById("tutorialPageNumber").innerHTML = tutorialPageCounter;

        document.getElementById("ImageLinkDiv").style.visibility = 'visible';
        
        //Image1
        document.getElementById("tutorialLinks1").innerHTML="Math Quiz Tutorial (Image)"; //Change it here
        document.getElementById("tutorialLinks1").href='/images/mathQuizCode.png';//And here
        //Image1Over

        //Image2
        document.getElementById("tutorialLinks2").innerHTML="Math Quiz Tutorial (Video)"; //Change it here
        document.getElementById("tutorialLinks2").href="https://www.youtube.com/watch?v=HDovnuP3mr0";//And here
        //Image2Over

        //Image3
        document.getElementById("tutorialLinks3").innerHTML=""; //Change it here
        document.getElementById("tutorialLinks3").href='';//And here
        //Image3Over
    }
}