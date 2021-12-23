//Trocar o elemento pelo .document necessário.
let elemento = "*";
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

/** ======= Função que cria as linhas pelo tamanhoBoxPixels ======= */
