const paragrafo = document.getElementById('paragrafo');

// função reutilizável com qualquer outro elemento de texto
function typeWriter(elemento, intervalo) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, intervalo * i)
    });
}
typeWriter(paragrafo, 40);

function randomChallenger(){
    const paginas = ['interactive-rating-component-main', 'qr-code-component-main', 'product-preview-card-component-main'];
    const pagina = Math.floor(Math.random() * paginas.length);

    window.location.href = `./${paginas[pagina]}`;
}