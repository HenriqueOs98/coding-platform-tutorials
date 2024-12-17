---
title: "Java vs JavaScript: Por que São Diferentes?"
description: "Explore as razões históricas e técnicas que fazem Java e JavaScript serem linguagens completamente diferentes"
courseSlug: "javascript-fundamentals"
order: 11
language: "javascript"
initialCode: |
  // Demonstre as diferenças fundamentais entre Java e JavaScript
  
  // 1. Crie uma variável que muda de tipo (JavaScript)
  let dadoFlexivel;
  
  // 2. Demonstre função como objeto de primeira classe
  
  // 3. Mostre um exemplo de closure
  
validation:
  requiredVariables:
    - name: dadoFlexivel
      type: let
  expectedOutput: |
    número: 42
    texto: "42"
    função executada!
    Valor no closure: 10
  requiredStatements:
    - console.log("número:", dadoFlexivel)
    - console.log("texto:", dadoFlexivel)
    - "function"
code_solution: |
  let dadoFlexivel = 42;
  console.log("número:", dadoFlexivel);
  
  dadoFlexivel = "42";
  console.log("texto:", dadoFlexivel);
  
  // Função como objeto
  const minhaFuncao = function() {
    console.log("função executada!");
  };
  minhaFuncao();
  
  // Closure
  function criarContador() {
    let valor = 10;
    return function() {
      console.log("Valor no closure:", valor);
    };
  }
  const contador = criarContador();
  contador();
output_solution: |
  número: 42
  texto: "42"
  função executada!
  Valor no closure: 10
highlightedLines: [1, 4, 8, 13]
---

[🚀] ## Laboratório de Análise Tecnológica

Navegador, bem-vindo ao Laboratório de Análise Tecnológica. Aqui vamos explorar por que Java e JavaScript, apesar do nome similar, são linguagens fundamentalmente diferentes.

[📦] ## Origens e Propósitos

### 1. História e Criação
```javascript
// JavaScript - Criado pela Netscape em 1995
// Objetivo: Linguagem leve para web
console.log("JavaScript: Brendan Eich, 1995");

// Java - Criado pela Sun Microsystems em 1991
// Objetivo: Linguagem para sistemas distribuídos
System.out.println("Java: James Gosling, 1991");
```

### 2. Ambiente de Execução
```javascript
// JavaScript - Roda principalmente no navegador
document.getElementById("app").innerHTML = "Olá!";

// Java - Roda na JVM (Java Virtual Machine)
// public class App {
//     public static void main(String[] args) {
//         System.out.println("Olá!");
//     }
// }
```

[🎯] ## Diferenças Fundamentais

### Paradigmas de Programação
- **JavaScript**: Multi-paradigma, baseado em protótipos
- **Java**: Estritamente orientado a objetos

### Sistema de Tipos
- **JavaScript**: Dinâmico e flexível
- **Java**: Estático e rígido

### Execução
- **JavaScript**: Interpretado
- **Java**: Compilado para bytecode

[💡] ## Características Exclusivas

### JavaScript
- Funções como cidadãos de primeira classe
- Closures e escopo léxico
- Prototypes e herança prototipal
- Event loop e assincronicidade

### Java
- Tipos genéricos
- Threads nativas
- Sobrecarga de métodos
- Verificação de tipos em tempo de compilação

[🎯] ## Fatos Históricos Curiosos

Você sabia? O JavaScript foi criado em apenas 10 dias por Brendan Eich! O nome "JavaScript" foi uma decisão de marketing da Netscape para aproveitar a popularidade do Java, mesmo sendo linguagens completamente diferentes em sua essência.

[⚡] ## Exemplos de Diferenças Práticas

```javascript
// JavaScript - Flexibilidade de tipos
let valor = 42;        // número
valor = "42";          // string
valor = true;          // boolean

// JavaScript - Funções como valores
const somar = function(a, b) {
    return a + b;
};

// JavaScript - Closures
function criarContador() {
    let count = 0;
    return function() {
        return ++count;
    };
}

// JavaScript - Prototypes
const objeto = {
    metodo() {
        return "Olá!";
    }
};
```

[🎮] ## Desafio: Explorando Características Únicas

Sua missão: Demonstrar características exclusivas do JavaScript:

1. Criar uma variável que muda de tipo dinamicamente
2. Demonstrar função como objeto de primeira classe
3. Criar um exemplo de closure

Lembre-se: Cada linguagem tem seu propósito específico - JavaScript brilha na web, enquanto Java se destaca em sistemas empresariais! 🚀
