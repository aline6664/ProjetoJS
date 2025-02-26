document.getElementById("formulario").addEventListener("submit",inserirLista);

let array = [];
function inserirLista(evento) {
    evento.preventDefault();
    let valor = document.getElementById("input").value.toLowerCase(); // letras maiúsculos afetam a ordem
    array.push(valor);
    array.sort();
    document.getElementById("teste").innerHTML = array;
    
    document.getElementById("resultadoLista").innerHTML = " "; // resetar lista antes de atualizar

    for (let i of array) {
        var linha = document.createElement("li");
        var conteudo = document.createTextNode(i);
        linha.appendChild(conteudo);
        document.getElementById("resultadoLista").appendChild(linha);
    }
}