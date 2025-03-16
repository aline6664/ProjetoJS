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
}

function anosUtilizacao() {
    var anosutilizado = 2025 - this.ano;
    return anosutilizado;
}

function valorMercado() {
    if (this.kilometragem <= 30000) {
        var valor =+ (this.valor_fipe * 1.1);
        return valor;
    }
    else if (this.kilometragem > 30000 && this.kilometragem <= 50000) {
        var valor =+ (this.valor_fipe * 1);
        return valor;
    }
    else if (this.kilometragem > 50000) {
        var valor =+ (this.valor_fipe * 0.9);
        return valor;
    }
}

// carros que rodam até 30.000 km/ano – 110% do valor_fipe
//  carros que rodam entre 30.000 e 50.000 km/ano – 100% do valor_fipe
//  carros que rodam mais que 50.000 km/ano – 90% do valor_fipe

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
    "<p><b>Cor:</b> " + umCarro.Cor() + "</p>" +
    "<p><b>Kilometragem:</b> " + umCarro.getKilom() + "</p>" +
    "<p><b>Valor Fipe:</b> " + umCarro.getFipe() + "</p>";
    
    alert("Carro cadastrado com sucesso.");
});