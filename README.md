# Desafio Amigo Secreto

## Objetivo
Desenvolver a lógica de um site de amigo secreto.

## Regras de negócio
O sistema deve tratar a entrada de dados, não permitindo:
- Nomes idênticos
- Adicionar nomes em branco

## Funcionamento do sistema
O sistema possui duas funções principais: **adicionarAmigo()** e **sortearAmigo()**.

- **adicionarAmigo()**: Salva o conteúdo escrito no input com id="amigo" e exibe em uma lista não ordenada chamada listaAmigos, conforme definido nas regras do projeto. A adição é analisada de acordo com as regras de negócio.

- **sortearAmigo()**: Usa a função Math.random para sortear. Para fazer sentido no contexto de um amigo secreto, o sorteio só acontece quando a lista possui mais de três pessoas.