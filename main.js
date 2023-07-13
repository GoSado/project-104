Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

var camera=document.getElementById("camera");
Webcam.attach(camera);
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='capture_image'>";

    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("httpsteachablemachine.withgoogle.commodelsYnS4OEdQXmodel.json",modelloaded);
function modelloaded(){
    console.log("model loaded");
}