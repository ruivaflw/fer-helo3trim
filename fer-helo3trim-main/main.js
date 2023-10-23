function tocaSomNatureza1(){
    document.querySelector("#som_tecla_natureza1").play();
}
const listadeTeclas = document.querySelectorAll(".tecla");

listadeTeclas[0].onclick = tocaSomNatureza1;