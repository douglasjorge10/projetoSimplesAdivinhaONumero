const numJogador = document.querySelector('#inputTentativa');
const butEnviar = document.querySelector('#butEnviar');
const mainForm = document.querySelector('#mainForm');

const pmenssager = document.querySelector('#pMenssagens');

const numAleatorio = Math.ceil(Math.random() * 100);

// menssagens
const menssagems =
    [
        "Fim de jogo! Suas tentativas terminaram. Mais sorte na proxima vez!",
        "Mais pra cima",
        "Mais pra baixo",
        "Parabens você acertou!",
        "Presta atenção! É de 1 a 100"
    ]

let jogada = Number();
const containerJogadas = [];

//cria tags de menssagens dinamicamente
function criaTag(pTagNome, pTextoMenssagem){
    const pTag = document.createElement(pTagNome)
    const pTexto = document.createTextNode(pTextoMenssagem);

    const pTagComMenssagem = pTag.appendChild(pTexto)
    mainForm.appendChild(pTagComMenssagem)

}
// limita jogadas em 10 e encerra o jogo
function limitDezTentativas(){
    if (containerJogadas.length === 10){
        numJogador.disabled=true;
        pmenssager.innerText = menssagems[0]

    }
}
// INDICA SE A JOGADA ESTA MAIS BAIXA OU MAIS ALTA
function jogadaBaixaOuAlta(){
    if(numAleatorio < jogada){
        pmenssager.innerText = menssagems[2]

    } else if (numAleatorio > jogada){
        pmenssager.innerText = menssagems[1]

    }
}
function vitoria(){
    if(jogada === numAleatorio){
        pmenssager.innerText = menssagems[3]
    }
}
// função imprime tentativas anteriores
function mostraTentaivas(){
    criaTag('p', jogada + " ")
}
//função controle de entrada
function condicionalEntrada(){
    if (isNaN(jogada) || jogada <= 0 || jogada === "" || jogada > 100){
        containerJogadas.pop()
        pmenssager.innerText= menssagems[4]
        jogada ='';
    }
}

butEnviar.addEventListener('click', function(e){
    numJogador.focus()


    jogada = numJogador.value
    containerJogadas.push(jogada)

    jogadaBaixaOuAlta()
    condicionalEntrada()
    mostraTentaivas()
    limitDezTentativas()
    vitoria()


    numJogador.value = ""
    e.preventDefault()
})

