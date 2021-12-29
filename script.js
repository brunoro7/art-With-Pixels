/** ======= Vai receber o número do usuário mais pra frente ======= */

let tamanhoBoxPixels = 5;
const linhaBoxPixels = tamanhoBoxPixels;
const colunaBoxPixels = tamanhoBoxPixels;

/** ======= Cada Cor Da Paleta ======= */

  let pixelBlack = document.getElementsByTagName("li")[0];

  let pixelBlue = document.getElementsByTagName("li")[1];

  let pixelRed = document.getElementsByTagName("li")[2];

  let pixelGreen = document.getElementsByTagName("li")[3];
    
/** ======= Função que cria a tabela de Pixels ======= */

  for(let indexCadaColuna = 0; indexCadaColuna < colunaBoxPixels; indexCadaColuna += 1 ){

    for(let pixelInline = 0; pixelInline < linhaBoxPixels; pixelInline += 1){    
    
    let recebeCadaColuna = document.createElement("div");
      recebeCadaColuna.className = "pixel";
      document.querySelector("#pixel-board").appendChild(recebeCadaColuna);

    let recebePixelInline = document.createElement("div");
    recebePixelInline.className = "pixel";
    recebeCadaColuna.appendChild(recebePixelInline);
  };
}

/** ======= Cálculo do Tamanho do 'quadro' de pixels ======= */

  // let quantDivs = document.getElementsByTagName("div");
  // let numOfDivs = 0;
  // for(let contaDivs = 1; contaDivs <= quantDivs.length; contaDivs += 1){
  //   numOfDivs += 1;
  // }
  
  // let calcQtdDivs = numOfDivs/tamanhoBoxPixels;
  // let calcDoTamanho = (tamanhoBoxPixels * tamanhoBoxPixels);
  // if (calcQtdDivs === tamanhoBoxPixels){
  //   let boxBoardPixel = document.querySelector(".tamanhoBoardPixel");
  //   boxBoardPixel.style.width = ((calcDoTamanho*10) + "px");
  // };

/** ======= definir ======= */

// let colorSelectedAtual = colorBlack;

// function colorSelected(clickNaPaleta) {
  
  // if(clickNaPaleta === selectedAtual){
  // selectedAtual = selectedAtual;
  // }
// }
