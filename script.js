/** ======= Vai receber o número do usuário mais pra frente ======= */

let tamanhoBoxPixels = 5;

/** ======= Const's e Let's importantes ======= */
 
const linhaBoxPixels = tamanhoBoxPixels;
const colunaBoxPixels = tamanhoBoxPixels;

const colorPalette = document.getElementById("color-palette");

const pixelBoard = document.getElementById("pixel-board");

const buttonClear = document.getElementById("clear-board");

/** ======= Cada Cor Da Paleta ======= */

const pixelBlack = document.getElementsByTagName("span")[0].style;
const pixelBlue = document.getElementsByTagName("span")[1].style;
const pixelRed = document.getElementsByTagName("span")[2].style;
const pixelGreen = document.getElementsByTagName("span")[3].style;

/** ======= Defini a classe .selected ======= */

function colorSelected (event){
  
  const classeSelected = document.getElementsByClassName("selected")[0];

  // if(classeSelected){
    classeSelected.classList.remove("selected");
  // }
  event.target.classList.toggle("selected");
}
colorPalette.addEventListener("click", colorSelected);

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

/** ======= Função Que Pinta Cada Pixel ======= */

// function pintaCadaPixel (event){
  
//   const pintaCadaPixel = classeSelected.style;
//   event.target.

// }



/** ======= Função Do Button Clear ======= */

function clearBoard (){

  const clearBoard = pixelBoard.children;
  
  for(let i of clearBoard){
    i.style.backgroundColor = "orange";
  }
}
buttonClear.addEventListener("click", clearBoard);