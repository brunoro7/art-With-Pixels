let tamanhoBoxPixels = 5;

// let boxPixels = document.;
let cadaPixel = document.querySelector(".pixel");

/** ======= Função que cria a linha com os Pixels ======= */

let cadaLine = document.getElementById("pixelOnLine");
for(let pixelInline = 0; pixelInline < tamanhoBoxPixels; pixelInline += 1){
  let recebeCadaPixel = document.createElement("div");
  recebeCadaPixel.className = "pixel";
  document.querySelector("#pixelOnLine").appendChild(recebeCadaPixel);
  for(let lineOfPixel = 0; lineOfPixel < tamanhoBoxPixels; lineOfPixel += 1){
    let recebeCadaLine = document.createElement("div");

    // recebeCadaLine.className = "linePixel";

    document.querySelector("#lineOfPixel").appendChild(recebeCadaLine);
    };
};






  /** ======= Função que imprimi a quantidade de linhas ======= */

/** ======= Função que defini a cor preta como inicial 'selected' ======= */

/** ======= Função que escolhe a cor ======= */

/** ======= Função que pinta ======= */

/** ======= Função que reseta o quadro para branco ======= */

/** ======= Função que defini o tamanho do quadro de 5 à 50 ======= */

/** ======= Função que escolhe a cor ======= */

/** ======= Função que escolhe cores aleatorias no carregamento ======= */