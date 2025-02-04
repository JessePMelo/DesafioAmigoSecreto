//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema. 
let nomesNaLista = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome == "") {
        alert("Por favor, insira um nome.");
    } else {
        let listaDeNomes = document.getElementById('listaAmigos');
        nomesNaLista = listaDeNomes.getElementsByTagName('li');
        let nomeDuplicado = false;
        
        for (let i = 0; i < nomesNaLista.length; i++) {
            if (nomesNaLista[i].textContent == nome) {
                nomeDuplicado = true;
                break;
            }
        }

        if (nomeDuplicado) {
            alert('Nome Duplicado');
        } else {
            listaDeNomes.innerHTML += `<li>${nome}</li>`;
        }

        document.getElementById('amigo').value = "";
    }
}

function sortearAmigo() {
    if (nomesNaLista.length > 2){
        let numeroEscolhido = parseInt(Math.random() * nomesNaLista.length);
        let amigoSorteado = nomesNaLista[numeroEscolhido].textContent ;
        
        let paragrafo = document.createElement('p');
        paragrafo.textContent = `A Pessoa sorteada é: ${amigoSorteado}`;

        listaDeNomes = document.getElementById('listaAmigos');
        listaDeNomes.parentNode.replaceChild(paragrafo, listaDeNomes);
        
        console.log(amigoSorteado);
    }
    else{
        alert('Precisa de 3 nomes para o amigo secreto') ;
    }
    
}