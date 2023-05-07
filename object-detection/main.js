img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas( 380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380)
}

function draw(){
    image(video,0,0,380,380);
    if (status !=""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult)
        for (i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "status : object detected";
            document.getElementById("number_of_objects").innerHTML = objects.length + "object(s) have been detected";

            fill(r,g,b);
            percent = floor(objects[i].confidence + 100);
            text(objects[i].label + "" + percent + "%",objects[i].x + 15, objects[i].y + 15);

            nofill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }    
    }

    
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }

    console.log(results);
    objects = results;
}

function modelLoaded(){
    console.log("IM MAD WITH WORLD_LANGUAGES! GO MASS REPORT HIM!!");
}