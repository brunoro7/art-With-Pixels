//Trocar o elemento pelo .document necessário.
let elemento = document.getElementsByClassName("pixel");
let cadaPixel = elemento;

/** ======= Função que cria a linha com os Pixels ======= */
let tamanhoBoxPixels = 5;
function linhaBoxPixels (tamanhoBoxPixels){
  
  let cadaLinha = "";
  for (let iLinha = 0; iLinha < tamanhoBoxPixels; iLinha += 1){
    cadaLinha = cadaLinha + cadaPixel;
  }
  return cadaLinha
}
console.log(linhaBoxPixels(tamanhoBoxPixels));

/** ======= Função que imprimi a quantidade de linhas ======= */

/** ======= Função que defini a cor preta como inicial 'selected' ======= */

/** ======= Função que escolhe a cor ======= */

/** ======= Função que pinta ======= */

/** ======= Função que reseta o quadro para branco ======= */

/** ======= Função que defini o tamanho do quadro de 5 à 50 ======= */

/** ======= Função que escolhe a cor ======= */

/** ======= Função que escolhe cores aleatorias no carregamento ======= */

console.log(cadaLinha);