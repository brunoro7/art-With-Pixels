/** ======= Const's e Let's importantes ======= */
const pixelBoard = document.getElementById("pixel-board");

/** ======= Vai receber o número do usuário mais pra frente ======= */

let tamanhoBoxPixels = 5;

const linhaBoxPixels = tamanhoBoxPixels;
const colunaBoxPixels = tamanhoBoxPixels;

/** ======= Cada Cor Da Paleta ======= */

const pixelBlack = document.getElementsByTagName("li")[0];

const pixelBlue = document.getElementsByTagName("li")[1];

const pixelRed = document.getElementsByTagName("li")[2];

const pixelGreen = document.getElementsByTagName("li")[3];

/** ======= Função que cria a tabela de Pixels ======= */
function QuadroPixel (){

  for(let indexCadaColuna = 0; indexCadaColuna < tamanhoBoxPixels; indexCadaColuna += 1 ){
    
    for(let pixelInline = 0; pixelInline < tamanhoBoxPixels; pixelInline += 1){    
      
      let recebeCadaColuna = document.createElement("div");
      recebeCadaColuna.className = "pixel";
      pixelBoard.appendChild(recebeCadaColuna);
      
      let recebePixelInline = document.createElement("div");
      recebePixelInline.className = "pixel";
      pixelBoard.appendChild(recebePixelInline);
    };
  }
/** ======= Cálculo do Tamanho do 'quadro' de pixels ======= */
  const tamanhoPixel = 42;
  const tamanhoLinhaEmPx = tamanhoPixel*tamanhoBoxPixels;
    pixelBoard.style.width = tamanhoLinhaEmPx + "px";
}
QuadroPixel()


/** ======= definir ======= */

// let colorSelectedAtual = colorBlack;

// function colorSelected(clickNaPaleta) {
  
  // if(clickNaPaleta === selectedAtual){
  // selectedAtual = selectedAtual;
  // }
// }
