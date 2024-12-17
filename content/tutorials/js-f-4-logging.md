---
title: "Diferentes Formas de Log em JavaScript"
description: "Explore os diversos métodos de logging disponíveis em JavaScript para debug e monitoramento"
courseSlug: "javascript-fundamentals"
order: 4
language: "javascript"
initialCode: |
  // Crie um objeto com dados da nave
  const dadosNave = {
    nome: "Explorer-1",
    velocidade: 1000,
    tripulacao: ["Ana", "Bob", "Carol"]
  };
  
  // 1. Use console.log para exibir dadosNave
  
  // 2. Use console.table para exibir dadosNave
  
  // 3. Use console.group para agrupar logs:
  //    - Nome da nave
  //    - Velocidade
  //    - Tripulação (use console.log dentro do grupo)
  
validation:
  requiredVariables:
    - name: dadosNave
      type: const
  expectedOutput: |
    {nome: "Explorer-1", velocidade: 1000, tripulacao: Array(3)}
    ┌─────────┬──────────────┐
    │ (index) │    value     │
    ├─────────┼──────────────┤
    │  nome   │ 'Explorer-1' │
    │ veloc...│    1000      │
    │ tripu...│    [...]     │
    └─────────┴──────────────┘
    Dados da Nave:
      Nome: Explorer-1
      Velocidade: 1000
      Tripulação: ["Ana", "Bob", "Carol"]
  requiredStatements:
    - console.log(dadosNave)
    - console.table(dadosNave)
    - console.group("Dados da Nave:")
code_solution: |
  const dadosNave = {
    nome: "Explorer-1",
    velocidade: 1000,
    tripulacao: ["Ana", "Bob", "Carol"]
  };
  
  console.log(dadosNave);
  console.table(dadosNave);
  
  console.group("Dados da Nave:");
  console.log("Nome:", dadosNave.nome);
  console.log("Velocidade:", dadosNave.velocidade);
  console.log("Tripulação:", dadosNave.tripulacao);
  console.groupEnd();
output_solution: |
  {nome: "Explorer-1", velocidade: 1000, tripulacao: Array(3)}
  ┌─────────┬──────────────┐
  │ (index) │    value     │
  ├─────────┼──────────────┤
  │  nome   │ 'Explorer-1' │
  │ veloc...│    1000      │
  │ tripu...│    [...]     │
  └─────────┴──────────────┘
  Dados da Nave:
    Nome: Explorer-1
    Velocidade: 1000
    Tripulação: ["Ana", "Bob", "Carol"]
highlightedLines: [1, 7, 9]
---

[🚀] Centro de Monitoramento Avançado

Navegador, você está acessando o Centro de Monitoramento Avançado. Aqui você aprenderá métodos sofisticados de logging para monitorar todos os sistemas da nave com precisão.

[📦] Métodos Avançados de Log

No painel de controle JavaScript, temos ferramentas especializadas para diferentes tipos de monitoramento:

1. `console.table()` - Visualização em Tabela
```javascript
const sistemas = [
    { nome: "Propulsão", status: "Online" },
    { nome: "Navegação", status: "Standby" }
];
console.table(sistemas);
```

2. `console.group()` - Agrupamento de Logs
```javascript
console.group("Status da Missão");
console.log("Dia: 1");
console.log("Objetivo: Exploração");
console.groupEnd();
```

3. `console.time()` - Medição de Tempo
```javascript
console.time("Cálculo de Rota");
// ... operações ...
console.timeEnd("Cálculo de Rota");
```

[🎯] Conceitos-Chave

- `console.table()` organiza dados em formato tabular
- `console.group()` cria grupos visuais de logs relacionados
- `console.time()` mede o tempo de execução de operações
- `console.dir()` exibe propriedades de objetos em formato interativo

[💡] Dicas & Links Úteis

- Use `console.table()` para dados estruturados
- Agrupe logs relacionados com `console.group()`
- Utilize `console.time()` para otimização de performance
- [📚 MDN Web Docs - Console API](https://developer.mozilla.org/pt-BR/docs/Web/API/Console)

[🎯] Fatos Curiosos

Você sabia? O método `console.table()` foi inicialmente implementado no Firebug e se tornou tão popular que todos os navegadores modernos o adotaram! É uma das ferramentas mais úteis para visualizar dados estruturados durante o desenvolvimento.

[⚡] Exemplos Práticos

```javascript
// Log de objeto complexo
const nave = {
    modelo: "X-Wing",
    sistemas: ["Propulsão", "Armas", "Escudos"]
};
console.dir(nave);

// Medição de performance
console.time("Inicialização");
for(let i = 0; i < 1000000; i++) {
    // Simulando operações
}
console.timeEnd("Inicialização");

// Logs agrupados
console.group("Diagnóstico");
console.log("Verificando sistemas...");
console.log("Calibrando sensores...");
console.groupEnd();
```

[🎮] Desafio: Sistema de Monitoramento

Sua missão: Implementar um sistema de monitoramento completo para nossa nave:

1. Criar um objeto com dados da nave
2. Usar `console.log()` para exibição básica
3. Usar `console.table()` para visualização estruturada
4. Implementar `console.group()` para agrupar informações relacionadas

Complete o código inicial e mantenha nossa nave sob monitoramento constante! 🚀
