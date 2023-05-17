const numJogador = document.querySelector('#inputTentativa');
const butEnviar = document.querySelector('#butEnviar');

let numAleatorio = Math.ceil(Math.random() * 100);

const containerJogadas = [];

butEnviar.addEventListener('click', function(e){

    containerJogadas.push(numJogador.value)




    e.preventDefault()
})