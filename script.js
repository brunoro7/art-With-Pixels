/** ======= Vai receber o número do usuário mais pra frente ======= */

let tamanhoBoxPixels = 5;

/** ======= Colorindo a paleta de cores ======= */

  let pixelBlack = document.querySelector("li.color.first");
    pixelBlack.className = "pixel color first";

  let pixelBlue = document.querySelector("li.color.second");
    pixelBlue.className = "pixel color second";

  let pixelRed = document.querySelector("li.color.third");
    pixelRed.className = "pixel color third";

  let pixelGreen = document.querySelector("li.color.four");
    pixelGreen.className = "pixel color four";
    
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

/** ======= Cálculo do Tamanho do 'quadro' de pixels ======= */

  let quantDivs = document.getElementsByTagName("div");
  let numOfDivs = 0;
  for(let contaDivs = 1; contaDivs <= quantDivs.length; contaDivs += 1){
    numOfDivs += 1;
  }
  
  let calcQtdDivs = numOfDivs/tamanhoBoxPixels;
  let calcDoTamanho = (tamanhoBoxPixels * tamanhoBoxPixels);
  if (calcQtdDivs === tamanhoBoxPixels){
    let boxBoardPixel = document.querySelector(".tamanhoBoardPixel");
    boxBoardPixel.style.width = ((calcDoTamanho*10) + "px");
  };

/** ======= definir ======= */

// let colorSelectedAtual = colorBlack;

// function colorSelected(clickNaPaleta) {
  
  // if(clickNaPaleta === selectedAtual){
  // selectedAtual = selectedAtual;
  // }
// }