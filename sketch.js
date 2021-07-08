var arco, flechas, fondo;
var arcoI, arrowImage, fondoI, vede, rojo, rosa, azul;
var puntaje_flechas,cargar, reiniciar;
var estado="inicio";

function preload() {
  fondoI = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  arcoI = loadImage("bow0.png");
  rojogl = loadImage("red_balloon0.png");
  verdegl = loadImage("green_balloon0.png");
  rosagl = loadImage("pink_balloon0.png");
  azulgl = loadImage("blue_balloon0.png");
  cargar = loadImage("restart.png");
  var flechas;
}

function setup() {
  createCanvas(400, 400);

  scene = createSprite(400, 400);
  scene.addImage(fondoI);
  scene.scale = 2.5;

  arco = createSprite(380, 220, 20, 50);
  arco.addImage(arcoI);
  arco.scale = 1;
  
  reiniciar=createSprite(width/2,150);
  reiniciar.addImage("otravez",cargar);
  reiniciar.scale=0.2;
  reiniciar.visible=false;
  
  grupoGRosas = new Group();
  grupoGAzul = new Group();
  grupoGVerdes = new Group();
  grupoFlecha = new Group();
  grupoGRojo = new Group();
}

function draw() {
  background("withe");

  scene.velocityX = -3;
  if (scene.x < 0) {
    scene.x = scene.width / 2;
  }

  arco.y = World.mouseY;

    globitos();
  if (keyDown("space")) {
    createFlecha();  

  puntaje();
}

  drawSprites();
}

function puntaje(){
  puntaje_flechas = puntaje_flechas+ Math.round(getFrameRate() / 80);
  text("Puntuación: " + puntaje_flechas, 25, 15)
}

function createFlecha() {
  flechas = createSprite(100, 100, 60, 10);
  flechas.addImage(arrowImage);
  flechas.x = 360;
  flechas.y = arco.y;
  flechas.velocityX = -4;
  flechas.lifetime = 100;
  flechas.scale = 0.3;
  flechas.lifetime = 250;
  grupoFlecha.add(flechas);
}

function globitos() {
  var tipo_color;
  tipo_color = Math.round(random(1, 4));
  
 if (frameCount % 100 == 0) {
    if (tipo_color == 1) {
     // rojog();
    }
  }
  if (frameCount % 50 == 0) {
    if (tipo_color == 2) {
    verdeg();
  }
  }
  if (frameCount % 50 == 0) {
    if (tipo_color == 3) {
      rosag();
    }
  }
  if (frameCount % 100 == 0) {
    if (tipo_color == 4) {
  //    azulg();
    }
  }
 
}

function rosag(){
  pink=createSprite(0, random (50 ,350));
  pink.addImage("glob",rosagl);
  pink.scale= 1;
  pink.velocityX=2;
   grupoGRosas.add(pink);
}

function verdeg(){
  verde=createSprite(0, random (50 ,350));
  verde.addImage("glob",verdegl);
  verde.scale= 0.1;
  verde.velocityX=2;
   grupoGVerdes.add(verde);
}


function rojog(){
  rojo=createSprite(0, random (50 ,350));
  rojo.addImage("glob",rojogl);
  rojo.scale= 0.1;
  rojo.velocityX=2;
   grupoGRojo.add(rojo);
}

function azulg(){
  azul=createSprite(0, random (50 ,350));
  azul.addImage("glob",azull);
  azul.scale= 0.1;
  azul.velocityX=2;
  grupoGAzul.add(azul);
}