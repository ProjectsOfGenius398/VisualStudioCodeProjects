//Defining Variables
noseX="0";
noseY="0";

eyesX="0";
eyesY="0";

//Uploading Images
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/jjpCMtk8/Clown-Nose.png');
    eye_filter = loadImage('https://res.cloudinary.com/anantjit/image/upload/v1625071429/Eyes_pkxbd5.png');
}

//Creating, sizing and positioning the canvas and the live video (we hide the video).
function setup() {
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    //Saving and starting posenet
    poseNet=ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

//Not a needed function, but it verifies that posenet is loaded
function modalLoaded() {
    console.log('posenet On');
}


function gotPoses(results) {
        if (results.length > 0)
        {
            console.log(results);

            //saves and logs the x and y of the nose
            noseX = results[0].pose.nose.x-10;
            noseY = results[0].pose.nose.y-10;
            console.log("nose X : "+noseX);
            console.log("nose Y : "+noseY);

            //saves and logs the x and y of the eyes
            eyesX = results[0].pose.eyes.x-10;
            eyesY = results[0].pose.eyes.y-10;
            console.log("eyes X : "+eyesX);
            console.log("eyes Y : "+eyesY);
        }
}

function draw() {
    Image(video, 0, 0, 300, 300);
    Image(clown_nose, noseX, noseY, 30,30);

    Image(video, 0, 0, 300, 300);
    Image(eye_filter, eyesX, eyesY, 30,30);
}

function take_snapshot() {
    save('my_filter_image.png');
}