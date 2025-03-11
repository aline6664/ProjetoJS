document.getElementById("formulario").addEventListener("submit",anosUtilizacao,valorMercado);

// recebimento dos inputs
let marca = document.getElementById("inputMarca").value;
let modelo = document.getElementById("inputModelo").value;

// classe
function Carro() {
    // marca
    this.setMarca = function(Marca) {
        this.marca = Marca;
    }
    this.getMarca = function() {
        return this.marca;
    }
    // modelo
    this.setModelo = function(Modelo) {
        this.modelo = Modelo;
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
    this.setCor = function(Cor) {
        this.cor = Cor;
    }
    this.getCor = function() {
        return this.cor;
    }
    // kilometragem
    this.setKilom = function(Kilometragem) {
        this.kilometragem = Kilometragem;
    }
    this.getKilom = function() {
        return this.kilometragem;
    }
    // valor_fipe
    this.setFipe = function(Valor_fipe) {
        this.valor_fipe = Valor_fipe;
    }
    this.getFipe = function() {
        return this.valor_fipe;
    }
}
// marca, modelo, ano, cor, kilometragem, valor_fipe

var umCarro = new Carro();
umCarro.setMarca(marca);
umCarro.setModelo(modelo);
umCarro.setAno(ano);
umCarro.setCor(cor);
umCarro.setKilom(kilometragem);
umCarro.setFipe(valor_fipe);

document.getElementById("resultado").innerHTML = 
"Marca: "+ umCarro.getMarca() +"<br> Modelo: "+ umCarro.getModelo() +
"<br> Ano: "+ umCarro.getAno() +"<br> Cor: "+ umCarro.getCor() +
"<br> Kilometragem: "+ umCarro.getKilom() +"<br> Valor Fipe: "+ umCarro.getFipe();

function anosUtilizacao() {

}

function valorMercado() {

}