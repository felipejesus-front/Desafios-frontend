const conteudoSpan = document.querySelector('span');
const primeiroRadioValue = document.querySelector('input[type="radio"]:checked');
const pesquisa = document.getElementById('pesquisa')
const resultado = document.getElementById('resultado')


function pegarValor(){
    const radioValue = this.event.target.value;
    adicionarSpan(radioValue);
    
}

function adicionarSpan(text){
    conteudoSpan.innerText = text;
}
adicionarSpan(primeiroRadioValue.value);

function mudarPagina(){
    pesquisa.classList.add('desligado');
    resultado.classList.remove('desligado');
}