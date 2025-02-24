let num = prompt("Digite um número inteiro positivo: ");

if(num >= 1) {
    if(num % 2 == 0) {
        alert("Número é par.");
    }
    else {
        alert("Número é impar.");
    }
}
else {
    alert("Número inválido!");
}