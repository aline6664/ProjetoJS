document.addEventListener("DOMContentLoaded", function() {
    console.log("teste, carregado");
    const conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = `
        <h1>Controle de Valores</h1>
        <h2>Total:</h2>
        <p class="caixa" id="total">0</p>
        <div id="tabela">
            <div id="tabelaHomens">
                <img src="img/homem.png" class="icon-pessoa">
                <p>Homens:</p>
                <p class="caixa" id="valorHomens">0</p>
                <div class="botoes">
                    <img src="img/add-icon.png" class="icon-clickavel" id="btnHomens">
                    <img src="img/minus-icon.png" class="icon-clickavel" id="btnDiminuirHomens">
                </div>
            </div>
    
            <div id="tabelaMulheres">
                <img src="img/mulher.png" class="icon-pessoa">
                <p>Mulheres:</p>
                <p class="caixa" id="valorMulheres">0</p>
                <div class="botoes">
                    <img src="img/add-icon.png" class="icon-clickavel" id="btnMulheres">
                    <img src="img/minus-icon.png" class="icon-clickavel" id="btnDiminuirMulheres">
                </div>
            </div>
        </div>
 
        <img src="img/reset-icon.png" class="icon-resetar" id="btnReset">
    `;
 
    document.getElementById("btnHomens").addEventListener("click", () => adicionarValor('homens'));
    document.getElementById("btnMulheres").addEventListener("click", () => adicionarValor('mulheres'));
    document.getElementById("btnDiminuirHomens").addEventListener("click", () => diminuirValor('homens'));
    document.getElementById("btnDiminuirMulheres").addEventListener("click", () => diminuirValor('mulheres'));
    document.getElementById("btnReset").addEventListener("click", resetarValores());
});

let valorHomens = 0;
let valorMulheres = 0;
 
function adicionarValor(tipo) {
    if (tipo === 'homens') {
        valorHomens += 1;
        document.getElementById('valorHomens').textContent = valorHomens;
    } else if (tipo === 'mulheres') {
        valorMulheres += 1;
        document.getElementById('valorMulheres').textContent = valorMulheres;
    }
    atualizarTotal();
}

function diminuirValor(tipo) {
    if (tipo === 'homens' && valorHomens > 0) {
        valorHomens -= 1;
        document.getElementById('valorHomens').textContent = valorHomens;
    } else if (tipo === 'mulheres' && valorMulheres > 0) {
        valorMulheres -= 1;
        document.getElementById('valorMulheres').textContent = valorMulheres;
    }
    atualizarTotal();
}
 
function atualizarTotal() {
    let total = valorHomens + valorMulheres;
    document.getElementById('total').textContent = total;
}
 
function resetarValores() {
    valorHomens = 0;
    valorMulheres = 0;
    document.getElementById('valorHomens').textContent = valorHomens;
    document.getElementById('valorMulheres').textContent = valorMulheres;
    atualizarTotal();
}
