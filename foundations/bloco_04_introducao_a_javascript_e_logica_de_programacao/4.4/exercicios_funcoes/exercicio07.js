// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .


function verifyWordEnding(word, end) {


    if (word.endsWith(end)){
        return true
    }

    return false
}

console.log(verifyWordEnding("Gustavo", "tavo"))