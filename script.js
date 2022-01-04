/** ======= Const's e Let's importantes ======= */

const colorPalette = document.getElementById("color-palette");

const pixelBoard = document.getElementById("pixel-board");

const buttonClear = document.getElementById("clear-board");

const btnVqv = document.getElementById("generate-board");

const valorInput = document.getElementById("board-size");

/** ======= Cada Cor Da Paleta ======= */

const pixelBlack = document.getElementsByTagName("span")[0].style;

let pixelRandom1 = document.getElementById("colorRandom1").style;

let pixelRandom2 = document.getElementById("colorRandom2").style;

let pixelRandom3 = document.getElementById("colorRandom3").style;

/** ======= Função que cria cores aleatórias ======= */

let numAle1 = Math.floor(Math.random()*255);
let numAle2 = Math.floor(Math.random()*255);
let numAle3 = Math.floor(Math.random()*255);
let montandoTrio1 = [numAle1, numAle2, numAle3];
let trioNumber1 = montandoTrio1.join(", ");

let numAle4 = Math.floor(Math.random()*255);
let numAle5 = Math.floor(Math.random()*255);
let numAle6 = Math.floor(Math.random()*255);
let montandoTrio2 = [numAle4, numAle5, numAle6];
let trioNumber2 = montandoTrio2.join(", ");

let numAle7 = Math.floor(Math.random()*255);
let numAle8 = Math.floor(Math.random()*255);
let numAle9 = Math.floor(Math.random()*255);
let montandoTrio3 = [numAle7, numAle8, numAle9];
let trioNumber3 = montandoTrio3.join(", ");

console.log("trio1");
console.log(numAle1, numAle2, numAle3);
console.log(trioNumber1);

console.log("trio2");
console.log(numAle1, numAle2, numAle3);
console.log(trioNumber2);

console.log("trio3");
console.log(numAle1, numAle2, numAle3);
console.log(trioNumber3);

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

function clearBoard (){

  const listaPixelBoard = document.querySelectorAll(".pixel");
  
  for(let i = 0; i < listaPixelBoard.length; i += 1){
    listaPixelBoard[i].style.backgroundColor = "white";
    
  }
}
buttonClear.addEventListener("click", clearBoard);