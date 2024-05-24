let horse;
let field;
let desert;
let snow;
let mix1;
let mix2;
let checkbox, checkbox2;
let hays;
let carrots;
let left, right, up, down;
let hay;
let carrot;

function preload(){
  mix1 = loadImage ('images/mix1.png');
  mix2 = loadImage ('images/mix3.png');
  horse = loadImage('images/horse2.png');
  field = loadImage('images/h1.jpg');
  desert = loadImage('images/h21.jpg');
  snow = loadImage('images/h10.jpg');
  hays = loadImage('images/hay.png');
  carrots = loadImage('images/Carrot.png');
}

function setup() {
  createCanvas(1200, 600);
  textAlign(CENTER);
  textFont("Courier New");
  textStyle(BOLD);
  textSize(16);

  intro();
}

function intro() {
  image(field, 0, 0, 1200, 600);
  image(horse, 250, 150, 500, 400);
  hay = createButton('Eat Hay');
  hay.position(800, 500);
  hay.size(100, 50);
	hay.mousePressed(snowing);
  carrot = createButton('Eat Carrots');
  carrot.position(950, 500);
  carrot.size(100, 50);
  carrot.mousePressed(scorching);
  image(hays, 800, 400, 100, 100);
  image(carrots, 950, 400, 100, 100);
  fill(255);
  noStroke();
  rect(175, 85, 650, 20)
  fill(0);
  text('You are a horse frolicking through a field, choose your snack', 500, 100);
}

function scorching (){
  hay.remove();
  carrot.remove();
  image(desert, 0, 0, 1200, 600);
  image(horse, 250, 150, 500, 400);
  up = createButton('Jump Up');
  up.position(200, 500);
  up.size(100, 50);
	up.mousePressed(sunmix);
  down = createButton('Sink Down');
  down.position(800, 500);
  down.size(100, 50);
	down.mousePressed(end2);
  fill(255);
  noStroke();
  rect(130, 85, 750, 20)
  fill(0);
  text('Oh no, you have been teleported to a barren desert, choose an action', 500, 100);

}

function snowing (){
  hay.remove();
  carrot.remove();
  image(snow, 0, 0, 1200, 600);
  image(horse, 250, 150, 500, 400);
  left = createButton('Go Left');
  left.position(200, 500);
  left.size(100, 50);
	left.mousePressed(snowmix);
  right = createButton('Go Right');
  right.position(800, 500);
  right.size(100, 50);
	right.mousePressed(end1);
  fill(255);
  noStroke();
  rect(175, 85, 650, 20)
  fill(0);
  text('Brrr, you have been teleported to a snowy field, pick a direction', 500, 100);
}

function snowmix (){
  left.remove();
  right.remove();
  image(mix2, 0, 0, 400, 600);
  image(mix2, 400, 0, 400, 600);
  image(mix2, 800, 0, 400, 600);
  image(horse, 250, 150, 500, 400);
  fill(255);
  noStroke();
  rect(130, 85, 750, 20)
  fill(0);
  text('You went through a portal to another dimension, find the checkbox to escape', 500, 100);
  checkbox = createCheckbox();
  checkbox.position(350, 500);
  if (checkbox.checked()){
    end3();
  }
}

function sunmix (){
  up.remove();
  down.remove();
  image(mix1, 0, 0, 400, 600);
  image(mix1, 400, 0, 400, 600);
  image(mix1, 800, 0, 400, 600);
  image(horse, 250, 150, 500, 400);
  fill(255);
  noStroke();
  rect(130, 85, 750, 20)
  fill(0);
  text('You went through a portal to another dimension, find the checkbox to escape', 500, 100);
  checkbox2 = createCheckbox();
  checkbox2.position(900, 500);
  if (checkbox2.checked()){
    end4();
  }
}

function end1() {
  image(field, 0, 0, 1200, 600);
  image(horse, 250, 150, 500, 400);
  fill(255);
  noStroke();
  rect(20, 85, 960, 20)
  fill(0);
  text('Congrats, you made it back to field, let this be a lesson not to eat whatever you see in your path', 500, 100);
  right.remove();
  left.remove();
  up.remove();
  down.remove();
}

function end2() {
  image(field, 0, 0, 1200, 600);
  image(horse, 250, 150, 500, 400);
  fill(255);
  noStroke();
  rect(20, 85, 960, 20)
  fill(0);
  text('Congrats, you made it back to field, let this be a lesson not to eat whatever you see in your path', 500, 100);
  up.remove();
  down.remove();
}

function end3(){
  image(field, 0, 0, 1200, 600);
  image(horse, 250, 150, 500, 400);
  fill(255);
  noStroke();
  rect(20, 85, 960, 20)
  fill(0);
  text('Congrats, you made it back to field, let this be a lesson not to eat whatever you see in your path', 500, 100);
  checkbox.remove();
}

function end4() {
  image(field, 0, 0, 1200, 600);
  image(horse, 250, 150, 500, 400);
  fill(255);
  noStroke();
  rect(20, 85, 960, 20)
  fill(0);
  text('Congrats, you made it back to field, let this be a lesson not to eat whatever you see in your path', 500, 100);
  checkbox2.remove();
}

