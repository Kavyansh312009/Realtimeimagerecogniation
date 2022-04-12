https://teachablemachine.withgoogle.com/models/wcoEO1Pyc/
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
      document.getElementById("captured_image").src = data_uri;  
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wcoEO1Pyc/model.json",modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!!!');
}

function check(){
 img = document.getElementById("captured_image");
 classifier.classify(img ,gotResult);   
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML= results[0].label;
        document.getElementById("result_object_accuracy").innerHTML= (results[0].confidence).toFixed(3);
    }
}