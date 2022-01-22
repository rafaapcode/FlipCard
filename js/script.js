// Div que será responsável por rodar os 2 tenis
let produt_box = document.getElementById("produtoBox");
let frontImg = document.getElementById("frontImg");
let backImg = document.getElementById("backImg");


//Pegando o Primeiro tenis
let img = document.querySelector("#img1");

img.addEventListener("click", () => {
    //Rodando a DIV
    produt_box.style.transform = "rotateY(180deg)";
    frontImg.style.left = "650px";
    backImg.style.left = "20px";
    frontImg.style.transform = "rotate(-30deg)";
    backImg.style.transform = "rotate(0deg)";
})

//Pegando o segundo tenis
let img2 = document.querySelector("#img2");

img2.addEventListener("click", () => {
    //Rodando a DIV
    produt_box.style.transform = "rotateY(0deg)";
    frontImg.style.left = "20px";
    backImg.style.left = "-650px";
    frontImg.style.transform = "rotate(0deg)";
    backImg.style.transform = "rotate(-30deg)";
})

