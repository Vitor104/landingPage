
let img = document.querySelector("img.photo");
let teste = document.querySelector("p.teste");

img.addEventListener("mouseover", myFunction);
img.addEventListener("mouseout", myOtherFunction);


function myFunction () {
    teste.innerHTML = "esse é um paragrafo";
};

function myOtherFunction () {
    teste.innerHTML = "paranfan";
};

