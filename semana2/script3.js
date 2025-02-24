let string = prompt("Digite uma palavra ou uma frase qualquer: ");

function ePalindromo(string) {
    const stringAlterada = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // remove caracteres que nao sao letras e converte pra minusculo
    const stringReversa = stringAlterada.split('').reverse().join('');
    document.write = stringAlterada;
    // split('') - separa a string em um vetor de caracteres, '' indica que deve ser feito por cada caractere
    // reverse() - inverte a ordem do vetor de caracteres
    // join('') - junta o vetor de caracteres em uma string novamente, nesse caso, invertida.    

    return stringAlterada === stringReversa;
}

if(ePalindromo(string)) {
    alert(string + " é um palíndromo.")
}
else {
    alert(string +" não é um palíndromo.")
}

