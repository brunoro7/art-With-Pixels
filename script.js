let tamanhoBoxPixels = 5;
// let boxBoardPixel = document.querySelector(".tamanhoBoardPixel");
//      boxBoardPixel.style.width = ;
//      boxBoardPixel.style.heigth = ;

/** ======= Colorindo a paleta de cores ======= */

  let pixelBlack = document.querySelector("li.color.first");
    pixelBlack.className = "pixel color selectBlack";

  let pixelBlue = document.querySelector("li.color.second");
    pixelBlue.className = "pixel color selectBlue";

  let pixelRed = document.querySelector("li.color.third");
    pixelRed.className = "pixel color selectRed";

  let pixelGreen = document.querySelector("li.color.four");
    pixelGreen.className = "pixel color selectGreen";

    
/** ======= Função que cria a tabela de Pixels ======= */


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