function setup(){
    canvas = createCanvas(640 , 500);
    canvas.center();
    canvas.parent("canvas");

    video = createCapture(VIDEO)
    video.size(640 , 500);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function draw(){
    image(video , 0 , 0 , 640 , 500);
}

function play(){
    window.alert("Not yet done with start button");
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX: " + noseX + "  NoseY: " + noseY);
    }
}