import {
  filmes,
  contarAvaliacoes,
  calcularMedia,
  classificarFilme
} from "./src/filmes.js";

for (const filme of filmes) {
  console.log(`Filme: ${filme.nome}`);

  console.log(`Quantidade de avaliações: ${contarAvaliacoes(filme)}`);

  console.log(`Média das notas: ${calcularMedia(filme).toFixed(2)}`);

  console.log(`Classificação: ${classificarFilme(filme)}`);

  console.log("-----------------------------");
}
