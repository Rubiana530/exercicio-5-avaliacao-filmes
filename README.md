# 🎬 Exercício 5 — Avaliação de Filmes

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte dos exercícios práticos da **Mentoria 2.0 de Júlio de Lima**, com o objetivo de praticar lógica de programação em JavaScript e testes automatizados utilizando Mocha.

A aplicação recebe um conjunto de filmes com suas respectivas avaliações e realiza as seguintes operações:

- Conta quantas pessoas avaliaram cada filme.
- Calcula a média das notas recebidas.
- Classifica os filmes de acordo com a média obtida.

## 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- Mocha
- Assert (nativo do Node.js)
- Git e GitHub
- Visual Studio Code

## 📋 Regras de negócio

A classificação dos filmes segue os seguintes critérios:

| Média das avaliações | Classificação |
|---|---|
| Maior ou igual a 4 | Filme recomendado |
| Maior ou igual a 3 e menor que 4 | Filme razoável |
| Menor que 3 | Filme ruim |

## 🧪 Testes automatizados

Foram desenvolvidos **10 casos de teste automatizados utilizando Mocha**, contemplando:

- Validação da quantidade de avaliações.
- Verificação do cálculo da média das notas.
- Validação das classificações dos filmes.
- Verificação do comportamento de filmes sem avaliações.

Todos os 10 testes foram executados com sucesso.

## 🚀 Como executar o projeto

**1. Instalar as dependências**

```bash
npm install
```

**2. Executar a aplicação**

```bash
node index.js
```

**3. Executar os testes automatizados**

```bash
npm test
```

## 📁 Estrutura do projeto

```text
exercicio-5-avaliacao-filmes/
├── src/
│   └── filmes.js
├── test/
│   └── filmes.test.js
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🎯 Aprendizados

Durante o desenvolvimento deste exercício, pratiquei conceitos de JavaScript, manipulação de arrays, criação de funções, estruturas condicionais e utilização de ES Modules.

Também pratiquei a criação e execução de testes automatizados com Mocha, validação de resultados com Assert e versionamento de código utilizando Git e GitHub.

**Projeto desenvolvido para fins de estudo e prática em testes de software.**
