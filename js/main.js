const paragrafo = document.querySelector('.glass-effect p');
const url = "https://api.github.com/repos/felipejesus-front/Desafios-frontend/contents"
const cardsContainer = document.querySelector('#contentList');

// função reutilizável com qualquer outro elemento de texto
function typeWriter(elemento, intervalo) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, intervalo * i)
    });
}
typeWriter(paragrafo, 80);

function randomChallenger(){
    const paginas = 
    ['interactive-rating-component-main',
     'qr-code-component-main',
     'product-preview-card-component-main',
     'nft-preview-card-component-main'];
    const pagina = Math.floor(Math.random() * paginas.length);

    window.open( `./${paginas[pagina]}`, '_blank')
}

function criarCardHTML(pasta) {
    const stringPura = pasta.name;
    const stringTratada = (stringPura.charAt(0).toUpperCase() + stringPura.slice(1)).replace(/-/g,' ');
    console.log(stringTratada)

    const card = `    <div class="glass-effect title-box card-body">
        <a href="./${pasta.name}" target="_blank"><img src="https://raw.githubusercontent.com/felipejesus-front/Desafios-frontend/main/${pasta.name}/design/desktop-preview.jpg" alt=""></a>
        <h3><a href="./${pasta.name}" target="_blank">${stringTratada}</a></h3>
        <a href="./${pasta.name}" target="_blank" class="button">Ir para a pagina</a>
        <div class="ruido"></div>
        </div>
    `;
    
    return card;
  }

function preencherCard(diretorio) {
    const divCard = criarCardHTML(diretorio);
    cardsContainer.innerHTML += divCard;
  }

async function criarCards(){
    const repositoryDataResponse = await fetch(url);
    const repositoryJson = await repositoryDataResponse.json();
    repositoryJson.forEach((item)=>{

        function checkFolders(){
            if (item.type === "dir" && item.name != 'img' && item.name != 'css' && item.name != 'js') {
                return true
            }
        }

        if(checkFolders()){
            preencherCard(item)
        }
    })
}
criarCards();


if(window.SimpleAnime){
    new SimpleAnime();
}