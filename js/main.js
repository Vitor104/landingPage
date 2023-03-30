let imagem = document.querySelector(".imagem");
let btn = document.querySelector("button");
let param = document.querySelector(".param");

btn.addEventListener("click", trocaFoto);


function trocaFoto () {
    imagem.src = "img/coffee.jpg"
    param.innerHTML = "sou um paragraf"
}