var listaObras = {};

document.querySelector("#botao-funcionalidade").addEventListener("click", function(event) { 
    event.preventDefault();
    const objetoTitulo = document.getElementById("titulo");
    const objetoTipo = document.getElementById("tipo");
    const objetoCategoria = document.getElementById("categoria");

    const textoBotao = this.querySelector("h3").textContent;
    if (textoBotao == "Cadastrar") {
        const objetoDuracao = document.getElementById("duracao");
        const objetoCartaz = document.getElementById("cartaz");

        const obra = {
            "titulo" : objetoTitulo.value,
            "tipoObra" : objetoTipo.value,
            "categoriaObra" : objetoCategoria.value,
            "duracao" : objetoDuracao.value,
            "cartaz" : objetoCartaz.getAttribute("src")

        };

        if (objetoTitulo.value == "") {
            alert("Não é possivel cadastrar obra sem título!");
        } else {
            listaObras[obra.titulo] = obra;
            alert(obra.tipoObra + " - " + obra.titulo + " - " + "cadastrado com sucesso! ");
        }

        objetoTitulo.value = "";
        objetoTipo.value = "";
        objetoCategoria.value = "";
        objetoDuracao.value = "";
        objetoCartaz.setAttribute("src", "");  
        document.getElementById("upload").value = "";
    } else {
        let textoListagem = "";
        let contador = 1;
        for (let idObra in listaObras) {
            let obra = listaObras [idObra];
            if ((contador <= 15) && ((obra.titulo == objetoTitulo.value) || (obra.tipoObra == objetoTipo.value) || (obra.categoriaObra == objetoCategoria.value))) {
                textoListagem += "<a href='#'>" + obra.titulo + "</a><br/>";
                contador += 1;
            }
        }
        areaListagem.innerHTML = textoListagem;
    }
});

const h1TextoOriginal = "Cadastro de Obra";
const h1Form = document.querySelector("#content-left form h1");
h1Form.textContent = h1TextoOriginal;
const botaoForm = document.querySelector("#botao-funcionalidade h3");
botaoForm.textContent = "Cadastrar";
const areaCartaz = document.querySelector("#area-cartaz");
areaCartaz.style.display = "block";

const h3TextoOriginal = "Pesquise uma obra";
const h3Botao = document.querySelector("#botao-pesquisa h3");
h3Botao.textContent = h3TextoOriginal;
const areaListagem = document.querySelector("#area-listagem");
areaListagem.style.display = "none";

function mostraDadosObra() {
    if(h3Botao.textContent == h3TextoOriginal) {  // Funcionalidade Pesquisa
        h1Form.textContent = h3TextoOriginal;
        h3Botao.textContent = h1TextoOriginal;
        botaoForm.textContent = "Pesquisar";
        document.querySelector("#field-duracao").style.display = "none";
        document.querySelector("#botao-pesquisa img").setAttribute("src", "images MiauNet/IconeEntrada.png");
         
        areaListagem.style.display = "block";
        areaCartaz.style.display = "none";
        let textoListagem = "";
        let contador = 1;
        for (let idObra in listaObras) {
             let obra = listaObras[idObra];
             if (contador <= 15) {
                textoListagem += "<a href='#'>" + obra.titulo + "</a><br/>";
                contador += 1;
            }
        }
        areaListagem.innerHTML = textoListagem;
    } else {  // Funcionalidade Cadastrar
        h1Form.textContent = h1TextoOriginal; 
        h3Botao.textContent = h3TextoOriginal;
        botaoForm.textContent = "Cadastrar"
        document.querySelector("#field-duracao").style.display = "block";
        document.querySelector("#botao-pesquisa img").setAttribute("src", "images MiauNet/IconePesquisa.png");
     
        areaListagem.style.display = "none";
        areaCartaz.style.display = "block";
    }
}

if (window.location.href.split("?")[1] == "pesquisa") {
    mostraDadosObra();
}

const pesquisar = document.getElementById("botao-pesquisa");
pesquisar.addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("titulo").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("duracao").value = "";
    document.getElementById("cartaz").setAttribute("src", "");
    document.getElementById("upload").value = "";

    mostraDadosObra();
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#upload").addEventListener("change", function(imagem) {
        const arquivo = imagem.target.files.item(0);
        const endereco = new FileReader();
        endereco.onloadend = function() {
            document.querySelector("#cartaz").setAttribute("src", endereco.result);
        }
        endereco.readAsDataURL(arquivo);
    });
});

document.querySelector("#area-listagem").addEventListener("click", function(event) {
    let tagClicada = event.target;
    if (tagClicada.tagName.toLowerCase() == "a") {
        let obra = listaObras[tagClicada.textContent];
        document.getElementById("titulo").value = obra.titulo;
        document.getElementById("tipo").value =obra.tipoObra;
        document.getElementById("categoria").value = obra.categoriaObra;
        document.getElementById("duracao").value = obra.duracao;
        document.getElementById("cartaz").setAttribute("src", obra.cartaz);

        mostraDadosObra();
    }
});