---
title: "Quando Usar Ponto e Vírgula em JavaScript"
description: "Aprenda quando é necessário, opcional ou recomendado usar ponto e vírgula em seu código JavaScript"
courseSlug: "javascript-fundamentals"
order: 14
language: "javascript"
initialCode: |
  // Identifique onde o ponto e vírgula é necessário
  
  // 1. Múltiplas declarações na mesma linha
  let x = 1 let y = 2
  
  // 2. Início de linha com parênteses
  let z = 5
  (function() {
    console.log(z)
  })()
  
  // 3. Início de linha com colchetes
  let numeros = [1, 2, 3]
  [numeros[0], numeros[2]] = [numeros[2], numeros[0]]
  
validation:
  requiredVariables:
    - name: x
      type: let
    - name: y
      type: let
    - name: z
      type: let
    - name: numeros
      type: let
  expectedOutput: |
    let x = 1; let y = 2;
    
    let z = 5;
    (function() {
      console.log(z);
    })();
    
    let numeros = [1, 2, 3];
    [numeros[0], numeros[2]] = [numeros[2], numeros[0]];
  requiredStatements:
    - "let x = 1;"
    - "let y = 2;"
    - "(function"
    - "[numeros[0], numeros[2]]"
code_solution: |
  let x = 1; let y = 2;
  
  let z = 5;
  (function() {
    console.log(z);
  })();
  
  let numeros = [1, 2, 3];
  [numeros[0], numeros[2]] = [numeros[2], numeros[0]];
output_solution: |
  5
  [3, 2, 1]
highlightedLines: [1, 3, 4, 8, 9]
---

[🚀] ## Estação de Controle de Sintaxe

Navegador, bem-vindo à Estação de Controle de Sintaxe. Aqui você aprenderá exatamente quando é necessário usar ponto e vírgula em JavaScript para evitar erros e manter seu código seguro.

[📦] ## Situações que Exigem Ponto e Vírgula

### 1. Múltiplas Declarações
```javascript
// ⚠️ Perigoso
let a = 1 let b = 2

// ✅ Correto
let a = 1; let b = 2;
```

### 2. Início de Linha com Símbolos Especiais
```javascript
// ⚠️ Perigoso
let x = 5
(function() {})()

// ✅ Correto
let x = 5;
(function() {})();
```

[🎯] ## Casos Opcionais

### 1. Final de Bloco
```javascript
if (condicao) {
    console.log("OK")    // Opcional
}                        // Não necessário

function teste() {
    return true         // Recomendado
}                       // Não necessário
```

### 2. Após Declarações
```javascript
let nome = "Nave"       // Recomendado
const PI = 3.14         // Recomendado
```

[💡] ## Regras de Ouro

### Sempre Use Ponto e Vírgula:
1. **Antes de parênteses no início da linha**
```javascript
let a = 5;
(function() {})();
```

2. **Antes de colchetes no início da linha**
```javascript
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
```

3. **Antes de template literals**
```javascript
let nome = "Nave";
`${nome} pronta`;
```

[🎯] ## Casos Especiais

### 1. IIFE (Immediately Invoked Function Expression)
```javascript
;(function() {
    // código aqui
})()
```

### 2. Módulos
```javascript
import modulo from './modulo';
export default classe;
```

[⚡] ## Situações Seguras (Sem Ponto e Vírgula)

### 1. Após Blocos de Código
```javascript
if (condicao) {
    // código
}  // Sem ponto e vírgula

while (true) {
    // código
}  // Sem ponto e vírgula
```

### 2. Após Declarações de Função
```javascript
function navegar() {
    return true
}  // Sem ponto e vírgula
```

[🎮] ## Desafio: Identificando Pontos Críticos

Sua missão: Corrigir o código fornecido, adicionando ponto e vírgula onde é:

1. Necessário para evitar erros
2. Recomendado para melhor legibilidade
3. Crítico para o funcionamento correto

Lembre-se: Em caso de dúvida, é melhor usar o ponto e vírgula do que arriscar um erro de sintaxe! 🚀
