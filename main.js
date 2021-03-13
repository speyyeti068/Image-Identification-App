console.log("Hello")

Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90,
    constraints: {
        facingMode: "environment"
    }
})

var camera = document.getElementById("webcamCapture");
console.log("Hello")

Webcam.attach("#camera");

function captureImage(){

}

function identifyImage(){

}