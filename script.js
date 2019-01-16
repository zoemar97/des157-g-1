console.log('reading js')

  var y= 1;
  var x= 2;

  function setup(){
    //void is function in p5
    //size is createCanvas in p5
    //create a variable to reference the Canvas
    var myCanvas = createCanvas(800,250);
    background('#16AFCB');

    //connect myCanvas to mySketch
    myCanvas.parent('mySketch');

  }
    function draw(){

      for (var x =0; x<=width; x+=40)
       {

      for (var y=0; y<=height; y+=40)
       {

       ellipse(x, y/2, 15, 15);
       fill('#FEEF63');

        }

     if ((mouseY>=-50) && (mouseY<=400) && (mouseX>=0) && (mouseX<=450)) {
       stroke(random(450));

      }}

 }
