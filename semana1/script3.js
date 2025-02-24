let num = prompt("Digite um número inteiro positivo: ");

if(num >= 1) {
    fatorialTotal = 1;
    for(i=1; i<=num; i++) {
        fatorialTotal = fatorialTotal * i;
    }
    alert("A fatorial de "+ num +" é igual a "+fatorialTotal);
}
else {
    alert("Número inválido!");
}