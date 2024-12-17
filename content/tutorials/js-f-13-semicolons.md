---
title: "Ponto e Vírgula em JavaScript: Boas Práticas para Código Limpo"
description: "Aprenda quando e como usar ponto e vírgula em JavaScript, seguindo as melhores práticas de codificação"
courseSlug: "javascript-fundamentals"
order: 13
language: "javascript"
initialCode: |
  // Adicione ponto e vírgula onde necessário
  
  // 1. Declarações de variáveis
  let energia = 100
  const LIMITE = 1000
  
  // 2. Expressões de função
  const calcular = function() {
    return energia * 2
  }
  
  // 3. Chamadas de função
  calcular()
  console.log(energia)
  
validation:
  requiredVariables:
    - name: energia
      type: let
    - name: LIMITE
      type: const
    - name: calcular
      type: function
  expectedOutput: |
    let energia = 100;
    const LIMITE = 1000;
    
    const calcular = function() {
      return energia * 2;
    };
    
    calcular();
    console.log(energia);
  requiredStatements:
    - "let energia = 100;"
    - "const LIMITE = 1000;"
    - "return energia * 2;"
    - "calcular();"
code_solution: |
  let energia = 100;
  const LIMITE = 1000;
  
  const calcular = function() {
    return energia * 2;
  };
  
  calcular();
  console.log(energia);
output_solution: |
  100
highlightedLines: [1, 2, 4, 5, 8, 9]
---

[🚀] ## Centro de Controle de Sintaxe

Navegador, bem-vindo ao Centro de Controle de Sintaxe. Aqui você aprenderá as melhores práticas para uso de ponto e vírgula em JavaScript, garantindo um código limpo e consistente.

[📦] ## Regras Básicas

### 1. Declarações Simples
```javascript
let velocidade = 100;              // ✅ Recomendado
const ACELERACAO = 9.8;           // ✅ Recomendado
let posicao = calcularPosicao()   // ⚠️ Funciona, mas não recomendado
```

### 2. Expressões de Função
```javascript
const navegar = function() {
    return "Navegando";
};  // ✅ Ponto e vírgula após expressão de função

function pousar() {
    return "Pousando";
}   // ❌ Não necessário após declaração de função
```

[🎯] ## Casos Especiais

### 1. IIFE (Immediately Invoked Function Expression)
```javascript
;(function() {
    console.log("Iniciando sistemas");
})();  // Ponto e vírgula no início previne erros
```

### 2. Arrays e Objetos
```javascript
let tripulacao = ["Ana", "Bob"]    // Array
let nave = {                       // Objeto
    nome: "Explorer",
    tipo: "Pesquisa"
};
```

[💡] ## Dicas & Boas Práticas

### Sempre Use Ponto e Vírgula:
- Após declarações de variáveis
- Após expressões
- Após comandos de retorno
- Após chamadas de função

### Não Precisa Usar:
- Após blocos de código `{}`
- Após declarações de função
- Após estruturas de controle (if, for, while)

[🎯] ## Fatos Técnicos Importantes

Você sabia? O JavaScript tem um mecanismo chamado ASI (Automatic Semicolon Insertion) que insere pontos e vírgula automaticamente em certos casos! No entanto, confiar apenas no ASI pode levar a comportamentos inesperados.

[⚡] ## Exemplos Práticos

```javascript
// ✅ Código Bem Formatado
let status = "Pronto";
const VELOCIDADE_MAX = 1000;

const iniciar = function() {
    return "Iniciando...";
};

console.log(status);
iniciar();

// ⚠️ Casos Problemáticos
let a = b + c
[d, e].forEach(console.log)  // Pode causar erro!

// ✅ Correção
let a = b + c;
[d, e].forEach(console.log);
```

[🎮] ## Desafio: Formatação Correta

Sua missão: Adicionar pontos e vírgula corretamente no código:

1. Em declarações de variáveis
2. Em expressões de função
3. Em chamadas de função

Lembre-se: Um código bem formatado é como uma nave bem mantida - funciona melhor e é mais fácil de pilotar! 🚀
