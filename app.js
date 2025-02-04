//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome == "") {
        alert("Por favor, insira um nome.");
    } else {
        let listaDeNomes = document.getElementById('listaAmigos');
        let nomesNaLista = listaDeNomes.getElementsByTagName('li');
        let nomesArray = Array.from(nomesNaLista);
        let nomeDuplicado = false;
        
        for (let i = 0; i < nomesArray.length; i++) {
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
    if (nomesArray.length > 1){
        let numeroEscolhido = parseInt(Math.random() * nomesArray.length + 1);
        document.getElementById('paragrafo').innerHTML = `<p>O Amigo secreto sorteado é ${nomes[numeroEscolhido]}</p>`;    
    }  
}