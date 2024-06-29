
function preload() {

}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO)
    video.hide();

    
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("green");
    stroke("orange");
    circle(600,50,70);
    circle(600,450,70);
    circle(50,50,70);
    circle(50,450,70);
    fill("green");
    stroke("green");
    square(80,35,490,30);
    fill("red");
    stroke("red");
  square(80,430,490,30);
  square(35,50,30,400);
  square(590,50,30,400);
}

function take_snapshot(){
    save('shubh.png');
}


 