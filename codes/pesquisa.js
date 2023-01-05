ListaObras = [];

function pesquisarObra() {
    const objetoTitulo = document.getElementById("titulo");
    const objetoTipo = document.getElementById("tipo");
    const objetoCategoria = document.getElementById("categoria");

    const obra = {
        "titulo" : objetoTitulo.value,
        "tipoObra" : objetoTipo.value,
        "categoriaObra" : objetoCategoria.value,
    };
    ListaObras.push(obra);

    if (objetoTitulo.value == ("")) {
        alert("Preencha os requisitos para buscar a obra! ");
    }

    else if (objetoTipo.value == ("")) {
        alert("Preencha os requisitos para buscar a obra! ");
    }

    else if (objetoCategoria.value == ("")) {
        alert("Preencha os requisitos para buscar a obra! ");
    }

    /*else{
        alert(obra.tipoObra + " - " + obra.titulo + " - " + "encontrada com sucesso! ");
    }
}*/

    else{
        for (i = 0; i < ListaObras.length; i++){
            obras = ListaObras[i];
            if (objetoTitulo.value === obras.titulo && objetoTipo.value === obras.tipoObra && objetoCategoria.value === obras.categoriaObra){
                alert("Nome da obra: " + obras.titulo + ", Tipo da obra: "+obras.tipoObra+ ", Gênero da obra: "+obras.categoriaObra);}
            else{
                alert("A obra não foi cadastrada.")
            }
        }
    }
}