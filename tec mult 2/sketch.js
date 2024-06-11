let mic;
let amp; //amplitud/volumen
let IMPRIMIR = true;
let AMP_MIN = 0.03; //umbral de sonido minimo que supera al ruido del fondo
let AMP_MAX = 0.2; //amplitud de sonido maximo
let silbar = false;
let haySonido = false;
let antesHabiaSonido = false;

let vid;
let vid1;
let vid2;
let vid3;
let vid4;

let video;
let video1;
let video2;
let video3;
let video4;
let video5;
let video6;
let video7;

let playing = true;
// let estado = 0;

let trazos1 = [];

function setup() {
  createCanvas (windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  userStartAudio();
//   for(let i=0; i<6; i++ ) {
//           let nombre = "data/B4/Trazo"+nf( i, 2)+".webm";
//           trazos1[i] = createVideo(nombre);
//      }

// BLUE 4
  vid = createVideo("data/B4/Trazo00.webm");
  vid1 = createVideo("data/B4/Trazo01.webm");
  vid2 = createVideo("data/B4/Trazo02.webm");
  vid3 = createVideo("data/B4/Trazo03.webm");
  vid4 = createVideo("data/B4/Trazo04.webm");


// BLUE 3
 video = createVideo("data/B3/traz00.webm");
 video1 = createVideo("data/B3/traz01.webm");
 video2 = createVideo("data/B3/traz02.webm");
 video3 = createVideo("data/B3/traz03.webm");
 video4 = createVideo("data/B3/traz04.webm");
 video5 = createVideo("data/B3/traz05.webm");
 video6 = createVideo("data/B3/traz06.webm");
 video7 = createVideo("data/B3/traz07.webm");

}

function draw() {
  background(225, 225, 192);
  amp = mic.getLevel();
  if (IMPRIMIR){
    printData();
  }
  haySonido = amp > AMP_MIN && amp < AMP_MAX;  //haySonido=true

  silbar = amp > AMP_MAX; // silbar = true

  let empezoElSonido = haySonido && !antesHabiaSonido;

  if (empezoElSonido){
  }

//   let img = trazos1[0].get();
//   let img1 = trazos1[1].get();
//   let img2 = trazos1[2].get();
//   let img3 = trazos1[3].get();
//   let img4 = trazos1[4].get();
//   image(img, 750, 370);   
//   image(img1, 750, 355) 
//   image(img2, 750, 370);
//   image (img3, 750, 350);
//   image (img4, 750, 350);
  

// BLUE 4
  let img = vid.get();
  let img1 = vid1.get();
  let img2 = vid2.get();
  let img3 = vid3.get();
  let img4 = vid4.get();
  image(img, 750, 360); 
  image(img1, 750, 355) 
  image(img2, 750, 370);
  image (img3, 750, 350);
  image (img4, 750, 350);  
  // image (img, random(width), random(height));
  // image (img1, random(width), random(height));
  // image (img2, random(width), random(height));
  // image (img3, random(width), random(height));
  // image (img4, random(width), random(height));

  // BLUE 3
  let imag = video.get();
  let imag1 = video1.get();
  let imag2 = video2.get();
  let imag3 = video3.get();
  let imag4 = video4.get();
  let imag5 = video5.get();
  let imag6 = video6.get();
  let imag7 = video7.get();
  image(imag, width/2, 200);
  image(imag1, width/2, 200);
  image(imag2, width/2, 200);
  image(imag3, width/2, 200);
  image(imag4, width/2, 200);
  image(imag5, width/2, 200);
  image(imag6, width/2, 200);
  image(imag7, width/2, 200);

  imageMode(CENTER);  
  
  
  // ------------  lineas rectas COLOR SUAVE ------------
  if (haySonido){
    // Blue 3
      video.size (200, 200);
      video1.size(200, 200);
      video2.size (200, 200);
      video5.size (200, 200);

      video.play();
      video1.play(); // desaparece
      video2.play(); // desaparece
      video5.play();
  }

  // ------------  lineas rectas COLOR OSCURO ------------
  if (silbar){
    // BLUE 3
    video3.size (200, 200);
    video4.size(200, 200);

    video3.play(); //se muestra por la mitad
    video4.play();

    // BLUE 4
    vid2.size(200, 200);

    vid.play();
    vid1.play();
    vid2.play();

  }

  antesHabiaSonido = haySonido; //guardo el estado del fotograma anterior en "antesHabiaSonido" ---> pasa a ser true
}

// function mousePressed() {
//  if (playing) {
//    vid.pause();
//  }
//   else {
//     vid.play();
//   }
//   playing = !playing;
// }

function mousePressed(){ 
    if (estado === 0){
        estado = 1;
        // vid.loop();
        vid4.size(300, 400);
        video.size (200, 200);
        video1.size(200, 200);

        vid4.play();
        video.play();
        video1.play(); // desaparece

    } else if (estado === 1){
        estado = 2;
        vid3.size(300, 430);
        video3.size (200, 200);
        
        vid3.play();
        video2.play(); //no se muestra
        video3.play(); //se muestra por la mitad

   } else if (estado === 2){
        estado = 3;  
        vid2.size(200, 200);
        video4.size(200, 200);
        video5.size (200, 200);
        
        vid2.play();
        video4.play();
        video5.play();

   } else if (estado === 3){
        estado = 4;  
        video6.size(570, 400);
        // vid1.size(200, 200);
        vid1.play();
        video6.play();
   } else if (estado === 4){
        estado = 5;  
        video7.size(550, 400)

        vid.play();
        video7.play();
}
}

function printData(){
  push();
  textSize(16);
  fill(0);
  let texto;
  texto = 'amplitud: ' + amp;
  text (texto, 20, 20);

  //bolita que salta
  // fill(0);
  // ellipse(width/2, height-amp * 1000, 30, 30);
  pop();
}






// let trazos1 = [];
// let trazos2 = [];
// let trazos3 = [];
// let trazos4 = [];
// let img;
// let estado = 0;

// function preload() {
//     img = loadImage('data/fondos/fondo.png');
//     for(let i=0; i<11; i++ ) {
//         let nombre = "data/blue1/trazo"+nf( i, 2)+".png";
//         trazos1[i] = loadImage(nombre);
//     }
//     for(let i=0; i<7; i++ ) {
//         let nombre = "data/blue2/trazo"+nf( i, 2)+".png";
//         trazos2[i] = loadImage(nombre);
//     }
//     for(let i=0; i<8; i++ ) {
//         let nombre = "data/blue3/trazo"+nf( i, 2)+".png";
//         trazos3[i] = loadImage(nombre);
//     }

//     for(let i=0; i<5; i++ ) {
//         let nombre = "data/blue4/trazo"+nf( i, 2)+".png";
//         trazos4[i] = loadImage(nombre);
//     }

// }
// function setup (){
//     createCanvas (windowWidth, windowHeight);
//     background(225, 225, 192);
//     image(img, 0, 0, windowWidth, windowHeight);
//     imageMode(CENTER);
// }

// function draw() {
// }

// function mousePressed(){ 
//     if (estado === 0){
//         estado = 1;
//         dibujoA();
//     } else if (estado === 1){
//         estado = 2;
//         dibujoA2();
//     } else if (estado === 2){
//         estado = 3;
//         background(225, 225, 192);
//         dibujoB();
//     } else if (estado === 3){
//         estado = 4;
//         dibujoB2();
//     }else if (estado === 4){
//         estado = 5;
//         background(225, 225, 192);
//         dibujoC();
//     } else if (estado === 5){
//         estado = 6;
//         dibujoC2();
//     }else if (estado === 6){
//         estado = 7;
//         background(225, 225, 192);
//         dibujoD();
//     }else if (estado === 7){
//         estado = 0;
//         dibujoD2();
//     }
// }

// function dibujoA (){
//     let x = width/2;
//     let y = height/2;
//     image(trazos1[0], x, y, 400, 604);
//     image(trazos1[1], x, y, 400, 604);
//     image(trazos1[2], x, y, 400, 604);
//     image(trazos1[3], x, y, 400, 604);
//     image(trazos1[4], x, y, 400, 604);
// }
// function dibujoA2(){
//     let x = width/2;
//     let y = height/2;
//     image(trazos1[5], x, y, 400, 604);
//     image(trazos1[6], x, y, 400, 604);
//     image(trazos1[7], x, y, 400, 604);
//     image(trazos1[8], x, y, 400, 604);
//     image(trazos1[9], x, y, 400, 604);
//     image(trazos1[10], x, y, 400, 604);
// }


// function dibujoB(){
//     let x = 100;
//     let y = 300;
//     image(trazos4[2], x, y, 400, 604);
//     image(trazos4[3], x, y, 400, 604);
//     image(trazos4[4], x, y, 400, 604);
// }
// function dibujoB2(){
//     let x = 100;
//     let y = 300;
//     image(trazos4[0], x, y, 400, 604);
//     image(trazos4[1], x, y, 400, 604);
// }


// function dibujoC (){ 
//     let x = 1200;
//     let y = 300;
//     image(trazos2[4], x, y, 500, 704);
//     image(trazos2[5], x, y, 500, 704);
//     image(trazos2[6], x, y, 500, 704);
// }
// function dibujoC2 (){ 
//     let x = 1200;
//     let y = 300;
//     image(trazos2[0], x, y, 500, 704);
//     image(trazos2[1], x, y, 500, 704);
//     image(trazos2[2], x, y, 500, 704);
//     image(trazos2[3], x, y, 500, 704);
// }



// function dibujoD (){ 
//     let x = 400;
//     let y = 450;
//     image(trazos3[0], x, y, 500, 704);
//     image(trazos3[1], x, y, 500, 704);
//     image(trazos3[2], x, y, 500, 704);
//     image(trazos3[3], x, y, 500, 704);
// }
// function dibujoD2 (){ 
//     let x = 400;
//     let y = 450;
//     image(trazos3[4], x, y, 500, 704);
//     image(trazos3[5], x, y, 500, 704);
//     image(trazos3[6], x, y, 500, 704);
//     image(trazos3[7], x, y, 500, 704);
// }