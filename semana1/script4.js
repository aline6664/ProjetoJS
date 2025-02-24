let dado = prompt("Insira a entrada de um dado qualquer: ");

if(confirm("Deseja verificar o tipo do dado informado?")) {
    // numero
    if ((!isNaN(dado) && dado.trim() !== "")) {
        let dadoNumero = Number(dado);
        document.getElementById("resultado").innerHTML = "O tipo do dado informado é number.";
    }
    // booleano
    else if (dado == "true" || dado == "false") {
        document.getElementById("resultado").innerHTML = "O tipo do dado informado é de boolean.";
    }
    // string
    else {
        document.getElementById("resultado").innerHTML = "O tipo do dado informado é string.";
    }
}
else {
    document.getElementById("resultado").innerHTML = "Obrigado por visitar esta página.";
}