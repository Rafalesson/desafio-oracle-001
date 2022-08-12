const secaoDireita = document.querySelector('.secaoDireita');
const cripto = document.querySelector('#cripto');
const descripto = document.querySelector('#descripto');
let mensagem = document.querySelector('#areaTexto');
const mainFoto = document.querySelector('#blueBoy');
const secaoDireitaP1 = document.querySelector('.p1');
const secaoDireitaP2 = document.querySelector('.p2');

function criptografar() { 
    const texto = mensagem.value;
    const tirarAcentos = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const resultadoTexto = tirarAcentos.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat") 
    
    resultado.value = resultadoTexto;
}

function descriptografar() { 
    const texto = mensagem.value;
    const descript = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u")
    
    resultado.value = descript;
}

function copiarTexto() {
    resultado.select();
    document.execCommand('copy');
    copiar.innerText = 'Copiado!';
    copiar.style.backgroundColor = '#0A3871';
    copiar.style.color = '#fff';
    copiar.style.cursor = 'default';
    mensagem.value = '';
    mensagem.focus();
}

function mostraResultado () { 
    secaoDireita.innerHTML = `
    <secttion class='direitaJs'>
    <textarea id="resultado"></textarea>
    <buton class='botao' id="copiar">Copiar</buton>    
    </section>
    `
    const copiar = document.querySelector('#copiar');
    const resultado = document.querySelector('#resultado');
    
    copiar.onclick = function () { 
        copiarTexto();
    }
}

cripto.onclick = () => { 
    mostraResultado();
    criptografar();
}

descripto.onclick = () => { 
    mostraResultado();
    descriptografar();
}