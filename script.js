let verifica1, verifica2, verifica3, verifica4; //variáveis que indicarão se existe um elemento selecionado em cada seção.



//Função que seleciona os pratos
function seleciona_prato(elemento) {
    let elemts = document.querySelectorAll(".prato");
    elemento.classList.toggle("borda");
    elemento.classList.toggle("escondido");
    if (elemts[0] === elemento) {
        elemts[1].classList.remove("borda");
        elemts[2].classList.remove("borda");
        elemts[1].classList.remove("escondido");
        elemts[2].classList.remove("escondido");
    } else if (elemts[1] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[2].classList.remove("borda");
        elemts[0].classList.remove("escondido");
        elemts[2].classList.remove("escondido");
    } else if (elemts[2] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[1].classList.remove("borda");
        elemts[0].classList.remove("escondido");
        elemts[1].classList.remove("escondido");
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


//Função que seleciona as bebidas
function seleciona_bebida(elemento) {
    let elemts = document.querySelectorAll(".bebida");
    elemento.classList.toggle("borda");
    elemento.classList.toggle("escondido");
    if (elemts[0] === elemento) {
        elemts[1].classList.remove("borda");
        elemts[2].classList.remove("borda");
        elemts[1].classList.remove("escondido");
        elemts[2].classList.remove("escondido");
    } else if (elemts[1] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[2].classList.remove("borda");
        elemts[0].classList.remove("escondido");
        elemts[2].classList.remove("escondido");
    } else if (elemts[2] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[1].classList.remove("borda");
        elemts[0].classList.remove("escondido");
        elemts[1].classList.remove("escondido");
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


//Função que seleciona a sobremesa
function seleciona_sobremesa(elemento) {
    let elemts = document.querySelectorAll(".sobremesa");
    elemento.classList.toggle("borda");
    elemento.classList.toggle("escondido");
    if (elemts[0] === elemento) {
        elemts[1].classList.remove("borda");
        elemts[2].classList.remove("borda");
        elemts[1].classList.remove("escondido");
        elemts[2].classList.remove("escondido");
    } else if (elemts[1] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[2].classList.remove("borda");
        elemts[0].classList.remove("escondido");
        elemts[2].classList.remove("escondido");
    } else if (elemts[2] === elemento) {
        elemts[0].classList.remove("borda");
        elemts[1].classList.remove("borda");
        elemts[0].classList.remove("escondido");
        elemts[1].classList.remove("escondido");
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

//Função que verifica se existe um elemento de cada seção selecionado e muda o botão para finalizar o pedido.
function verificacao(){
    let faz_algo;
    let exclui_linha;
    if(verifica1 && verifica2 && verifica3){
        faz_algo = document.querySelector(".primeiro");
        faz_algo.innerHTML = "Fechar pedido";
        
        exclui_linha = document.querySelector(".segundo");
        exclui_linha.innerHTML = "";

        document.getElementById("botao").style.backgroundColor = "#32B72F";
        verifica4 = true;
        return verifica4;
    } else{
        faz_algo = document.querySelector(".primeiro");
        faz_algo.innerHTML = "Selecione os 3 itens";

        exclui_linha = document.querySelector(".segundo");
        exclui_linha.innerHTML = "para fechar o pedido";

        document.getElementById("botao").style.backgroundColor = "#CBCBCB";

        verifica4 = false;
        return verifica4;
    }

}

function confirmacao(){
    let elemento = document.querySelector(".acontece");
    if(verificacao){
        elemento.classList.remove("esconde");

    }
}

//Envia uma mensagem para o Whatsapp confirmando o pedido
function confirmar(){
    let numberObj = 27.70;
    let nome = prompt("Qual é o seu nome?");
    let endereco = prompt("Informe seu endereço");
    let mensagem = "Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$" + numberObj.toFixed(2) + "\n\nNome: "+ nome + "\nEndereço: " + endereco;
    if(verificacao()){
        mensagem = window.encodeURIComponent(mensagem);
        window.open("https://wa.me/556692086386" + "?text=" + mensagem, "_blank");
    }
}

function cancela(){
    let elemento = document.querySelector(".acontece");
    elemento.classList.add("esconde");
}