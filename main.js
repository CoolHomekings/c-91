canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_imgs=["nasa_image_1.jfif","nasa_image_2.jfif","nasa_img_3.jpg"]
random_num=Math.floor(Math.random()*3);
console.log(random_num);

//Define the width & height of the rover image.)

var rover_width=100;
var rover_height=90;

background_image = nasa_imgs[random_num];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
function add()
{
  bg_image_tag=new Image(); //defining a variable with a new image
  bg_image_tag.onload = uploadBackground; // setting a function, onloading this variable
  bg_image_tag.src=background_image; // load image


  rover_image_tag=new Image(); //defining a variable with a new image
  rover_image_tag.onload = uploadRover; // setting a function, onloading this variable
  rover_image_tag.src=rover_image; // load image
} 
	                                     
	                                     
	                                     

                                         
	                                     
	                                     

//Create "uploadBackground()" function.
  function uploadBackground()
  {
   ctx.drawImage(bg_image_tag,0,0,canvas.width,canvas.height);
  }                            
                                         

//Create "uploadrover()" function.
function uploadRover()
{
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
}

                                         //Draw image of rover


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
		
    if(keyPressed=="38")
    {
      up()
        console.log("up");
    }
    if(keyPressed=="40")
    {
      down()
      console.log("down");
    }
    if(keyPressed=="37")
    {
      left()
      console.log("left");
    }
    if(keyPressed=="39")
    {
      right()
      console.log("right");
    }

     //Write code if keypressed is down. ASCII value of "down" arrow is 40.
		




    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){
if(rover_y>=0)
{
  rover_y=rover_y-10;
  console.log("when up pressed X= "+rover_x+" ,y= "+rover_y);
  uploadBackground()
  uploadRover()
}
}
function down(){
	if(rover_y<=500)
  {
    rover_y=rover_y+10;
    console.log("when down pressed X= "+rover_x+" ,y= "+rover_y);
    uploadBackground()
    uploadRover()
  }
}
function right(){
	if(rover_x<=700)
  {
    rover_x=rover_x+10
    console.log("when right pressed X= "+rover_x+" ,y= "+rover_y);
    uploadBackground()
    uploadRover()
  }
}
function left(){
	if(rover_x>=0)
  {
    rover_x=rover_x-10
    console.log("when left pressed X= "+rover_x+" ,y= "+rover_y);
    uploadBackground()
    uploadRover()
  }
}



