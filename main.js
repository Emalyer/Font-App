noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){    
video=createCapture(VIDEO);
video.size(600,500);
video.position(950,200)

canvas=createCanvas(500,500);
canvas.position(400,200);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
background("#FC9B4C");
fill("#A9A7EB");
stroke("#A9A7EB");
textSize(difference);
text("Ema",50,400);

document.getElementById("square_side").innerHTML="The font size will be - "+difference;
}

function gotPoses(reuslts){
    if(reuslts.length>0){
        console.log(reuslts);
        noseX=reuslts[0].pose.nose.x;
        noseY=reuslts[0].pose.nose.y;
        leftWristX=reuslts[0].pose.leftWrist.x;
        rightWristX=reuslts[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}