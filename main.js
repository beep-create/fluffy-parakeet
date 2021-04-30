canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


var car1_width = 120;
var car1_height = 100;
var car1_x  = 10;
var car1_y  = 10;
var background_img = "neoncar.jpg";
var car1_img = "red car.png";


var car2_width = 120;
var car2_height = 100;
var car2_x  = 10;
var car2_y  = 100;
var car2_img = "blue car.png";

function add() {
    background_img_tag = new Image();
    car1_img_tag = new Image();
    background_img_tag.onload = uploadbackground();
    car1_img_tag.onload = uploadcar1();
    background_img_tag.src = background_img;    
    car1_img_tag.src = car1_img;

    car2_img_tag = new Image();
    car2_img_tag.onload = uploadcar2();
    car2_img_tag.src = car2_img;
}


function uploadbackground() {
    
ctx.drawImage(background_img_tag, 0,0,canvas.width, canvas.height);

}


function uploadcar1() {
    console.log("hi")
 ctx.drawImage(car1_img_tag, car1_x, car1_y, car1_width, car1_height);

}



function uploadcar2() {
    console.log("hello")
 ctx.drawImage(car2_img_tag, car2_x, car2_y,car2_width, car2_height);
}


window.addEventListener("keydown",my_keydown);
  
function my_keydown(e) {
keypressed=e.keyCode;
    if (keypressed == '38')
    {
        car1_up();
        console.log("up");
    }

    if (keypressed == '40')
     {
        car1_down();
       console.log("down");
     }

    if (keypressed == '37')
    {
       car1_left();
       console.log("left");
    }

    if (keypressed == '39')
    {
     car1_right();
     console.log("right");
    }



    if (keypressed == '87')
    {
        car2_up();
        console.log("w");
    }

    if (keypressed == '83')
     {
        car2_down();
       console.log("s");
     }

    if (keypressed == '65')
    {
       car2_left();
       console.log("a");
    }

    if (keypressed == '68')
    {
     car2_right();
     console.log("d");
    }

}

function car1_up()
{
	if(car1_y >=0)
	{
		car1_y = car1_y - 10;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		 uploadbackground();
		 uploadcar1();
         uploadcar2()
	}
}
function car1_down()
{
	if(car1_y <=500)
	{
		car1_y =car1_y+ 10;
		console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadbackground();
		 uploadcar1();
         uploadcar2()
	}
}
function car1_left()
{
	if(car1_x >= 0)
	{
		car1_x =car1_x - 10;
		console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadbackground();
		 uploadcar1();
         uploadcar2()
    }
}
function car1_right()
{
	if(car1_x <= 700)
	{
		car1_x =car1_x + 10;
		console.log("When right arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadbackground();
		 uploadcar1();
         uploadcar2()
   }
}



function car2_up()
{
	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		console.log("When w key is pressed,  x = " + car2_x + " | y = " +car2_y);
		 uploadbackground();
		 uploadcar1();
         uploadcar2()
	}
}
function car2_down()
{
	if(car2_y <=500)
	{
		car2_y =car2_y+ 10;
		console.log("When s key is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadbackground();
		 uploadcar1();
         uploadcar2()
	}
}
function car2_left()
{
	if(car2_x >= 0)
	{
		car2_x =car2_x - 10;
		console.log("When a key is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadbackground();
		 uploadcar1();
         uploadcar2()
    }
}
function car2_right()
{
	if(car2_x <= 700)
	{
		car2_x =car2_x + 10;
		console.log("When d key is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadbackground();
		 uploadcar1();
         uploadcar2()
   }
}




	if(car1_x > 700)
	{ console.log("car1 won");
    document.getElementById('game_status').innerHTML = "Car 1 Won!"

    }


    
