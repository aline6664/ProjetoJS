// Classe Carro
function Carro() {
    // marca
    this.setMarca = function(marca) {
        this.marca = marca;
    }
    this.getMarca = function() {
        return this.marca;
    }
    // modelo
    this.setModelo = function(modelo) {
        this.modelo = modelo;
    }
    this.getModelo = function() {
        return this.modelo;
    }
    // ano
    this.setAno = function(ano) {
        this.ano = ano;
    }
    this.getAno = function() {
        return this.ano;
    }
    // cor
    this.setCor = function(cor) {
        this.cor = cor;
    }
    this.getCor = function() {
        return this.cor;
    }
    // kilometragem
    this.setKilom = function(kilometragem) {
        this.kilometragem = kilometragem;
    }
    this.getKilom = function() {
        return this.kilometragem;
    }
    // valor_fipe
    this.setFipe = function(valor_fipe) {
        this.valor_fipe = valor_fipe;
    }
    this.getFipe = function() {
        return this.valor_fipe;
    }
    // métodos
    this.anosUtilizacao = function() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }
    this.valorMercado = function() {
        const kmPorAno = this.km / this.anosUtilizacao();
        let percentual = 1;
        
        if (kmPorAno <= 30000){
            percentual = 1.1; // 110% do valor FIPE
        }
        else if (kmPorAno <= 50000){
            percentual = 1;  // 100% do valor FIPE
        }
        else {
            percentual = 0.9; // 90% do valor FIPE
        }
        return this.valor_fipe * percentual;
    }
};

// Evento para envio do formulario
document.getElementById("formulario").addEventListener("submit", function(evento) {
    evento.preventDefault();

    // Recebimento dos inputs
    var marca = document.getElementById("inputMarca").value;
    var modelo = document.getElementById("inputModelo").value;
    var ano = document.getElementById("inputAno").value;
    var cor = document.getElementById("inputCor").value;
    var kilometragem = document.getElementById("inputKilometragem").value;
    var valor_fipe = document.getElementById("inputValorFipe").value;

    var umCarro = new Carro();
    umCarro.setMarca(marca);
    umCarro.setModelo(modelo);
    umCarro.setAno(ano);
    umCarro.setCor(cor);
    umCarro.setKilom(kilometragem);
    umCarro.setFipe(valor_fipe);

    document.getElementById("resultado").innerHTML =
    "<h1>Características do carro:</h1>" +
    "<p><b>Marca:</b> " + umCarro.getMarca() + "</p>" +
    "<p><b>Modelo:</b> " + umCarro.getModelo() + "</p>" +
    "<p><b>Ano:</b> " + umCarro.getAno() + "</p>" +
    "<p><b>Cor:</b> " + umCarro.getCor() + "</p>" +
    "<p><b>Kilometragem:</b> " + umCarro.getKilom() + "</p>" +
    "<p><b>Valor Fipe:</b> R$ " + umCarro.getFipe() + "</p>" +
    "<p><b>Anos de Utilização:</b> " + umCarro.anosUtilizacao() + "</p>" +
    "<p><b>Valor de Mercado:</b> R$ " + umCarro.valorMercado().toFixed(2) + "</p>";
    
    alert("Carro cadastrado com sucesso.");
});