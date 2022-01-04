/** ======= Const's e Let's importantes ======= */

const colorPalette = document.getElementById("color-palette");

const pixelBoard = document.getElementById("pixel-board");

const buttonClear = document.getElementById("clear-board");

const btnVqv = document.getElementById("generate-board");

const valorInput = document.getElementById("board-size");

/** ======= Cada Cor Da Paleta ======= */

const pixelBlack = document.getElementsByTagName("span")[0].style;
const pixelBlue = document.getElementsByTagName("span")[1].style;
const pixelRed = document.getElementsByTagName("span")[2].style;
const pixelGreen = document.getElementsByTagName("span")[3].style;

/** ======= Const do Botao e Input de tamanho do quadro ======= */

let tamanhoBoxPixels = 5;
let tamanhoBoxLinha = tamanhoBoxPixels;
let tamanhoBoxColuna = tamanhoBoxPixels;

function recebeValorInput (event){

  let recebeValor = valorInput.value;
  let valorNumInput = parseInt(recebeValor);

  if(recebeValor === ""){
    alert("Board inválido!")
  }
  if(valorNumInput <= 4){
    pixelBoard.innerHTML = "";
    tamanhoBoxPixels = 5;
    quadroPixel()
  }
  else if(valorNumInput >= 51){
    pixelBoard.innerHTML = "";
    tamanhoBoxPixels = 50;
    quadroPixel()
  }
  else {
    pixelBoard.innerHTML = "";
    tamanhoBoxPixels = valorNumInput;
    quadroPixel()
  }
}
btnVqv.addEventListener("click", recebeValorInput)

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
quadroPixel()

/** ======= Defini a classe .selected ======= */

function colorSelected (event){
  const classeSelected = document.getElementsByClassName("selected")[0];

    classeSelected.classList.remove("selected");
    //Nesse caso, no lugar do toggle poderia usar o add;
    event.target.classList.toggle("selected");
  }
colorPalette.addEventListener("click", colorSelected);

/** ======= Função Que Pinta Cada Pixel ======= */

function colorePixel (event){
    
    const pixelSelecionadoColorido = document.querySelector(".selected");

    //windown... vai fazer assim que terminar de carregar;
    const styleSelected = window.getComputedStyle(pixelSelecionadoColorido).getPropertyValue("background-color");  
    
    const pixelClicado = event.target;
  
  pixelClicado.style.backgroundColor = styleSelected;
}
pixelBoard.addEventListener("click", colorePixel);

/** ======= Função Do Button Clear ======= */

// funciona, mas não passa no teste;

function clearBoard (){

  const listaPixelBoard = document.querySelectorAll(".pixel");
  
  for(let i = 0; i < listaPixelBoard.length; i += 1){
    listaPixelBoard[i].style.backgroundColor = "white";
    console.log(listaPixelBoard[i].style.backgroundColor = "white");
  }
}
buttonClear.addEventListener("click", clearBoard);