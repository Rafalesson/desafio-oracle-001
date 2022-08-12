
const log = console.log;

const secaoDireita = document.querySelector('.secaoDireita');
const cripto = document.querySelector('#cripto');
const descripto = document.querySelector('#descripto');
const mensagem = document.querySelector('#areaTexto');
const resultado = document.querySelector('#resultado');
const mainFoto = document.querySelector('#blueBoy');
const secaoDireitaP1 = document.querySelector('.p1');
const secaoDireitaP2 = document.querySelector('.p2');


cripto.onclick = function () { 
    mainFoto.style.display = 'none';
    secaoDireitaP1.style.display = 'none';
    secaoDireitaP2.style.display = 'none';

    secaoDireita.innerHTML = `
    <secttion class='direitaJs'>
    <textarea id="resultado"></textarea>
    <buton class='botao' id="copiar">Copiar</buton>    
    </section>
    `
}





// resultado.onfocus = function() {
//     this.style.backgroundColor = '#fff';
//     secaoDireita.innerHTML += `
//     <button class='botao' id='copiar'>Copiar</button>
// `;
// }

// resultado.onblur = function () { 
//     this.style.backgroundColor = 'transparent';
// }




