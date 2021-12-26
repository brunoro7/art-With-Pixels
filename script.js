let tamanhoBoxPixels = 5;

/** ======= Colorindo a paleta de cores ======= */

  let pixelBlack = document.querySelector(".selectBlack");
  pixelBlack.style.backgroundColor = "black";

  let pixelBlue = document.querySelector(".selectBlue");
  pixelBlue.style.backgroundColor = "blue";

  let pixelRed = document.querySelector(".selectRed");
  pixelRed.style.backgroundColor = "red";

  let pixelGreen = document.querySelector(".selectGreen");
  pixelGreen.style.backgroundColor = "green";


// let boxPixels = document.;
let cadaPixel = document.querySelector(".pixel");

/** ======= Função que cria a linha com os Pixels ======= */

for(let pixelInline = 0; pixelInline < tamanhoBoxPixels; pixelInline += 1){
  let recebeCadaPixel = document.createElement("div");
  recebeCadaPixel.className = "pixel";
  document.querySelector("#pixelOnLine").appendChild(recebeCadaPixel);    
  
};

// let cadaLine = document.querySelector("section#pixelOnLine");
// for(let lineOfPixel of lineOfPixel){

//   let recebeCadaLine = document.createElement("div");
//     document.querySelector("#lineOfPixel").appendChild(recebeCadaLine);
    
// }






  /** ======= Função que imprimi a quantidade de linhas ======= */

/** ======= Função que defini a cor preta como inicial 'selected' ======= */

/** ======= Função que escolhe a cor ======= */

/** ======= Função que pinta ======= */

/** ======= Função que reseta o quadro para branco ======= */

/** ======= Função que defini o tamanho do quadro de 5 à 50 ======= */

/** ======= Função que escolhe a cor ======= */

/** ======= Função que escolhe cores aleatorias no carregamento ======= */