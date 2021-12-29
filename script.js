/** ======= Vai receber o número do usuário mais pra frente ======= */

let tamanhoBoxPixels = 5;

/** ======= Const's e Let's importantes ======= */
 
const linhaBoxPixels = tamanhoBoxPixels;
const colunaBoxPixels = tamanhoBoxPixels;

const pixelBoard = document.getElementById("pixel-board");

const buttonClear = document.getElementById("clear-board");

/** ======= Cada Cor Da Paleta ======= */

const pixelBlack = document.getElementsByTagName("li")[0];
const pixelBlue = document.getElementsByTagName("li")[1];
const pixelRed = document.getElementsByTagName("li")[2];
const pixelGreen = document.getElementsByTagName("li")[3];

/** ======= Defini a classe .selected ======= */

// let colorSelectedAtual = colorBlack;

// function colorSelected(clickNaPaleta) {
  
  // if(clickNaPaleta === selectedAtual){
  // selectedAtual = selectedAtual;
  // }
// }

/** ======= Função que cria a tabela de Pixels ======= */

function quadroPixel (){

  for(let indexCadaColuna = 0; indexCadaColuna < tamanhoBoxPixels; indexCadaColuna += 1 ){
    
    let recebeCadaColuna = document.createElement("div");
    recebeCadaColuna.className = "pixel";
    pixelBoard.appendChild(recebeCadaColuna);

    //obs: pixelInLine poderia começar no 1, e retirar o -1 do tamanhoBoxPixels;
    for(let pixelInline = 0; pixelInline < tamanhoBoxPixels -1; pixelInline += 1){
      let recebePixelInline = document.createElement("div");
        recebePixelInline.className = "pixel";
        pixelBoard.appendChild(recebePixelInline);
    };
  }
  // Cálculo do Tamanho do 'quadro' de pixels;
  const tamanhoPixel = 42;
  const tamanhoLinhaEmPx = tamanhoPixel*tamanhoBoxPixels;
    pixelBoard.style.width = tamanhoLinhaEmPx + "px";
}
quadroPixel();

/** ======= Função Do Button Clear ======= */

function clearBoard (){

  const clearBoard = pixelBoard.children;
  
  for(let i of clearBoard){
    i.style.backgroundColor = "orange";
  }
}
buttonClear.addEventListener("click", clearBoard);