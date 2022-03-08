img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;


function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
    video.size(600 ,300);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses );
	instializeInSetup(mario);
}

function modelLoaded(){
	console.log("model is loaded");
  }
  
  function gotPoses(results){
	if(results.length > 0){
		console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  
	}
  }

  function draw() {
	game()
}


