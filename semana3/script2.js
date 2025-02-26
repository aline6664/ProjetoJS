document.getElementById("formulario").addEventListener("submit",anosUtilizacao,valorMercado);

// recebimento dos inputs
let marca = document.getElementById("inputMarca").value;
let modelo = document.getElementById("inputModelo").value;

// classe
function Carro() {
    var marca;
    this.setMarca = function(Marca) {
        this.marca = Marca;
    }
    this.getMarca = function() {
        return this.marca;
    }
    var modelo;
    this.setModelo = function(Modelo) {
        this.modelo = Modelo;
    }
    this.getModelo = function() {
        return this.modelo;
    }
}
// marca, modelo, ano, cor, kilometragem, valor_fipe

var umCarro = new Carro();
umCarro.setMarca(marca);
umCarro.setModelo(modelo)
document.getElementById("resultado").innerHTML = "Marca: "+ umCarro.getMarca() +" Modelo: "+ umCarro.getModelo(); 

/* function anosUtilizacao() {

}

function valorMercado() {

}*/