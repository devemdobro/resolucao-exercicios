const imagens = document.querySelectorAll(".imagem");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");
let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
  if (imagemAtual !== imagens.length - 1) {
    imagemAtual++;
  }   
  
  esconderImagens();
  mostrarImagem();
  mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual !== 0) {
    imagemAtual--;
  }

  esconderImagens();
  mostrarImagem();
  mostrarOuEsconderSetas();
});

function esconderImagens() {
  imagens.forEach((imagemAtual) => {
    imagemAtual.classList.remove("mostrar");
  });
}

function mostrarImagem() {
  imagens[imagemAtual].classList.add("mostrar");
}

function mostrarOuEsconderSetas(){
    //ver se a imagem atual é dirente de 0, se sim pode habilitar a seta de voltar
    if(imagemAtual !== 0){
        setaVoltar.classList.remove("opacidade");
    }
    //se a imagem atual for igual a 0, se sim desabilita a seta de voltar
    else if(imagemAtual === 0){
        setaVoltar.classList.add("opacidade");
    }

    //ver se a imagem atual é igual ao tamanho do array total de imagens, se sim pode esconder a seta de avancar
    if(imagemAtual !== 0 && imagemAtual === imagens.length - 1){
        setaAvancar.classList.add("opacidade");
    }
    //se a imagem atual for diferente do tamanho do array total de imagens, habilito a seta de avancar
    else if(imagemAtual !== imagemAtual.length -1){
        setaAvancar.classList.remove("opacidade");
    }    
}