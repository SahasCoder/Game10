wristX = "";
wristY = "";
GameStatus = "";
scoreRightWrist = "";

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

    if(GameStatus == "start"){
        if(scoreRightWrist > 0.2){
        circle(wristX , wristY , 30);
        fill("lightgreen");
        stroke("yellow");
        }
    }
}

function play(){
    GameStatus = "start";
    console.log("Game Started");
    document.getElementById("status").innerHTML = "Status: Game Loaded";
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        wristX = results[0].pose.rightWrist.x;
        wristY = results[0].pose.rightWrist.y;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("WristX: " + wristX + "  WristY: " + wristY);
    }
}
