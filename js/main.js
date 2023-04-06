
let img = document.querySelector("img.photo");
let teste = document.querySelector("p.opniao");

let img2 = document.querySelector("img.photo2");
let teste2 = document.querySelector("p.opniao2");

img.addEventListener("mouseover", myFunction);
img.addEventListener("mouseout", myOtherFunction);

img2.addEventListener("mouseover", myThirdFunction);
img2.addEventListener("mouseout", myFourthFunction);


function myFunction () {
    teste.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse natus, sapiente, reprehenderit eligendi in perferendis iste ab libero, eaque laborum excepturi assumenda.";
};

function myOtherFunction () {
    teste.innerHTML = "Veja a opnião de Layla sobre a viagem dela.";
};

function myThirdFunction () {
    teste2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse natus, sapiente!";
};

function myFourthFunction () {
    teste2.innerHTML = "Matt e sua familia passaram 5 dias com a gente. O que eles acharam?";
};