---
title: "Erros Comuns com Ponto e Vírgula em JavaScript"
description: "Aprenda a identificar e evitar os erros mais comuns relacionados ao uso de ponto e vírgula em JavaScript"
courseSlug: "javascript-fundamentals"
order: 16
language: "javascript"
initialCode: |
  // Corrija os erros de ponto e vírgula neste código
  
  // 1. Erro com IIFE
  (function() {
    console.log("Iniciando...")
  })()
  
  // 2. Erro com array no início da linha
  let numero = 42
  [1, 2, 3].map(n => n * 2)
  
  // 3. Erro com return
  function calcular() {
    return
    {
      resultado: 42
    }
  }
  
validation:
  requiredVariables:
    - name: numero
      type: let
    - name: calcular
      type: function
  expectedOutput: |
    ;(function() {
      console.log("Iniciando...");
    })();
    
    let numero = 42;
    [1, 2, 3].map(n => n * 2);
    
    function calcular() {
      return {
        resultado: 42
      };
    }
  requiredStatements:
    - ";(function"
    - "let numero = 42;"
    - "return {"
code_solution: |
  ;(function() {
    console.log("Iniciando...");
  })();
  
  let numero = 42;
  [1, 2, 3].map(n => n * 2);
  
  function calcular() {
    return {
      resultado: 42
    };
  }
output_solution: |
  Iniciando...
  [2, 4, 6]
  { resultado: 42 }
highlightedLines: [1, 5, 6, 8, 9, 10]
---

[🚀] ## Centro de Prevenção de Erros

Navegador, bem-vindo ao Centro de Prevenção de Erros. Aqui você aprenderá a identificar e corrigir os erros mais comuns relacionados ao uso de ponto e vírgula em JavaScript.

[📦] ## Erros Comuns

### 1. IIFE Sem Ponto e Vírgula Inicial
```javascript
// ⚠️ Pode causar erro
(function() {
    console.log("Erro!");
})()

// ✅ Correto
;(function() {
    console.log("Correto!");
})();
```

### 2. Arrays no Início da Linha
```javascript
// ⚠️ Erro comum
let x = 5
[1, 2, 3].forEach(console.log)  // Interpretado como x[1,2,3]!

// ✅ Correto
let x = 5;
[1, 2, 3].forEach(console.log);
```

[🎯] ## Situações Problemáticas

### 1. Return com Quebra de Linha
```javascript
// ⚠️ Return retorna undefined
function errado() {
    return
    {
        valor: 42
    }
}

// ✅ Correto
function correto() {
    return {
        valor: 42
    };
}
```

### 2. Template Literals
```javascript
// ⚠️ Pode causar erro
let a = 5
`${a} é um número`  // Pode ser interpretado como chamada de função

// ✅ Correto
let a = 5;
`${a} é um número`;
```

[💡] ## Como Evitar Erros

### 1. Use Ponto e Vírgula Antes de:
- Parênteses no início da linha
- Colchetes no início da linha
- Template literals no início da linha
- Operador mais unário (+) no início da linha

### 2. Mantenha Return com Chaves:
```javascript
// ✅ Sempre use esta forma
return {
    // objeto aqui
};
```

[🎯] ## Casos Especiais

### 1. Módulos
```javascript
// ⚠️ Pode causar problemas
export default class {}
[].forEach(() => {})

// ✅ Correto
export default class {};
[].forEach(() => {});
```

### 2. Destructuring
```javascript
// ⚠️ Cuidado com
let a = 5
[a] = [1]  // Precisa de ponto e vírgula antes

// ✅ Correto
let a = 5;
[a] = [1];
```

[⚡] ## Ferramentas de Prevenção

### 1. Linters
```javascript
// ESLint pode ajudar a encontrar estes erros
// .eslintrc
{
    "semi": ["error", "always"]
}
```

### 2. Formatadores
```javascript
// Prettier adiciona ponto e vírgula automaticamente
// prettier.config.js
module.exports = {
    semi: true
};
```

[🎮] ## Desafio: Correção de Erros

Sua missão: Corrigir os erros comuns no código fornecido:

1. Corrigir IIFE para evitar erros de execução
2. Corrigir problema com array no início da linha
3. Corrigir return com objeto

Lembre-se: A prevenção de erros é crucial para manter nossos sistemas funcionando perfeitamente! 🚀
