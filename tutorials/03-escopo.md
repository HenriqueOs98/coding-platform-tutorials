---
title: "Escopo em JavaScript"
description: "Compreendendo o escopo de variáveis e fechamentos (closures) em JavaScript"
order: 3
initialCode: "// Explore o escopo de variáveis\n"
solution: "function criarContador() {\n  let contador = 0;\n  return function() {\n    return ++contador;\n  };\n}\n\nconst contador = criarContador();\nconsole.log(contador()); // 1\nconsole.log(contador()); // 2"
---

# Compreendendo Escopo em JavaScript

O escopo determina a acessibilidade das variáveis em diferentes partes do seu código.

## Escopo Global
Variáveis declaradas fora de qualquer função estão no escopo global.

```javascript
let variavelGlobal = 'Eu sou global';

function funcaoExemplo() {
  console.log(variavelGlobal); // Acessível
}
Exemplo de Fechamento (Closure)
javascriptCopyfunction criarContador() {
  let contador = 0;
  return function() {
    return ++contador;
  };
}

const contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2
Desafio
Crie uma função que demonstre um fechamento (closure) mantendo um contador privado.
