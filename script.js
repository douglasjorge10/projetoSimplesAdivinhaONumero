const numJogador = document.querySelector('#inputTentativa');
const butEnviar = document.querySelector('#butEnviar');
const mainForm = document.querySelector('#mainForm');
const butReset = document.querySelector('#reset');

const pmenssager = document.querySelector('#pMenssagens');
const spanNumeral = document.querySelector('#numeral')
const contagemJogadas = document.querySelector('#contagem');


const numAleatorio = Math.ceil(Math.random() * 100);

// menssagens
const menssagems =
    [
        "Fim de jogo! Suas tentativas terminaram. Mais sorte na proxima vez!",
        "Mais pra cima",
        "Mais pra baixo",
        "Parabens você acertou!",
        "Presta atenção em suas jogadas! ",
        "Tentativa:",
        "Restao 3 jogadas!"
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
        spanNumeral.innerText = `${jogada}`
        numJogador.disabled=true;
        pmenssager.innerText = menssagems[0]
        reiniciaJogo()

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
    if(jogada == numAleatorio){
        spanNumeral.innerText = jogada
       pmenssager.innerText = `${menssagems[3]}`
        reiniciaJogo()


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
//função contra tentativas iguais
function palpiteIgual() {

    if (containerJogadas.length !== 0) {
        if (containerJogadas.includes(numJogador.value)){
            pmenssager.innerText = menssagems[4]
            jogada='';
        }
    }
}
// função para imprimir na tela a contagem de tentativas
function jogadasRestante(){
    if (containerJogadas.length === 7){
        pmenssager.innerText = menssagems[6]
    }
    contagemJogadas.innerText =  `${menssagems[5]} ${containerJogadas.length}`
}
function reiniciaJogo(){
    butReset.style.display="inline-block"
    butEnviar.style.display="none";

}
butReset.addEventListener('click', function (){
    window.location.reload()
})
butEnviar.addEventListener('click', function(e){
    numJogador.focus()

    jogada = numJogador.value
    palpiteIgual()
    containerJogadas.push(jogada)
    jogadaBaixaOuAlta()
    condicionalEntrada()
    mostraTentaivas()
    limitDezTentativas()
    vitoria()
    jogadasRestante()

    numJogador.value = ""
    e.preventDefault()
})

