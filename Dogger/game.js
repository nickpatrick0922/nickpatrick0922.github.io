//------------
//System Vars
//------------




//canvas
var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.font = GAME_FONTS;


//character image
var charImage = new Image();
charImage.ready = false;
charImage.happy = true;
charImage.onload = setAssetReady;
charImage.src = PATH_CHAR;

//background image
var backgroundImage = new Image();
backgroundImage.src = "Road.png";

//car image
var carImage = new Image();
carImage.src="car.png";


var timer;




car1currX = CAR1_START_X;
car2currX = CAR2_START_X;
car3currX = CAR3_START_X;
car4currX = CAR4_START_X;
car5currX = CAR5_START_X;
car6currY = CAR6_START_X;
car1currY = CAR1_START_Y;
car2currY = CAR2_START_Y;
car3currY = CAR3_START_Y;
car4currY = CAR4_START_Y;
car5currY = CAR5_START_Y;
car6currY = CAR6_START_Y;


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
		timer = new Timer();
		timer.reset();
	}
}




function onKeyDown(evt)
	{
		switch (evt.keyCode)
		{
			case 38:  /* Up arrow was pressed */

					{
						if(CHAR_START_Y-CHARSPEED<0)
						{

						}



						else {
							CHAR_START_Y=CHAR_START_Y-CHARSPEED; // GO UP
							currX=0;
						}



					}
					break;

			case 40:  /* Down arrow was pressed */
					{
						if(CHAR_START_Y+CHAR_HEIGHT+CHARSPEED>STAGE_HEIGHT)
						{

						}

						else {
							CHAR_START_Y=CHAR_START_Y+CHARSPEED;
							currX=0;
						}
					}
					break;

			case 37:  /* Left arrow was pressed */
					{
						if(CHAR_START_X-CHARSPEED<0)
						{

						}
						else
						{
							CHAR_START_X=CHAR_START_X-CHARSPEED;
							currX = 80;
						}
					}
					break;
			case 39:  /* Right arrow was pressed */

					{
						if(CHAR_START_X+CHAR_WIDTH+CHARSPEED>STAGE_WIDTH)
						{

						}
						else
						{
						CHAR_START_X=CHAR_START_X+CHARSPEED;
						currX=40;
						}
					}
					break;
			case 16: // shift key
					shiftkey=true;
					break;

			}


		}


	function onKeyUp(evt)
	{
	}






	currX = IMAGE_START_X;
	currY = IMAGE_START_Y;
	car1currX = CAR1IMAGE_START_X;
	car2currX = CAR2IMAGE_START_X;
	car3currX = CAR3IMAGE_START_X;
	car4currX = CAR4IMAGE_START_X;
	car5currX = CAR5IMAGE_START_X;
	car6currX = CAR6IMAGE_START_X;
	car1currY = CAR1IMAGE_START_Y;
	car2currY = CAR2IMAGE_START_Y;
	car3currY = CAR3IMAGE_START_Y;
	car4currY = CAR4IMAGE_START_Y;
	car5currY = CAR5IMAGE_START_Y;
	car6currY = CAR6IMAGE_START_Y;


