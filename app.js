//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function adicionarAmigo() {
    let nome = document.getElementById('nome').value;
    if(nome==""){
        alert("Nome não pode estar em branco");
    }
    else{
        nomes.push(nome);
        document.getElementById('nome').value = "";
        console.log(nomes);
    }
    
}

function sortearAmigo() {
    let numeroEscolhido = parseInt(Math.random() * nomes.length + 1);
    document.getElementById('paragrafo').innerHTML = `<p>O Amigo secreto sorteado é ${nomes[numeroEscolhido-1]}</p>`;
}