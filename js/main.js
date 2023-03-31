let imagem = document.querySelector(".imagem");
let btn = document.querySelector("button");
let param = document.querySelector(".param");

btn.addEventListener("click", trocaFoto);
imagem.addEventListener("mouseout", inicio);




function trocaFoto () {
    imagem.src = "img/mulhercafe.jpg"
    param.innerHTML = "- Sed mollitia excepturi incidunt quia, modi molestias voluptas ut! Officia officiis, cum dolorum ad quo, voluptate vero."
}

function inicio() {
    imagem.src = "img/imagemcafe.jpg"
    param.innerHTML = "- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed mollitia excepturi incidunt quia, modi molestias voluptas ut! Officia officiis, cum dolorum ad quo, voluptate vero, quasi veniam dignissimos reiciendis suscipit."
}





