function preload() {
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500, 500);
    canvas.position(580, 120);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log("PoseNet has initialized!");
}

function gotPoses(result) {
    if(result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("Nose X is " + noseX + " and nose Y is " + noseY);
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log("Left wrist X is " + leftWristX + " and right wrist X is " + rightWristX + " and difference of the x's is " + difference);
    }
}

function draw() {
    background("yellow");
    document.getElementById("square_side").innerHTML = "Width and height of square will be " + difference;
    fill("red");
    stroke("black");
    square(noseX, noseY, difference); 
    }