
export const filmes = [
  {
    nome: "Minha mãe é uma peça",
    avaliacoes: [5, 4, 4, 4, 5]
  },
  {
    nome: "Saneamento Básico",
    avaliacoes: [3, 4, 2, 3, 4]
  },
  {
    nome: "Se eu fosse você",
    avaliacoes: [1, 2, 3]
  }
];

// Conta quantas pessoas avaliaram o filme
export function contarAvaliacoes(filme) {
  return filme.avaliacoes.length;
}

// Calcula a média das avaliações
export function calcularMedia(filme) {
  if (filme.avaliacoes.length === 0) {
    return 0;
  }

  const soma = filme.avaliacoes.reduce(
    (total, nota) => total + nota,
    0
  );

  return soma / filme.avaliacoes.length;
}

// Classifica o filme de acordo com a média
export function classificarFilme(filme) {
  const media = calcularMedia(filme);

  if (media >= 4) {
    return "Filme recomendado";
  } else if (media >= 3) {
    return "Filme razoável";
  } else {
    return "Filme ruim";
  }
}

