Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90,
    constraints: {
        facingMode: "environment"
    }
})

var camera = document.getElementById("camera");

Webcam.attach("#camera");

function captureImage(){
    Webcam.snap(function(dataURI){
        document.getElementById("imageResult").innerHTML = "<img id = 'capturedImage' style = 'width: 300px; height: 300px; padding-top: 40px; padding-bottom: 40px' src = '"+ dataURI +"'>"
    })
}
console.log(ml5.version);
classifier = ml5.imageClassifier("MobileNet", function(){
    console.log("Model Loaded")
})

function identifyImage(){
    var imageIdentifier = document.getElementById("capturedImage");

    classifier.classify(imageIdentifier, function(error, result){
        if (error){
            console.error(error);
        } else {
            console.log(result);
            document.getElementById("textResult").innerHTML = result[0].label;
        }
    })
}