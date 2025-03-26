document.addEventListener("DOMContentLoaded",function() {
    console.log("Javascript carregado");
    const conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = `
        <div id="calculadora">
            <div id="valor">0</div>
            <div id="botoes">
                <button id="all-clean">AC</button>
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

                <button class="numero" id="zero">0</button>
                <button id="virgula">,</button>
                <button id="igual">=</button>
            </div>
        </div>
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
            selecionarOperacao("soma", "+");
            }
            else if (button.id === "subtracao") {
                selecionarOperacao("subtracao", "-");
            }
            else if (button.id === "divisao") {
                selecionarOperacao("divisao","/");
            }
            else if (button.id === "multiplicacao") {
                selecionarOperacao("multiplicacao","x");
            }
            else if (button.id === "porcentagem") {
                selecionarOperacao("porcentagem","%");
            }
            else if (button.id === "all-clean") {
                limpar();
            }
            else if (button.id === "inversao") {
                inverter();
            }
            else if (button.id === "igual") {
                calcular();
            }
        });
    });
});

// variaveis
let num1 = 0; // valor armazenado previo
let num2 = 0; // valor atual do input
let operacao = null; // operação atual

// escolha do valor por botão
function adicionarValor(valorDigitado) { // parametro pego do textContent
    num2 = 0; // reseta o valor do input
    console.log("num2 ao entrar no adicionarValor: " + num2)
    const tela = document.getElementById("valor");
    // se tela for 0, substituir valor
    if (tela.textContent === '0') {
        tela.textContent = valorDigitado;
    }
    else {
        // se a tela já tem valor, adicionar o novo valor
        tela.textContent += valorDigitado;
    }
    // vírgula
    if (valorDigitado === ',' && tela.textContent.includes(',')) {
        return; // return para evitar repetição de vírgulas
    }
    num2 = parseFloat(tela.textContent.replace(',', '.')); // atualiza o valor com a vírgula substituída por ponto
    console.log("num1: " + num1);
    console.log("num2: " + num2);
}

// escolha do tipo de operação
function selecionarOperacao(tipoOperacao,simboloOp) {
    // se já houver operação anterior, realiza o cálculo
    if (operacao !== null) {
        calcular();
    }
    const tela = document.getElementById("valor");
    console.log("num1 antes do input " + num1);
    num1 = parseFloat(tela.textContent.replace(',', '.'));  // armazena o valor atual antes de calcular
    console.log("num1 recebeu o valor do input? " + num1);
    console.log("valor do num2: " + num2)

    operacao = tipoOperacao; // define qual operação foi selecionada
    num2 = 0; // reseta o valor do input
    console.log("num2 foi resetado?  " + num2);

    tela.textContent += " " + simboloOp + " "; // mostra na tela o simbolo de operação
    console.log("operação selecionada: " + tipoOperacao);
}

// operações aritméticas
function somar() {
    console.log("soma de " + num1 + " + " + num2  + " realizada");
    num1 += num2;
}
function subtrair() {
    console.log("subtração de " + num1 + " + " + num2  + " realizada");
    num1 -= num2;
}
function multiplicar() {
    console.log("multiplicação de " + num1 + " + " + num2  + " realizada");
    num1 *= num2;
}
function dividir() {
    console.log("divisão de " + num1 + " + " + num2  + " realizada");
    if (num2 != 0) {
        num1 /= num2;
    }
    else {
        alert("Não é possível dividir por 0.")
    }
}
function porcentagem() {
    num1 = (num1 * num2) / 100;
    console.log("porcentagem realizada")
}

// operações funcionais
function limpar() { // A/C
    num1 = 0;
    num2 = 0;
    operacao = null;
    const tela = document.getElementById("valor");
    tela.textContent = '0';
}
function inverter() { // +/- 
    num1 *= (-1);
    const tela = document.getElementById("valor");
    tela.textContent = num1;
}

function calcular() { // =
    switch (operacao) {
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
        case "porcentagem":
            porcentagem();
            break;
        default:
            break;
    }
    const tela = document.getElementById("valor");
    tela.textContent = num1;  // mostra o resultado na tela
    console.log("Resultado final: " + num1); // Debugging
    num2 = 0;
    operacao = null;  // reseta a operação para o próximo cálculo
}