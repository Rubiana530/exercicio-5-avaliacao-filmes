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

Foram desenvolvidos **10 casos de teste automatizados utilizando Mocha e Assert**, com o objetivo de validar as funcionalidades e regras de negócio da aplicação.

### Casos de teste executados

| ID | Cenário de teste | Resultado esperado | Status |
|---|---|---|---|
| CT01 | Validar a quantidade de avaliações do filme "Minha mãe é uma peça" | Retornar 5 avaliações | ✅ Passou |
| CT02 | Validar a quantidade de avaliações do filme "Se eu fosse você" | Retornar 3 avaliações | ✅ Passou |
| CT03 | Validar um filme sem avaliações | Retornar 0 avaliações | ✅ Passou |
| CT04 | Calcular a média do filme "Minha mãe é uma peça" | Média igual a 4,4 | ✅ Passou |
| CT05 | Calcular a média do filme "Saneamento Básico" | Média igual a 3,2 | ✅ Passou |
| CT06 | Calcular a média do filme "Se eu fosse você" | Média igual a 2,0 | ✅ Passou |
| CT07 | Calcular a média de um filme sem avaliações | Retornar média 0 | ✅ Passou |
| CT08 | Validar a classificação de um filme com média 4,4 | Filme recomendado | ✅ Passou |
| CT09 | Validar a classificação de um filme com média 3,2 | Filme razoável | ✅ Passou |
| CT10 | Validar a classificação de um filme com média 2,0 | Filme ruim | ✅ Passou |

### Resultado da execução

**Total de testes:** 10

**Testes aprovados:** 10

**Testes com falha:** 0

**Ferramenta:** Mocha

Todos os casos de teste foram executados com sucesso.

### Como executar os testes

No terminal, execute:

```bash
npm test
```

### Objetivo dos testes

Os testes foram desenvolvidos para verificar se a aplicação realiza corretamente a contagem das avaliações, o cálculo das médias e a classificação dos filmes conforme as regras de negócio estabelecidas.

Também foram considerados cenários com ausência de avaliações, permitindo verificar o comportamento das funções nessa situação.

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
