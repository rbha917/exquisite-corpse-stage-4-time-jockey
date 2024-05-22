let horse;
let field;
let desert;
let snow;
let mix1;
let mix2;
let checkbox;

function preload(){
  mix1 = loadImage ('images/mix1.png');
  mix2 = loadImage ('images/mix3.png');
  horse = loadImage('images/horse2.png');
  field = loadImage('images/h1.jpg');
  desert = loadImage('images/h21.jpg');
  snow = loadImage('images/h10.jpg');
}

function setup() {
  createCanvas(1200, 600);
  textAlign(CENTER)

}

function intro() {
  image(field, 0, 0, 1200, 600);
  image(horse, 250, 150, 500, 400);
  let hay = createButton('Eat Hay');
  hay.position(800, 500);
  hay.size(100, 50);
	hay.mousePressed(ask);
  let carrot = createButton('Eat Carrot');
  carrot.position(950, 500);
  carrot.size(100, 50);
  carrot.mousePressed(idk);
}

function draw() {
intro();

}
