document.addEventListener("DOMContentLoaded",function() {
    console.log("teste, carregado");
    const conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = `
      <h1 id="valor">0</h1>

        <button id="reset">AC</button>
        <button id="inversao">+/-</button>
        <button id="porcentagem">%</button>
        <button id="divisao">/</button> <br>

        <button class="numero">7</button>
        <button class="numero">8</button>
        <button class="numero">9</button>
        <button id="multiplicacao">X</button> <br>
        
        <button class="numero">4</button>
        <button class="numero">5</button>
        <button class="numero">6</button>
        <button id="subtracao">-</button> <br>

        <button class="numero">1</button>
        <button class="numero">2</button>
        <button class="numero">3</button>
        <button id="soma">+</button> <br>

        <button class="numero">0</button>
        <button id="virgula">,</button>
        <button id="apresentar">=</button>
    `;
    // eventos para click dos botões de números
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
    button.addEventListener("click", () => {
        // botões de número e vírgula
        if ((button.classList.contains("numero")) || (button.id === "virgula")) { 
            adicionarValor(button.textContent);
        }
        // botões de operações
        else if (button.id === "soma") {
           selecionarOperacao("soma");
        }
        else if (button.id === "subtracao") {
            selecionarOperacao("subtracao");
        }
        else if (button.id === "divisao") {
            selecionarOperacao("divisao");
        }
        else if (button.id === "multiplicacao") {
            selecionarOperacao("multiplicacao");
        }
        else if (button.id === "porcentagem") {
            selecionarOperacao("porcentagem");
        }
        else if (button.id === "resetar") {
            resetar();
        }
        else if (button.id === "inverter") {
            inverter();
        }
        else if (button.id === "apresentar") {
            calcular();
        }    
    })});
    /*
    document.getElementById("soma").addEventListener("click", () => somar(valor));
    document.getElementById("subtracao").addEventListener("click", () => subtrair(valor));
    document.getElementById("multiplicacao").addEventListener("click", () => multiplicar(valor));
    document.getElementById("divisao").addEventListener("click", () => dividir(valor));
    document.getElementById("porcentagem").addEventListener("click", () => porcentagem(valor));
    document.getElementById("reset").addEventListener("click", () => resetar(valor));
    document.getElementById("inversao").addEventListener("click", () => inverter(valor));
    document.getElementById("inversao").addEventListener("click", () => inverter(valor));
    */
});

// variaveis
let total = 0; // valor armazenado
let valor = 0; // valor que vai calcular

// escolha do valor por botão
function adicionarValor(valorDigitado) { // parametro pego do textContent
    const tela = document.getElementById("valor");
    // se tela for 0, substituir valor
    if (tela.textContent === '0') {
        tela.textContent = valorDigitado;
    }
    // vírgula
    if (valorDigitado === ',' && tela.textContent.includes(',')) {
        return; // return para evitar repetição de vírgulas
    }
    // se ouver valor, adicionar
    tela.textContent += valorDigitado;
}
function selecionarOperacao(tipoOperacao) {
    switch(tipoOperacao) {
        case "soma":
            somar();
            break;
        case "subtracao":
            subtrair();
            break;
        case "multiplicacao":
            multiplicar();
            break;
        case "divisao":
            dividir();
            break;
    }
}

// operações aritméticas
function somar(valor) {
    return total += valor;
}
function subtrair(valor) {
    return total -= valor;
}
function multiplicar(valor) {
    return total *= valor;
}
function dividir(valor) {
    if (valor != 0) {
        return total /= valor;
    }
    else {
        alert("Não é possível dividir por 0.")
    }
}
function porcentagem(valor) {
    return total = (total * valor) / 100;
}

// operações funcioais
function resetar() { // A/C
    return total = 0;
}
function inverter() { // +/-
    return total * (-1);
}
function calcular() { // =
    // ...
}
 

