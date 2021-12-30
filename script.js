/** ======= Vai receber o número do usuário mais pra frente ======= */

let tamanhoBoxPixels = 5;

/** ======= Const's e Let's importantes ======= */
 
const linhaBoxPixels = tamanhoBoxPixels;
const colunaBoxPixels = tamanhoBoxPixels;

const colorPalette = document.getElementById("color-palette");

const pixelBoard = document.getElementById("pixel-board");

const buttonClear = document.getElementById("clear-board");

/** ======= Cada Cor Da Paleta ======= */

const pixelBlack = document.getElementsByTagName("span")[0];
const pixelBlue = document.getElementsByTagName("span")[1];
const pixelRed = document.getElementsByTagName("span")[2];
const pixelGreen = document.getElementsByTagName("span")[3];

/** ======= Defini a classe .selected ======= */


// function colorSelected (event){
  
//   const listaDeCores = colorPalette.children; 

//   for( let iColorSelected of listaDeCores){
    
//     if (iColorSelected = pixelBlue){
//      pixelBlack.className = "";
//      pixelRed.className = "";
//      pixelGreen.className = "";
//     event.target.className = ".selected";
  //   if (iColorSelected = pixelRed){
  //    pixelBlack.className = "";
  //    pixelBlue.className = "";
  //    pixelGreen.className = "";
  //   event.target.className = ".selected";    
  //   if (iColorSelected = pixelGreen){
  //    pixelBlack.className = "";
  //    pixelBlue.className = "";
  //    pixelRed.className = "";
  //   event.target.className = ".selected";
  //   }
  //   else {
  //    pixelBlack.className = "selected";
  //    pixelBlue.className = "";
  //    pixelRed.className = "";
  //    pixelGreen.className = "";
  //   }
//   }
// }
// colorPalette.addEventListener("click", colorSelected);

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