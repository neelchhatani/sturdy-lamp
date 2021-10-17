noseX=0;
noseY=0;
function preload(){
lip = loadImage('https://i.postimg.cc/HLgNMshT/l1.png');
}
function setup(){
canvas = createCanvas(500,500);
canvas.position(400,200);
video = createCapture(VIDEO);
video.size(500,500);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet is Intialized');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX = results[0].pose.nose.x-25;
noseY = results[0].pose.nose.y+5;
console.log("nose x = " + noseX );
console.log("nose y = " + noseY );
}
}

function draw(){
image(video,0,0,500,500);
image(lip , noseX , noseY , 70 , 70);
}

function takesnapshot(){
save('myFilterImage.png');
}