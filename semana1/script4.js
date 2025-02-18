let dado = prompt("Insira a entrada de um dado qualquer: ");
    if(confirm("Deseja verificar o tipo do dado informado?")) {
        if(dado === 0) {
            document.write("O dado informado é um valor inteiro.");
        }
        else if(dado === 0.1) {
            document.write("O dado informado é um valor float.");
        }
        else if(dado === "") {
            document.write("O dado informado é um string.");
        }
        else {
            document.write("ok");
        }
    }
    else {
        document.write("Obrigado por visitar esta página.");
    }