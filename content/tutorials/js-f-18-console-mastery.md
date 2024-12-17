---
title: "Dominando console.log para Debug em JavaScript"
description: "Aprenda técnicas avançadas de debugging usando console.log e outros métodos do console em JavaScript"
courseSlug: "javascript-fundamentals"
order: 18
language: "javascript"
initialCode: |
  // Pratique técnicas avançadas de debugging
  
  // 1. Crie uma função com múltiplos pontos de debug
  function processarDados(dados) {
    // Adicione logs estratégicos aqui
    
    // Simule processamento
    const resultado = dados.map(d => d * 2);
    
    // Mais logs aqui
    
    return resultado;
  }
  
  // 2. Crie um objeto complexo para testar diferentes métodos
  const sistemaNave = {
    nome: "Explorer",
    status: {
      energia: 100,
      shields: true
    },
    tripulacao: ["Ana", "Bob"]
  };
  
  // 3. Implemente diferentes técnicas de debug
  
validation:
  requiredVariables:
    - name: processarDados
      type: function
    - name: sistemaNave
      type: const
  expectedOutput: |
    📍 Iniciando processamento...
    📊 Dados recebidos: [1, 2, 3]
    ⚡ Processando... 
    ✅ Resultado: [2, 4, 6]
    
    Sistema:
      Nome: Explorer
      Energia: 100
      Shields: true
      Tripulação: ["Ana", "Bob"]
  requiredStatements:
    - console.log("📍 Iniciando processamento...")
    - console.group
    - console.table
code_solution: |
  function processarDados(dados) {
    console.log("📍 Iniciando processamento...");
    console.log("📊 Dados recebidos:", dados);
    
    console.log("⚡ Processando...");
    const resultado = dados.map(d => d * 2);
    
    console.log("✅ Resultado:", resultado);
    return resultado;
  }
  
  const sistemaNave = {
    nome: "Explorer",
    status: {
      energia: 100,
      shields: true
    },
    tripulacao: ["Ana", "Bob"]
  };
  
  console.group("Sistema:");
  console.log("Nome:", sistemaNave.nome);
  console.log("Energia:", sistemaNave.status.energia);
  console.log("Shields:", sistemaNave.status.shields);
  console.log("Tripulação:", sistemaNave.tripulacao);
  console.groupEnd();
  
  // Teste a função
  processarDados([1, 2, 3]);
output_solution: |
  📍 Iniciando processamento...
  📊 Dados recebidos: [1, 2, 3]
  ⚡ Processando... 
  ✅ Resultado: [2, 4, 6]
  
  Sistema:
    Nome: Explorer
    Energia: 100
    Shields: true
    Tripulação: ["Ana", "Bob"]
highlightedLines: [2, 3, 5, 7, 19, 20, 21, 22, 23]
---

[🚀] ## Laboratório de Debugging Avançado

Navegador, bem-vindo ao Laboratório de Debugging Avançado. Aqui você aprenderá técnicas profissionais para debug usando o console do JavaScript em toda sua potência.

[📦] ## Técnicas Avançadas de Console

### 1. Debug Contextual
```javascript
// Adicione contexto aos seus logs
console.log("📍 Função:", nomeFuncao);
console.log("📊 Dados:", dados);
console.log("⚡ Resultado:", resultado);

// Use grupos para organizar
console.group("🔍 Análise de Dados");
console.log("Entrada:", entrada);
console.log("Saída:", saida);
console.groupEnd();
```

### 2. Formatação Avançada
```javascript
// Estilização personalizada
console.log(
    "%c⚠️ Alerta Crítico",
    "color: red; font-size: 20px; font-weight: bold;"
);

// Múltiplos estilos
console.log(
    "%cSistema%c: %cOnline",
    "color: blue;",
    "color: black;",
    "color: green; font-weight: bold"
);
```

[🎯] ## Métodos Especializados

### 1. Performance e Timing
```javascript
// Medir tempo de execução
console.time("⏱️ Operação");
// ... código ...
console.timeEnd("⏱️ Operação");

// Contar ocorrências
console.count("🔄 Evento");
```

### 2. Inspeção de Objetos
```javascript
// Visualização em tabela
console.table(objeto);

// Inspeção profunda
console.dir(objeto, { depth: null });

// Assert para testes
console.assert(condicao, "Erro se falso");
```

[💡] ## Estratégias de Debug

### 1. Pontos de Verificação
```javascript
function processar(dados) {
    console.log("➡️ Entrada:", dados);
    
    console.group("🔄 Processamento");
    // ... código ...
    console.groupEnd();
    
    console.log("⬅️ Saída:", resultado);
}
```

### 2. Rastreamento
```javascript
// Stack trace
console.trace("🔍 Onde estou?");

// Condicionais
if (debug) {
    console.debug("🐛 Info de debug:", info);
}
```

[🎯] ## Dicas Profissionais

### 1. Formatação de Dados
```javascript
// Objetos complexos
console.log(JSON.stringify(obj, null, 2));

// Arrays grandes
console.table(array.slice(0, 5)); // Primeiros 5
```

### 2. Debug Condicional
```javascript
// Debug seletivo
const DEBUG = true;
DEBUG && console.log("🐛 Debug:", info);

// Breakpoints condicionais
console.log("🔍 Valor:", x > 100 ? x : null);
```

[⚡] ## Exemplos Práticos

```javascript
// Sistema de monitoramento completo
class SistemaMonitoramento {
    constructor() {
        console.group("🚀 Iniciando Sistema");
        console.time("⏱️ Inicialização");
        
        this.inicializar();
        
        console.timeEnd("⏱️ Inicialização");
        console.groupEnd();
    }
    
    inicializar() {
        console.log("📡 Verificando subsistemas...");
        console.table({
            energia: "100%",
            shields: "Online",
            navegacao: "Calibrada"
        });
    }
}
```

[🎮] ## Desafio: Debug Profissional

Sua missão: Implementar um sistema de debug completo:

1. Criar função com múltiplos pontos de verificação
2. Usar diferentes métodos do console
3. Implementar grupos e estilos
4. Monitorar performance

Lembre-se: Um bom sistema de debug é como ter câmeras de segurança em toda a nave - você sempre sabe o que está acontecendo! 🚀
