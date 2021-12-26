let tamanhoBoxPixels = 5;

/** ======= Colorindo a paleta de cores ======= */

  let pixelBlack = document.querySelector("li.first");
    pixelBlack.className = "pixel selectBlack";

  let pixelBlue = document.querySelector("li.second");
    pixelBlue.className = "pixel selectBlue";

  let pixelRed = document.querySelector("li.third");
    pixelRed.className = "pixel selectRed";

  let pixelGreen = document.querySelector("li.four");
    pixelGreen.className = "pixel selectGreen";

    
/** ======= Função que cria a linha com os Pixels ======= */

for(let pixelInline = 0; pixelInline < tamanhoBoxPixels; pixelInline += 1){
  let recebeCadaPixel = document.createElement("div");
  recebeCadaPixel.className = "pixel";
  document.querySelector("#pixel-board").appendChild(recebeCadaPixel);

  for(let indexCadaLinha = 0; indexCadaLinha < tamanhoBoxPixels-1; indexCadaLinha += 1 ){
    let recebeCadaLine = document.createElement("div");
    recebeCadaLine.className = "pixel";
    document.querySelector("#pixel-board").appendChild(recebeCadaLine);
  };
}
    console.log(recebeCadaLine);




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