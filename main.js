noseX = 0 ;
noseY = 0 ;
rightWristX = 0 ;
leftWristX = 0 ;
difference = 0 ;

function preload() {} ;

function setup() {
    video = createCapture(VIDEO) ;
    video.size(550,430) ;
    canvas = createCanvas(550,430) ;
    canvas.position(700, 169) ;

    posenet = ml5.poseNet(video, modelLoaded) ;
    posenet.on('pose' , gotPoses)
}

function modelLoaded() {
    console.log(" Model is loaded now.") ;
}

function gotPoses(results) {
    console.log(results) ;
    noseX = results[0].pose.nose.x ;
    noseY = results[0].pose.nose.y ;
    rightWristX = results[0].pose.rightWrist.x ;
    leftWristX = results[0].pose.leftWrist.x ;
    difference = leftWristX - rightWristX ;
}

function draw() {
    background('#5bc0de') ;
    fill('#2405f0') ;
    stroke('#f5ec42') ;
    square(noseX, noseY, difference) ;
}