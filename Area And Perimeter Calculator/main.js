shapeOption = "squa";
length = "";
breath = ""; 
lengthOfSide = "";
perimeter = ""
area="";

function shapeChange() {
    shapeOption = document.getElementById("selectShape").value;
    if (shapeOption == "squa") {
        document.getElementById("input1").placeholder = "Input length of side";
        document.getElementById("input2").style.visibility = "hidden";
      
    }

    if (shapeOption == "rect") {
        document.getElementById("input1").placeholder = "Input length";
        document.getElementById("input2").placeholder = "Input breath";
      
    }

    if (shapeOption=="tri"){
        document.getElementById("input1").placeholder = "Input length";
        document.getElementById("input2").placeholder = "Input breath";
      
    }
}

function square() {
    document.getElementById("input1").placeholder = "Input length of side";
    document.getElementById("input2").style.visibility = "hidden";
}

function calculate() {
    if (shapeOption == "squa") {
        lengthOfSide = document.getElementById("input1").value;
        perimeter = lengthOfSide * 4;
        area=lengthOfSide*lengthOfSide
        document.getElementById("perimeterResult").innerHTML = "The perimeter of the given square is " + perimeter;
        document.getElementById("areaResult").innerHTML = "The area of the given square is " + area;
    }

    if (shapeOption == "rect") {
        length=document.getElementById("input1").value;
        breath=document.getElementById("input2").value;

        perimeter = length+breath*2
        area = length*breath

        document.getElementById("perimeterResult").innerHTML = "The perimeter of the given rectangle is " + perimeter;
        document.getElementById("areaResult").innerHTML = "The area of the given rectangle is " + area;
        
    }
}