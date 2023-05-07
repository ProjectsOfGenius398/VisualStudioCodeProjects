Webcam.set({
    height: 300,
    width: 350,
    img_format:'png',
    png_quality:90,

    constraints:{
        facingMode:"envoirment"
    }
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('MoblieNet', modelLoaded);

function modelLoaded(){
    console.log('Modal Loaded');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult)
}

function gotResult(error, results){
    if (error)
    {
        console.error("hello");
    }
    else
    {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}