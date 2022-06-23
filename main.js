img = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("" , 40 ,79);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 360);
    
}