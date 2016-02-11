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


var carImage = new Image();
carImage.src="car.png";


charImage.ready = false;
charImage.happy = true;
charImage.onload = setAssetReady;
charImage.src = PATH_CHAR;




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
	}
}




function onKeyDown(evt)
	{
		// http://www.w3schools.com/js/tryit.asp?filename=try_dom_event_keycode
		switch (evt.keyCode)
		{
			case 38:  /* Up arrow was pressed */

					{
						CHAR_START_Y=CHAR_START_Y-5; // GO UP
						currX=0;
					}
					break;

			case 40:  /* Down arrow was pressed */
					{
						CHAR_START_Y=CHAR_START_Y+5;
						currX=0;
					}
					break;

			case 37:  /* Left arrow was pressed */
					{
						CHAR_START_X=CHAR_START_X-5;
						currX = 80;
					}
					break;
			case 39:  /* Right arrow was pressed */

					{
						CHAR_START_X=CHAR_START_X+5;
						currX=40;
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



function update()
{

	window.addEventListener('keydown',onKeyDown,true);
	//Draw Canvas Background
	ctx.drawImage(backgroundImage,0,0,600,600,0,0,600,600);


	//Draw Cars





	ctx.drawImage(carImage, 0, 10, 40, 30, 45, 80,40,30);
	ctx.drawImage(carImage, 40, 10, 40, 30, 500, 135,40,30);
	ctx.drawImage(carImage, 0, 10, 40, 30, 45, 232,40,30);
	ctx.drawImage(carImage, 40, 10, 40, 30, 500, 285,40,30);
	ctx.drawImage(carImage, 0, 10, 40, 30, 45, 401,40,30);
	ctx.drawImage(carImage, 40, 10, 40, 30, 500, 460,40,30);








	ctx.drawImage(carImage,car1currX,car1currY,CAR1_WIDTH,CAR1_HEIGHT,
					CAR1_START_X,CAR1_START_Y,
					CAR1_WIDTH,CAR1_HEIGHT);
	ctx.drawImage(carImage,car2currX,car2currY,CAR2_WIDTH,CAR2_HEIGHT,
									CAR2_START_X,CAR2_START_Y,
									CAR2_WIDTH,CAR2_HEIGHT);
  ctx.drawImage(carImage,car3currX,car3currY,CAR3_WIDTH,CAR3_HEIGHT,
																	CAR3_START_X,CAR3_START_Y,
																	CAR3_WIDTH,CAR3_HEIGHT);
	ctx.drawImage(carImage,car4currX,carr4currY,CAR4_WIDTH,CAR4_HEIGHT,
																					CAR4_START_X,CAR4_START_Y,
																					CAR4_WIDTH,CAR4_HEIGHT);
  ctx.drawImage(carImage,car5currX,car5currY,CAR5_WIDTH,CAR5_HEIGHT,
																									CAR5_START_X,CAR5_START_Y,
																									CAR5_WIDTH,CAR5_HEIGHT);
  ctx.drawImage(carImage,car6currX,car6currY,CAR6_WIDTH,CAR6_HEIGHT,
																																	CAR6_START_X,CAR6_START_Y,
																																	CAR6_WIDTH,CAR6_HEIGHT);

	//Draw Character
	ctx.drawImage(charImage,currX,currY,CHAR_WIDTH,CHAR_HEIGHT,
					CHAR_START_X,CHAR_START_Y,
					CHAR_WIDTH,CHAR_HEIGHT);



}
