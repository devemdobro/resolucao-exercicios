let posicaoImagemAtual = 0;
const setaAvancar = document.getElementById("seta-avancar");
const setaVoltar = document.getElementById("seta-voltar");
const imagens = document.querySelectorAll(".imagem");

setaVoltar.addEventListener("click", avancarImagem);

setaAvancar.addEventListener("click", voltarImagem);

function avancarImagem() {    
  const totalImagens = imagens.length;
  console.log(imagens)
  if (posicaoImagemAtual === totalImagens) {
    return;
  }

  posicaoImagemAtual++;  

  imagens.forEach(function(imagemAtual){
      console.log(imagemAtual)
  });

}

function voltarImagem() {
  if (posicaoImagemAtual === 0) {
    return;
  }

  posicaoImagemAtual--;
}
