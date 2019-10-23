var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //VIDEO
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  console.log(capture);
}

function draw() {
  background(0);

// VIDEO SIN FILTRO
  var myFeed = capture.loadPixels();
  image(myFeed, 0, 0, 640, 480);

//FILTRO 1 CUANDO SE PRESIONA <-
  if (keyIsDown(LEFT_ARROW)) {
    image(myFeed, 0, 0, 0, 640, 480);
    filter(THRESHOLD);
  }

//FILTRO 1 CUANDO SE PRESIONA ->
  if (keyIsDown(RIGHT_ARROW)) {
    image(myFeed, 0, 0, 0, 640, 480);
    filter(INVERT);
  }

//FILTRO 1 CUANDO SE PRESIONA ^
  if (keyIsDown(UP_ARROW)) {
    image(myFeed, 0, 0, 0, 640, 480);
    filter(GRAY);
  }

// TEXTO
  textFont('Arial');
  noStroke();
  fill('255');
  textSize(25);
  text('- Choose your favourite filter by pressing the Key Arrows -', 0, 500);
}
