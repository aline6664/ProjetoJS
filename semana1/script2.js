let num = prompt("Digite um número inteiro positivo: ")
    if(num >= 0) {
        for(i=2; i<num; i++) {
            if(num % i == 0) {
                alert("O número "+ num +" não é primo, pois é divisível por "+ i);
                break;
            }
            else {
                alert("O número "+ num +" é primo.");
                break;
            }
        }
    }
    else {
        alert("Número inválido!");
    }