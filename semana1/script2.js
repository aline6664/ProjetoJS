let num = prompt("Digite um número inteiro positivo: ");

if (num == 1) {
    alert("O número 1 não é primo, pois é divisível apenas por ele mesmo.");
}
else if (num == 2) {
    alert("O número 2 é primo.");
}
else if (num > 1) {
    let ePrimo = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            alert("O número " + num + " não é primo, pois é divisível por " + i);
            ePrimo = false;
            break;
        }
    }
    if (ePrimo) {
        alert("O número " + num + " é primo.");
    }
}
else {
    alert("Número inválido!");
}
