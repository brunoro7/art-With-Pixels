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

/** ======= Função que cria a tabela de Pixels ======= */

function quadroPixel (){

  for(let indexCadaColuna = 0; indexCadaColuna < tamanhoBoxPixels; indexCadaColuna += 1 ){
    
    let recebeCadaColuna = document.createElement("div");
    recebeCadaColuna.className = "pixel color";
    pixelBoard.appendChild(recebeCadaColuna);

    //obs: pixelInLine poderia começar no 1, e retirar o -1 do tamanhoBoxPixels;
    for(let pixelInline = 0; pixelInline < tamanhoBoxPixels -1; pixelInline += 1){
      let recebePixelInline = document.createElement("div");
        recebePixelInline.className = "pixel color";
        pixelBoard.appendChild(recebePixelInline);
    };
  }
  // Cálculo do Tamanho do 'quadro' de pixels;
  const tamanhoPixel = 42;
  const tamanhoLinhaEmPx = tamanhoPixel*tamanhoBoxPixels;
    pixelBoard.style.width = tamanhoLinhaEmPx + "px";
}
quadroPixel();

/** ======= Defini a classe .selected ======= */

function colorSelected (event){
  const classeSelected = document.getElementsByClassName("selected")[0];

    classeSelected.classList.remove("selected");
    //Nesse caso, no lugar do toggle poderia usar o add;
    event.target.classList.toggle("selected");
  }
colorPalette.addEventListener("click", colorSelected);

/** ======= Função Que Pinta Cada Pixel ======= */

// function colorePixel (event){

//   const pixelClicado = event.target;
//   let pixelSelecionadoColorido = document.querySelector(".selected");
  
//   pixelClicado.style.backgroundColor = pixelSelecionadoColorido.style.backgroundColor;
// }
// pixelBoard.addEventListener("click", colorePixel);

/** ======= Função Do Button Clear ======= */

//funciona, mas não passa no teste;
function clearBoard (){

  const listaPixelBoard = document.querySelectorAll(".pixel");
  
  for(let i = 0; i < listaPixelBoard.length; i += 1){
    listaPixelBoard[i].style.backgroundColor = "orange";
  }
}
buttonClear.addEventListener("click", clearBoard);