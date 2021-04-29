canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


var car1_width = 130;
var car1_height = 100;
var car1_x  = 10;
var car1_y  = 10;
var background_img = "neoncar.jpg";
var car1_img = "red car.png";


var car2_width = 130;
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






