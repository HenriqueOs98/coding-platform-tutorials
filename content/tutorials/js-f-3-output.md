---
title: "Exibindo Dados em JavaScript: Logs e Alertas"
description: "Aprenda diferentes maneiras de exibir dados em JavaScript, desde console.log até alertas"
courseSlug: "javascript-fundamentals"
order: 3
language: "javascript"
initialCode: |
  // Use diferentes métodos para exibir a mensagem:
  // "Iniciando sistemas da nave..."
  
  // 1. Use console.log
  
  // 2. Use console.info
  
  // 3. Use console.warn para um alerta
  
  // 4. Use alert (comente esta linha após testar)
  
validation:
  requiredVariables: []
  expectedOutput: |
    Iniciando sistemas da nave...
    Iniciando sistemas da nave...
    ⚠️ Iniciando sistemas da nave...
  requiredStatements:
    - console.log("Iniciando sistemas da nave...")
    - console.info("Iniciando sistemas da nave...")
    - console.warn("Iniciando sistemas da nave...")
code_solution: |
  console.log("Iniciando sistemas da nave...");
  console.info("Iniciando sistemas da nave...");
  console.warn("Iniciando sistemas da nave...");
  // alert("Iniciando sistemas da nave..."); // Comentado após teste
output_solution: |
  Iniciando sistemas da nave...
  Iniciando sistemas da nave...
  ⚠️ Iniciando sistemas da nave...
highlightedLines: [1, 2, 3]
---

[🚀] Terminal de Comunicação da Nave

Navegador, bem-vindo ao módulo de comunicação da nossa nave espacial. Aqui você aprenderá diferentes formas de transmitir mensagens e dados no console de comando JavaScript.

[📦] Métodos de Saída de Dados

No painel de controle JavaScript, temos várias formas de exibir informações:

1. `console.log()` - Transmissão padrão
```javascript
console.log("Status da nave: operacional");
```

2. `console.info()` - Informações importantes
```javascript
console.info("Coordenadas atualizadas: X-234, Y-567");
```

3. `console.warn()` - Alertas de baixa prioridade
```javascript
console.warn("Níveis de energia em 30%");
```

4. `console.error()` - Alertas críticos
```javascript
console.error("FALHA NO SISTEMA DE NAVEGAÇÃO!");
```

5. `alert()` - Mensagem de emergência
```javascript
alert("Evacuação imediata requerida!");
```

[🎯] Conceitos-Chave

- `console.log()` é o método mais comum para debug
- `console.info()` é similar ao log, mas pode ter formatação especial
- `console.warn()` exibe mensagens em amarelo com ícone de aviso
- `console.error()` exibe mensagens em vermelho com ícone de erro
- `alert()` interrompe a execução e mostra uma janela pop-up

[💡] Dicas & Links Úteis

- Use `console.log()` durante o desenvolvimento
- Evite `alert()` em produção, pois interrompe a experiência do usuário
- Utilize `console.table()` para dados tabulares
- [📚 MDN Web Docs - Console](https://developer.mozilla.org/pt-BR/docs/Web/API/Console)

[🎯] Fatos Curiosos

Você sabia? O objeto `console` foi inspirado no Firebug, uma extensão antiga do Firefox! Hoje, todas as ferramentas de desenvolvimento modernas incluem um console poderoso com recursos avançados de debug.

[⚡] Exemplos Práticos

```javascript
// Log simples
console.log("Sistema iniciado");

// Log com múltiplos valores
console.log("Temperatura:", 23, "Pressão:", 1013);

// Log estilizado
console.log("%cAlerta Crítico!", "color: red; font-size: 20px");

// Tabela de dados
console.table([
    { sistema: "Navegação", status: "Online" },
    { sistema: "Propulsão", status: "Standby" }
]);
```

[🎮] Desafio: Sistema de Comunicação da Nave

Sua missão: Implementar diferentes métodos de comunicação para nossa nave espacial:

1. Use `console.log()` para mensagem padrão
2. Use `console.info()` para informação importante
3. Use `console.warn()` para um alerta
4. Teste um `alert()` (depois comente o código)

Todos devem exibir a mensagem: "Iniciando sistemas da nave..."

Complete o código inicial e mantenha nossa nave informada! 🚀
