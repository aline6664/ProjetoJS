let data = new Date();

let diaSemana = data.getDay();
const diasSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
diaSemana = diasSemana[diaSemana];

let dia = data.getDate();

let mes = data.getMonth();
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];
mes = meses[mes];

let ano = data.getYear() + 1900;

document.getElementById("data_atual").innerHTML = diaSemana +", "+ dia +" de "+ mes +" de "+ ano;