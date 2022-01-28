let verifica1, verifica2, verifica3;


function seleciona_prato(elemento) {
    let elemts = document.querySelectorAll(".prato");
    elemento.classList.toggle("borda");
    if (elemts[0] === elemento) {
        elemts[1].classList.remove("borda");
        elemts[2].classList.remove("borda");
    } else if (elemts[1] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[2].classList.remove("borda");
    } else if (elemts[2] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[1].classList.remove("borda");
    }

    for(let i = 0; i < elemts.length; i++){
        if(elemts[i].classList.contains("borda")){
            verifica1 = true;
            break;
        }else{
            verifica1 = false;
        }
    }

    verificacao();
} 

function seleciona_bebida(elemento) {
    let elemts = document.querySelectorAll(".bebida");
    elemento.classList.toggle("borda");
    if (elemts[0] === elemento) {
        elemts[1].classList.remove("borda");
        elemts[2].classList.remove("borda");
    } else if (elemts[1] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[2].classList.remove("borda");
    } else if (elemts[2] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[1].classList.remove("borda");
    } 

    for(let i = 0; i < elemts.length; i++){
        if(elemts[i].classList.contains("borda")){
            verifica2 = true;
            break;
        }else{
            verifica2 = false;
        }
    }

    verificacao();
}

function seleciona_sobremesa(elemento) {
    let elemts = document.querySelectorAll(".sobremesa");
    elemento.classList.toggle("borda");
    if (elemts[0] === elemento) {
        elemts[1].classList.remove("borda");
        elemts[2].classList.remove("borda");
    } else if (elemts[1] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[2].classList.remove("borda");
    } else if (elemts[2] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[1].classList.remove("borda");
    }

    for(let i = 0; i < elemts.length; i++){
        if(elemts[i].classList.contains("borda")){
            verifica3 = true;
            break;
        }else{
            verifica3 = false;
        }
    }


    verificacao();
}

function verificacao(){
    let faz_algo;
    let exclui_linha;
    if(verifica1 && verifica2 && verifica3){
        faz_algo = document.querySelector(".primeiro");
        faz_algo.innerHTML = "Fechar pedido";

        exclui_linha = document.querySelector(".segundo");
        exclui_linha.innerHTML = "";
    } else{
        faz_algo = document.querySelector(".primeiro");
        faz_algo.innerHTML = "Selecione os 3 itens";

        exclui_linha = document.querySelector(".segundo");
        exclui_linha.innerHTML = "para fechar o pedido";
    }
}
