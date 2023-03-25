song1="";
song2="";
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
leftWristscore=0;
songo1="";
songo2="";
scoreleftwrist=0;
scorerightwrist=0;
function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function draw(){
image(video,0,0,600,500);
fill("red");
stroke("red");
songo1=song1.isPlaying();
songo2=song2.isPlaying();
if(scorerightwrist>0.2){
    circle(rightWristx,rightWristy,20)
    song2.stop();

if(songo1==false){
    song1.play();
    document.getElementById("name").innerHTML="Song 1 playing";
}
}
if(scoreleftwrist>0.2){
    circle(leftWristx,leftWristy,20)
    song1.stop();

if(songo2==false){
    song2.play();
    document.getElementById("name").innerHTML="Song 2 Playing";
}
}
}
function modelloaded(){
    console.log("model is loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x
        leftWristy=results[0].pose.leftWrist.y;
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        scoreleftwrist=results[0].pose.keypoints[9].score;
scorerightwrist=results[0].pose.keypoints[10].score;
    }
}