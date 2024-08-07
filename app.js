alert('Boas vindas ao numero secreto');
let numeroSecreto = 29;
let chute = prompt('Escolha um número entre 1 e 30');

// se chute for igual ao número secreto
if(chute == numeroSecreto) {
    console.log('Isso aí! Você descobriu o número secreto (29)');

} else {
    alert ('Você errou :-(')
}