const secaoDireita = document.querySelector('.secaoDireita');
const secaoEsquerda = document.querySelector('.secaoEsquerda');
const cabecalho = document.querySelector('.cabecalho');
const cripto = document.querySelector('#cripto');
const descripto = document.querySelector('#descripto');
const divBotoes = document.querySelector('.botoes');
const mensagem = document.querySelector('#areaTexto');
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
    resultado.style.color = "rgba(10, 56, 113, .5)";
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
    const larguraTelaUser = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const textArea = document.querySelector('.divTexto');

    if (larguraTelaUser <= 750) { 
        secaoDireita.style.height = '50vh';
        textArea.style.height = '20vh';
        cripto.style.width = '40%';
        cripto.style.fontSize = '1.2rem';
        descripto.style.width = '40%';
        descripto.style.fontSize = '1.2rem';
    }

    copiar.onclick = function () { 
        copiarTexto();
        if(larguraTelaUser <= 750) { 
            secaoDireita.style.height = '20vh';
            textArea.style.height = '50vh';
            cripto.style.width = '90%';
            descripto.style.width = '90%';
        }
    }
}

cripto.onclick = () => { 
    mostraResultado();
    criptografar();
    cripto.style.width = '90%';
    descripto.style.width = '90%';
}

descripto.onclick = () => { 
    mostraResultado();
    descriptografar();
    cripto.style.width = '90%';
    descripto.style.width = '90%';
}