// let dado = prompt("Insira a entrada de um dado qualquer: ");

document.addEventListener("DOMContentLoaded",function() {

    document.getElementById("formulario").addEventListener("submit",verificarTipo);

    function verificarTipo(evento) {
        evento.preventDefault(); // prevente da pagina recarregar apos enviar formulario
        let dado = document.getElementById("input").value.trim();
        let tipoDado;

        // numero
        if (!isNaN(dado) && dado !== '') { // converte a string em numero
            tipoDado = 'number';
        }
        // booleano
        else if (dado.toLowerCase() === "true" || dado.toLowerCase() === "false") { // toLowerCase() previne caso o usuario digite maiusculo
            tipoDado = 'boolean';
        }
        // string
        else {
            tipoDado = 'string';
        }

        if(confirm("Deseja verificar o tipo do dado informado?")) {
            document.getElementById("resultado").innerHTML = "O tipo do dado informado é "+ tipoDado +".";
        }
        else {
            document.getElementById("resultado").innerHTML = "Obrigado por visitar esta página.";
        }
    }
});