function update()
{

	window.addEventListener('keydown',onKeyDown,true);
	//Draw Canvas Background
	ctx.drawImage(backgroundImage,0,0,600,600,0,0,600,600);






	ctx.drawImage(carImage, car1currX, car1currY, CAR1_WIDTH, CAR1_HEIGHT, CAR1_START_X, CAR1_START_Y,CAR1_WIDTH,CAR1_HEIGHT);
	ctx.drawImage(carImage, car2currX, car2currY, CAR2_WIDTH, CAR2_HEIGHT, CAR2_START_X, CAR2_START_Y,CAR2_WIDTH,CAR2_HEIGHT);
	ctx.drawImage(carImage, car3currX, car3currY, CAR3_WIDTH, CAR3_HEIGHT, CAR3_START_X, CAR3_START_Y,CAR3_WIDTH,CAR3_HEIGHT);
	ctx.drawImage(carImage, car4currX, car4currY, CAR4_WIDTH, CAR4_HEIGHT, CAR4_START_X, CAR4_START_Y,CAR4_WIDTH,CAR4_HEIGHT);
	ctx.drawImage(carImage, car5currX, car5currY, CAR5_WIDTH, CAR5_HEIGHT, CAR5_START_X, CAR5_START_Y,CAR5_WIDTH,CAR5_HEIGHT);
	ctx.drawImage(carImage, car6currX, car6currY, CAR6_WIDTH, CAR6_HEIGHT, CAR6_START_X, CAR6_START_Y,CAR6_WIDTH,CAR6_HEIGHT);









	//Draw Character
	ctx.drawImage(charImage,currX,currY,CHAR_WIDTH,CHAR_HEIGHT,
					CHAR_START_X,CHAR_START_Y,
					CHAR_WIDTH,CHAR_HEIGHT);



					if(CHAR_START_Y+CHAR_HEIGHT>=CAR1_START_Y+10 && CHAR_START_Y<=CAR1_START_Y+CAR1_HEIGHT-10)
					{
						if(CHAR_START_X+CHAR_WIDTH>=CAR1_START_X && CHAR_START_X<=CAR1_START_X+CAR1_WIDTH)
						{
							window.alert("You lose!");
							CHAR_START_X = 520;
							CHAR_START_Y = 10;
						}
						else {
						}
					}

					if(CHAR_START_Y+CHAR_HEIGHT>=CAR2_START_Y+10 && CHAR_START_Y<=CAR2_START_Y+CAR2_HEIGHT-10)
					{
						if(CHAR_START_X+CHAR_WIDTH>=CAR2_START_X && CHAR_START_X<=CAR2_START_X+CAR2_WIDTH)
						{
							window.alert("You lose!");
							CHAR_START_X = 520;
							CHAR_START_Y = 10;
						}
						else {
						}
					}

					if(CHAR_START_Y+CHAR_HEIGHT>=CAR3_START_Y+10 && CHAR_START_Y<=CAR3_START_Y+CAR3_HEIGHT-10)
					{
						if(CHAR_START_X+CHAR_WIDTH>=CAR3_START_X && CHAR_START_X<=CAR3_START_X+CAR3_WIDTH)
						{
							window.alert("You lose!");
							CHAR_START_X = 520;
							CHAR_START_Y = 10;
						}
						else {
						}
					}

					if(CHAR_START_Y+CHAR_HEIGHT>=CAR4_START_Y+10 && CHAR_START_Y<=CAR4_START_Y+CAR4_HEIGHT-10)
					{
						if(CHAR_START_X+CHAR_WIDTH>=CAR4_START_X && CHAR_START_X<=CAR4_START_X+CAR4_WIDTH)
						{
							window.alert("You lose!");
							CHAR_START_X = 520;
							CHAR_START_Y = 10;
						}
						else {
						}
					}

					if(CHAR_START_Y+CHAR_HEIGHT>=CAR5_START_Y+10 && CHAR_START_Y<=CAR5_START_Y+CAR5_HEIGHT-10)
					{
						if(CHAR_START_X+CHAR_WIDTH>=CAR5_START_X && CHAR_START_X<=CAR5_START_X+CAR5_WIDTH)
						{
							window.alert("You lose!");
							CHAR_START_X = 520;
							CHAR_START_Y = 10;
						}
						else {
						}
					}
					if(CHAR_START_Y+CHAR_HEIGHT>=CAR6_START_Y+10 && CHAR_START_Y<=CAR6_START_Y+CAR6_HEIGHT-10)
					{
						if(CHAR_START_X+CHAR_WIDTH>=CAR6_START_X && CHAR_START_X<=CAR6_START_X+CAR6_WIDTH)
						{
							window.alert("You lose!");
							CHAR_START_X = 520;
							CHAR_START_Y = 10;
						}
						else {
						}
					}

					if(CHAR_START_Y+CHAR_HEIGHT==STAGE_HEIGHT)
					{

						if(CHAR_START_X<85 || CHAR_START_X+CHAR_WIDTH>85)
						{
								window.alert("You win!");
								CHAR_START_X = 520;
								CHAR_START_Y = 10;
						}
						else {

						}

					}









					if(CAR1_START_X+CAR1_WIDTH>STAGE_WIDTH)
					{
						CAR1_SPEED=-CAR1_SPEED;
						car1currX=40;
					}
					else if(CAR1_START_X<0)
					{
							CAR1_SPEED=-CAR1_SPEED;
							car1currX=0;
					}



					if(CAR2_START_X+CAR2_WIDTH>STAGE_WIDTH)
					{
						CAR2_SPEED=-CAR2_SPEED;
						car2currX=40;
					}
					else if(CAR2_START_X<0)
					{
							CAR2_SPEED=-CAR2_SPEED;
							car2currX=0;
					}



					if(CAR3_START_X+CAR3_WIDTH>STAGE_WIDTH)
					{
						CAR3_SPEED=-CAR3_SPEED;
						car3currX=40;
					}
					else if(CAR3_START_X<0)
					{
							CAR3_SPEED=-CAR3_SPEED;
							car3currX=0;
					}


					if(CAR4_START_X+CAR4_WIDTH>STAGE_WIDTH)
					{
						CAR4_SPEED=-CAR4_SPEED;
						car4currX=40;
					}
					else if(CAR4_START_X<0)
					{
							CAR4_SPEED=-CAR4_SPEED;
							car4currX=0;
					}


					if(CAR5_START_X+CAR5_WIDTH>STAGE_WIDTH)
					{
						CAR5_SPEED=-CAR5_SPEED;
						car5currX=40;
					}
					else if(CAR5_START_X<0)
					{
							CAR5_SPEED=-CAR5_SPEED;
							car5currX=0;
					}


					if(CAR6_START_X+CAR6_WIDTH>STAGE_WIDTH)
					{
						CAR6_SPEED=-CAR6_SPEED;
						car6currX=40;
					}
					else if(CAR6_START_X<0)
					{
							CAR6_SPEED=-CAR6_SPEED;
							car6currX=0;
					}

					CAR1_START_X+=CAR1_SPEED;
					CAR2_START_X+=CAR2_SPEED;
					CAR3_START_X+=CAR3_SPEED;
					CAR4_START_X+=CAR4_SPEED;
					CAR5_START_X+=CAR5_SPEED;
					CAR6_START_X+=CAR6_SPEED;

					currentTime = timer.getElapsedTime();
   				output.innerHTML = currentTime;



}
