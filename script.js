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
        //0
        "Fim de jogo! Suas tentativas terminaram. Mais sorte na proxima vez!",
        //1
        "Mais pra cima",
        //2
        "Mais pra baixo",
        //3
        "Parabens você acertou!",
        //4
        "Presta atenção em suas jogadas! ",
        //5
        "Tentativa:",
        //6
        "Restao 3 jogadas!",
        //7
        "Numero sorteado:",
        //8
        "Sua ultima jogada:"
    ]

let jogada = Number();
const containerJogadas = [];
// limita jogadas em 10 e encerra o jogo
function limitDezTentativas(){
    if (containerJogadas.length === 10){
        pmenssager.innerText = menssagems[0]
        pmenssager.style.color="red";
        pmenssager.style.fontSize="13pt";
        pmenssager.style.marginTop="10px"
        spanNumeral.innerText = `${menssagems[7]} ${numAleatorio} ${menssagems[8]} ${jogada}`
        spanNumeral.style.color="red";
        spanNumeral.style.fontSize="17pt";
        reiniciaJogo()

    }
}
// INDICA SE A JOGADA ESTA MAIS BAIXA OU MAIS ALTA
function jogadaBaixaOuAlta(){
    if(numAleatorio < jogada){
        pmenssager.innerText = menssagems[2]
        pmenssager.style.color="black";

    } else if (numAleatorio > jogada){
        pmenssager.innerText = menssagems[1]
        pmenssager.style.color="black";

    }
}

function vitoria(){
    if(jogada == numAleatorio){
        reiniciaJogo()
        pmenssager.innerText = `${menssagems[3]}`
        pmenssager.style.color="blue";
        pmenssager.style.fontSize="15pt";
        pmenssager.style.marginTop="10px"
        spanNumeral.innerText = ` ${jogada}`
        spanNumeral.style.color="blue";
        spanNumeral.style.fontSize="20pt";
    }
}
// função imprime tentativas anteriores
function mostraTentaivas(){
   spanNumeral.innerText += " " + jogada
}
//função controle de entrada
function condicionalEntrada(){
    if (isNaN(jogada) || jogada <= 0 || jogada === "" || jogada > 100){
        containerJogadas.pop()
        pmenssager.style.color="red";
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
        pmenssager.style.color="red";
        pmenssager.style.fontSize="13pt";
    }
    contagemJogadas.innerText =  `${menssagems[5]} ${containerJogadas.length}`
}
function reiniciaJogo(){
    numJogador.disabled=true;
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

