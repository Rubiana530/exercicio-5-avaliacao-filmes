
import assert from "node:assert/strict";

import {
  contarAvaliacoes,
  calcularMedia,
  classificarFilme
} from "../src/filmes.js";

describe("Exercício 5 - Avaliação de Filmes", function () {

  describe("Quantidade de avaliações", function () {

    it("Deve retornar 5 avaliações", function () {
      const filme = {
        nome: "Minha mãe é uma peça",
        avaliacoes: [5, 4, 4, 4, 5]
      };

      assert.equal(contarAvaliacoes(filme), 5);
    });

    it("Deve retornar 3 avaliações", function () {
      const filme = {
        nome: "Se eu fosse você",
        avaliacoes: [1, 2, 3]
      };

      assert.equal(contarAvaliacoes(filme), 3);
    });

    it("Deve retornar 0 para um filme sem avaliações", function () {
      const filme = {
        nome: "Filme novo",
        avaliacoes: []
      };

      assert.equal(contarAvaliacoes(filme), 0);
    });

  });

  describe("Cálculo da média", function () {

    it("Deve calcular a média 4.4", function () {
      const filme = {
        nome: "Minha mãe é uma peça",
        avaliacoes: [5, 4, 4, 4, 5]
      };

      assert.equal(calcularMedia(filme), 4.4);
    });

    it("Deve calcular a média 3.2", function () {
      const filme = {
        nome: "Saneamento Básico",
        avaliacoes: [3, 4, 2, 3, 4]
      };

      assert.equal(calcularMedia(filme), 3.2);
    });

    it("Deve calcular a média 2", function () {
      const filme = {
        nome: "Se eu fosse você",
        avaliacoes: [1, 2, 3]
      };

      assert.equal(calcularMedia(filme), 2);
    });

    it("Deve retornar média 0 quando não houver avaliações", function () {
      const filme = {
        nome: "Filme novo",
        avaliacoes: []
      };

      assert.equal(calcularMedia(filme), 0);
    });

  });

  describe("Classificação dos filmes", function () {

    it("Deve retornar Filme recomendado", function () {
      const filme = {
        nome: "Minha mãe é uma peça",
        avaliacoes: [5, 4, 4, 4, 5]
      };

      assert.equal(classificarFilme(filme), "Filme recomendado");
    });

    it("Deve retornar Filme razoável", function () {
      const filme = {
        nome: "Saneamento Básico",
        avaliacoes: [3, 4, 2, 3, 4]
      };

      assert.equal(classificarFilme(filme), "Filme razoável");
    });

    it("Deve retornar Filme ruim", function () {
      const filme = {
        nome: "Se eu fosse você",
        avaliacoes: [1, 2, 3]
      };

      assert.equal(classificarFilme(filme), "Filme ruim");
    });

  });

});

