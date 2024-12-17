---
title: "Java vs JavaScript: Entendendo as Diferenças"
description: "Descubra as principais diferenças entre Java e JavaScript, duas linguagens distintas com nomes semelhantes"
courseSlug: "javascript-fundamentals"
order: 10
language: "javascript"
initialCode: |
  // Compare a sintaxe entre Java e JavaScript
  
  // 1. Declare uma classe em JavaScript
  class NaveEspacial {
    // Adicione um construtor
    
    // Adicione um método
  }
  
  // 2. Crie um array e use um método de array
  const planetas = ["Terra", "Marte", "Júpiter"];
  
  // 3. Use uma função de callback (exclusiva do JavaScript)
  
validation:
  requiredVariables:
    - name: NaveEspacial
      type: class
    - name: planetas
      type: const
  expectedOutput: |
    class NaveEspacial {
      constructor(nome) {
        this.nome = nome;
      }
      
      voar() {
        return `${this.nome} decolando!`;
      }
    }
    
    const planetas = ["Terra", "Marte", "Júpiter"];
    planetas.forEach(planeta => console.log(planeta));
  requiredStatements:
    - "class NaveEspacial"
    - "constructor"
    - "const planetas"
    - "forEach"
code_solution: |
  class NaveEspacial {
    constructor(nome) {
      this.nome = nome;
    }
    
    voar() {
      return `${this.nome} decolando!`;
    }
  }
  
  const planetas = ["Terra", "Marte", "Júpiter"];
  planetas.forEach(planeta => console.log(planeta));
output_solution: |
  Terra
  Marte
  Júpiter
highlightedLines: [1, 2, 6, 10, 11]
---

[🚀] Centro de Estudos Comparativos

Navegador, bem-vindo ao Centro de Estudos Comparativos. Aqui você aprenderá as diferenças cruciais entre duas linguagens importantes: Java e JavaScript, que apesar dos nomes semelhantes, são tecnologias muito diferentes.

[📦] Principais Diferenças

1. **Tipagem**
```javascript
// JavaScript - Tipagem dinâmica
let velocidade = 100;      // número
velocidade = "rápido";     // pode mudar para string

// Java - Tipagem estática
// int velocidade = 100;
// velocidade = "rápido";  // Erro em Java!
```

2. **Orientação a Objetos**
```javascript
// JavaScript - Protótipos e Classes
class Nave {
  constructor() {
    this.tipo = "Exploração";
  }
}

// Java requer mais estrutura formal
// public class Nave {
//   private String tipo;
//   public Nave() {
//     this.tipo = "Exploração";
//   }
// }
```

[🎯] Conceitos-Chave

JavaScript:
- Linguagem interpretada
- Tipagem dinâmica
- Roda principalmente no navegador
- Baseada em protótipos
- Funções são cidadãos de primeira classe

Java:
- Linguagem compilada
- Tipagem estática
- Roda na JVM
- Orientação a objetos clássica
- Funções são membros de classes

[💡] Dicas & Links Úteis

- Não confunda as sintaxes das duas linguagens
- JavaScript é mais flexível, Java mais estruturado
- JavaScript é essencial para web, Java para aplicações robustas
- [📚 MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[🎯] Fatos Curiosos

Você sabia? O nome "JavaScript" foi escolhido por razões de marketing! Originalmente chamado "Mocha", depois "LiveScript", foi renomeado para JavaScript para aproveitar a popularidade do Java na época. Apesar do nome similar, as linguagens foram desenvolvidas por empresas diferentes e têm propósitos distintos!

[⚡] Comparações Práticas

```javascript
// JavaScript - Funções como valores
const saudar = function(nome) {
  return `Olá, ${nome}!`;
};

// JavaScript - Arrays flexíveis
let tripulacao = ["Ana", 42, true, {cargo: "Capitã"}];

// JavaScript - Callbacks e Promises
fetch('/api/dados')
  .then(response => response.json())
  .then(dados => console.log(dados));

// JavaScript - Desestruturação
const {x, y} = coordenadas;
const [primeiro, ...resto] = lista;

// Em Java, estas operações seriam muito diferentes!
```

[🎮] Desafio: Explorando as Diferenças

Sua missão: Criar código que demonstre características únicas do JavaScript:

1. Criar uma classe usando a sintaxe moderna do JavaScript
2. Trabalhar com arrays de forma dinâmica
3. Usar uma função de callback (característica do JavaScript)

Lembre-se: JavaScript e Java são como diferentes naves espaciais - cada uma tem seu próprio propósito e características únicas! 🚀
