var box1,box2
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(100,125,25,25,4,5)
  box2= new Box(350,200,25,25,-3,-7)
}

function draw() 
{
  background(220);
  
  box1.move();
  box1.show();

  box2.move();
  box2.show();
  
}

