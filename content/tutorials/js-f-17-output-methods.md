---
title: "Exibindo Dados: Explorando console.log, Alerts e Mais"
description: "Aprenda diferentes métodos para exibir dados em JavaScript, desde console.log até alertas interativos"
courseSlug: "javascript-fundamentals"
order: 17
language: "javascript"
initialCode: |
  // Experimente diferentes métodos de output
  
  // 1. Crie um objeto com dados da nave
  const dadosNave = {
    nome: "Explorer",
    velocidade: 1000,
    tripulacao: ["Ana", "Bob"]
  };
  
  // 2. Use diferentes métodos para exibir os dados
  // - Use console.log para dados simples
  // - Use console.table para o objeto completo
  // - Use console.warn para um alerta
  // - Use alert para uma mensagem interativa (comente após testar)
  
validation:
  requiredVariables:
    - name: dadosNave
      type: const
  expectedOutput: |
    Explorer
    ┌────────────┬──────────────────┐
    │  (index)   │      value       │
    ├────────────┼──────────────────┤
    │    nome    │   'Explorer'     │
    │ velocidade │      1000        │
    │ tripulacao │    [Array(2)]    │
    └────────────┴──────────────────┘
    ⚠️ Velocidade alta detectada!
  requiredStatements:
    - console.log(dadosNave.nome)
    - console.table(dadosNave)
    - console.warn
code_solution: |
  const dadosNave = {
    nome: "Explorer",
    velocidade: 1000,
    tripulacao: ["Ana", "Bob"]
  };
  
  // Output simples
  console.log(dadosNave.nome);
  
  // Tabela formatada
  console.table(dadosNave);
  
  // Alerta no console
  console.warn("Velocidade alta detectada!");
  
  // Alerta interativo (comentado após teste)
  // alert(`Nave ${dadosNave.nome} em operação!`);
output_solution: |
  Explorer
  // Tabela formatada será exibida
  ⚠️ Velocidade alta detectada!
highlightedLines: [1, 7, 10, 13]
---

[🚀] ## Central de Comunicações

Navegador, bem-vindo à Central de Comunicações. Aqui você aprenderá diferentes métodos para exibir dados em JavaScript, desde logs simples até mensagens interativas.

[📦] ## Métodos de Output

### 1. Console Básico
```javascript
// Mensagem simples
console.log("Sistema iniciado");

// Múltiplos valores
console.log("Status:", "Online", 100);

// Interpolação
console.log(`Energia: ${energia}%`);
```

### 2. Console Avançado
```javascript
// Tabela formatada
console.table({
    nome: "Nave-1",
    status: "Ativo"
});

// Grupo de logs
console.group("Diagnóstico");
console.log("Verificando sistemas...");
console.log("Tudo OK!");
console.groupEnd();
```

[🎯] ## Tipos Especiais de Output

### 1. Alertas e Avisos
```javascript
// Aviso em amarelo
console.warn("Baixa energia!");

// Erro em vermelho
console.error("Falha crítica!");

// Alerta interativo
alert("Atenção: Sistema iniciando!");
```

### 2. Estilização
```javascript
// Texto colorido
console.log("%cAlerta Crítico!", "color: red; font-size: 20px");

// Múltiplos estilos
console.log(
    "%cSistema%cOnline",
    "color: blue;",
    "color: green; font-weight: bold"
);
```

[💡] ## Dicas & Técnicas

### 1. Debug Avançado
```javascript
// Timer para performance
console.time("operacao");
// ... código ...
console.timeEnd("operacao");

// Rastreamento de chamadas
console.trace("Onde estou?");
```

### 2. Formatação de Objetos
```javascript
// Expandir objeto
console.dir(objeto, { depth: null });

// Contagem de ocorrências
console.count("evento");
console.count("evento");
```

[🎯] ## Fatos Técnicos Importantes

Você sabia? O objeto `console` tem mais de 20 métodos diferentes! Além do famoso `log`, existem métodos para praticamente todas as necessidades de debug e monitoramento.

[⚡] ## Casos de Uso Práticos

```javascript
// Monitoramento de estado
const estado = {
    energia: 100,
    shields: true,
    temperatura: 23
};

// Log básico
console.log("Estado:", estado);

// Visualização em tabela
console.table(estado);

// Agrupamento lógico
console.group("Diagnóstico");
console.log("Energia:", estado.energia);
console.log("Shields:", estado.shields);
console.warn("Temperatura:", estado.temperatura);
console.groupEnd();

// Debug estilizado
console.log(
    "%cSistema de Monitoramento%c v1.0",
    "color: blue; font-size: 20px",
    "color: gray; font-size: 12px"
);
```

[🎮] ## Desafio: Sistema de Monitoramento

Sua missão: Criar um sistema de output completo:

1. Usar `console.log` para dados simples
2. Implementar `console.table` para visualização estruturada
3. Adicionar `console.warn` para alertas
4. Testar um `alert` interativo

Lembre-se: Um bom sistema de output é essencial para monitorar e debugar nossa nave espacial! 🚀
