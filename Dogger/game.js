//------------
//System Vars
//------------
var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.font = GAME_FONTS;


var charImage = new Image();
var backgroundImage = new Image();
backgroundImage.src = "Road.png";

charImage.ready = false;
charImage.happy = true;
charImage.onload = setAssetReady;
charImage.src = PATH_CHAR;  // source image location set in constants.js

function setAssetReady()
{
	this.ready = true;
}


ctx.fillRect(0,0,stage.width,stage.height);
ctx.fillStyle = "#000";
ctx.fillText(TEXT_PRELOADING, TEXT_PRELOADING_X, TEXT_PRELOADING_Y);
var preloader = setInterval(preloading, TIME_PER_FRAME);
var gameloop, currX, currY;

function preloading()
{
	if (charImage.ready)
	{
		clearInterval(preloader);
		gameloop = setInterval(update, TIME_PER_FRAME);
	}
}


currX = IMAGE_START_X;
currY = IMAGE_START_Y;

function update()
{
	//Draw Canvas Background
	ctx.drawImage(backgroundImage,0,0,600,600,0,0,600,600);

	//Draw Character
	ctx.drawImage(charImage,currX,currY,CHAR_WIDTH,CHAR_HEIGHT,
					CHAR_START_X,CHAR_START_Y,
					CHAR_WIDTH,CHAR_HEIGHT);
					currX = 0;
	if (currX >= SPRITE_WIDTH)
		currX = 0;
}
