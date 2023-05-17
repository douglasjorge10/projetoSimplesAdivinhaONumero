const numJogador = document.querySelector('#inputTentativa');
const butEnviar = document.querySelector('#butEnviar');
const mainForm = document.querySelector('#mainForm');

// menssagens
const menssagemFimDeJogo = "Fim de jogo! Suas tentativas terminaram. Mais sorte na proxima vez!"

let numAleatorio = Math.ceil(Math.random() * 100);

const containerJogadas = [];

//cria tags de menssagens
function criaTag(pTagNome, pTextoMenssagem){
    const pTag = document.createElement(pTagNome)
    const pTexto = document.createTextNode(pTextoMenssagem);

    const pTagComMenssagem = pTag.appendChild(pTexto)
    mainForm.appendChild(pTagComMenssagem)
}
//cria tag BUTTOM reset
function createButtonReset(){
    const Tagbtn = document.createElement('button');
    const btnValue = document.createTextNode('Reiniciar');
    Tagbtn.appendChild(btnValue);
    Tagbtn.onclick = function()
    {
        window.history.go(0);
    }
    mainForm.appendChild(Tagbtn);
}
// limita jogadas em 10 e encerra o jogo
function limitDezTentativas(){
    if (containerJogadas.length === 10){
        numJogador.disabled=true;
        criaTag('p', menssagemFimDeJogo)
        createButtonReset()
    }
}
butEnviar.addEventListener('click', function(e){
    containerJogadas.push(numJogador.value)
    limitDezTentativas()



    numJogador.value = ""
    e.preventDefault()




})

