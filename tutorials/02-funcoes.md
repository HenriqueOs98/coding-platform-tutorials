---
title: "Funções em JavaScript"
description: "Aprenda a criar e usar funções em JavaScript"
order: 2
initialCode: "// Defina sua função aqui\n"
solution: "function saudacao(nome) {\n  return `Olá, ${nome}!`;\n}\n\nconsole.log(saudacao('Mundo'));"
---

# Funções em JavaScript

Funções são blocos de código reutilizáveis que realizam uma tarefa específica.

## Declaração de Função

```javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao('Mundo')); // Saída: Olá, Mundo!
Funções de Flecha (Arrow Functions - ES6)
javascriptCopyconst multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5)); // Saída: 20
Desafio
Crie uma função que receba dois parâmetros e retorne a soma deles.