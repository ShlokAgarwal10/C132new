status = "";
img = "";

function desk_home(){
    window.location = "index.html";
}
function preload(){
    img = loadImage("desk.jpeg")
    }
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
    }
    function modelLoaded(){
        console.log("model loaded");
        status = true;
        objectDetector.detect(img,gotResults);
    }
    function gotResults(error,results){
        if(error){
            console.log(error);
        }
        console.log(results);
        }
        function draw(){
            image(img,0,0,640,420);

        }