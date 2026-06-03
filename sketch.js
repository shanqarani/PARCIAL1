let ojos = [];

const archivos = [
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/B.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/C.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/D.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/E.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/F.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/G.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/H.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/I.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/J.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/K.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/L.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/M.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/N.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/NN.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/O.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/P.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/Q.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/R.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/S.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/T.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/U.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/V.png",
  "https://raw.githubusercontent.com/shanqarani/PARCIAL1/main/W.png"
];

let frameActual = 0;
let frameObjetivo = 0;
let ultimoCambio = 0;

function preload() {
  for (let archivo of archivos) {
    ojos.push(loadImage(archivo));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
  
  frameObjetivo = floor(random(ojos.length));
  ultimoCambio = millis();
}

function draw() {
  background(0);

  let cx = width / 2;
  let cy = height / 2;

  // Cada cierto tiempo el ojo decide mirar a otro lugar
  if (millis() - ultimoCambio > random(800, 1000)) {
    frameObjetivo = floor(random(ojos.length));
    ultimoCambio = millis();
  }

  // Movimiento suave entre posiciones
  frameActual = lerp(frameActual, frameObjetivo, 0.05);

  let indice = round(frameActual);
  indice = constrain(indice, 0, ojos.length - 1);

  let img = ojos[indice];

  // Tamaño del ojo
  let escala = min(width, height) * 0.8;

  image(img, cx, cy, escala, escala);

  // Pequeñas microoscilaciones para que parezca vivo
  if (random() < 0.002) {
    frameObjetivo = floor(random(ojos.length));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}