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
                porcentagem();
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
    const tela = document.getElementById("valor");
    
    // evitar repetição de vírgulas (este if precisa ser antes)
    if (valorDigitado === ',' && tela.textContent.includes(',')) {
        return;
    }

    // se a tela for 0 e adicionar vírgula
    if (tela.textContent === '0' && valorDigitado === ',') {
        tela.textContent = '0,';
    }
    // se tela for 0, substituir valor
    else if (tela.textContent === '0' || tela.textContent.includes('+') || tela.textContent.includes('-') || 
        tela.textContent.includes('x') || tela.textContent.includes('/')) {
        tela.textContent = valorDigitado;
    }
    else {
        // se a tela já tem valor, adicionar o novo valor
        tela.textContent += valorDigitado;
    }

    num2 = parseFloat(tela.textContent.replace(',', '.')); // atualiza o valor com a vírgula substituída por ponto
    console.log("Valor atual de num1: " + num1);
    console.log("Valor atual de num2: " + num2);
}

// escolha do tipo de operação
function selecionarOperacao(tipoOperacao,simboloOp) {
    const tela = document.getElementById("valor");
    // se já houver operação anterior, realiza o cálculo
    if (operacao !== null) {
        calcular();
    }
    else {
        num1 = parseFloat(tela.textContent.replace(',', '.'));  // num1 recebe o valor da tela se for primeiro valor da operação
    }

    operacao = tipoOperacao; // define qual operação foi selecionada
    tela.textContent += " " + simboloOp + " "; // mostra na tela o simbolo de operação
    num2 = 0; // reseta o valor do input
}

// operações aritméticas
function somar() {
    console.log("Soma de " + num1 + " + " + num2  + " realizada.");
    num1 += num2;
}
function subtrair() {
    num1 -= num2;
    console.log("Subtração de " + num1 + " - " + num2  + " realizada.");
}
function multiplicar() {
    num1 *= num2;
    console.log("Multiplicação de " + num1 + " x " + num2  + " realizada.");
}
function dividir() {
    if (num2 != 0) {
        num1 /= num2;
        console.log("Divisão de " + num1 + " / " + num2  + " realizada.");

    }
    else {
        alert("Não é possível dividir por 0.")
    }
}
function porcentagem() { // %
    // exemplo para referencia: 50 + 10% -> 50 + (50 * 10 / 100) = 55
    const tela = document.getElementById("valor");
    if (operacao && num2 !== 0) {
        // se for parte de uma operação
        num2 = (num1 * num2) / 100;
        tela.textContent = num2.toString().replace('.', ',');
    }
    else {
        // se não for parte de uma operação, dividir numero por 100
        num1 = num2 / 100;
        tela.textContent = num1.toString().replace('.', ',');
    }
    console.log("Porcentagem realizada.")
}

// operações funcionais
function limpar() { // A/C
    num1 = 0;
    num2 = 0;
    operacao = null;
    const tela = document.getElementById("valor");
    tela.textContent = '0';
    console.log("Calculadora limpa.")
}
function inverter() { // +/-
    const tela = document.getElementById("valor");
    if (num2 !== 0) {
        // inverter valor do input recente
        num2 *= -1;
        tela.textContent = num2.toString().replace('.', ',');
    }
    else if (num1 !== 0) {
        // inverter valor do resultado
        num1 *= -1;
        tela.textContent = num1.toString().replace('.', ',');
    }
    console.log("Valor invertido.")
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
        default:
            break;
    }
    // mostrar o resultado na tela
    const tela = document.getElementById("valor");
    // formatar valor para apresentar apenas duas casas depois da virgula (para casos de dizima periodica)
    // trocar o . por ,
    let valorString = num1.toString();
    if (valorString.includes('.')) {
        tela.textContent = num1.toFixed(2).replace('.', ',');
    }
    else {
        tela.textContent = num1;
    }
    console.log("Resultado final: " + num1);
    num2 = 0;
    operacao = null;  // reseta a operação para o próximo cálculo
}