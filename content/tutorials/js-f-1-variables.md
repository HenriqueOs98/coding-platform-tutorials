---
title: "Variáveis em JavaScript: Armazenando Dados no Ciberespaço"
description: "Aprenda como declarar e usar variáveis em JavaScript, os diferentes tipos de declaração e boas práticas"
courseSlug: "javascript-fundamentals"
order: 1
language: "javascript"
initialCode: |
  // Declare suas variáveis aqui
  // Use let, const ou var conforme necessário
  
  // Declare uma variável chamada 'energia' com valor 100
  
  // Declare uma constante chamada 'CAPACIDADE_MAXIMA' com valor 1000
  
  // Declare uma variável chamada 'nomeNave' com o valor "CyberShip-X"
  
  // Imprima todas as variáveis no console
validation:
  requiredVariables:
    - name: energia
      type: let
      value: 100
    - name: CAPACIDADE_MAXIMA
      type: const
      value: 1000
    - name: nomeNave
      type: let
      value: "CyberShip-X"
  expectedOutput: |
    100
    1000
    CyberShip-X
  requiredStatements:
    - console.log(energia)
    - console.log(CAPACIDADE_MAXIMA)
    - console.log(nomeNave)
code_solution: |
  let energia = 100;
  const CAPACIDADE_MAXIMA = 1000;
  let nomeNave = "CyberShip-X";
  
  console.log(energia);
  console.log(CAPACIDADE_MAXIMA);
  console.log(nomeNave);
output_solution: |
  100
  1000
  CyberShip-X
highlightedLines: [1, 2, 3]
---

[🚀] Bem-vindo à Estação Espacial JS-1024

Navegador, você acaba de entrar no módulo de treinamento da Estação Espacial JS-1024. Aqui você aprenderá sobre um dos conceitos mais fundamentais da programação em JavaScript: as variáveis - os contêineres de dados que mantêm nossa nave espacial digital funcionando.

[📦] Tipos de Declaração de Variáveis

No ciberespaço do JavaScript, temos três formas de declarar variáveis, cada uma com suas características especiais:

1. `let` - Para dados que podem mudar durante a missão
```javascript
let energiaNave = 100; // Pode ser alterado posteriormente
energiaNave = 90; // Valor atualizado após uso de energia
```

2. `const` - Para dados que devem permanecer fixos
```javascript
const VELOCIDADE_LUZ = 299792458; // Nunca poderá ser alterado
```

3. `var` (legado) - O antigo método, ainda funcional mas menos recomendado
```javascript
var combustivel = 1000; // Forma antiga, evite usar
```

[🎯] Conceitos-Chave

- Variáveis são como contêineres digitais que armazenam dados
- Use `let` para valores que podem mudar
- Use `const` para valores que devem permanecer constantes
- Nomes de variáveis são case-sensitive: `energia` ≠ `Energia`

[💡] Dicas & Links Úteis

- Sempre inicialize suas variáveis antes de usá-las
- Use nomes descritivos que indicam o propósito da variável
- Para constantes, use MAIÚSCULAS_COM_UNDERSCORE
- [📚 MDN Web Docs - Variáveis](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#declarações)

[🎯] Fatos Curiosos

Você sabia? O JavaScript foi criado em apenas 10 dias em 1995 por Brendan Eich! Inicialmente chamado de Mocha, o nome foi mudado para LiveScript e finalmente JavaScript para aproveitar a popularidade do Java na época.

[⚡] Exemplos Práticos

```javascript
// Sistema de energia da nave
let nivelEnergia = 100;
const ENERGIA_MAXIMA = 1000;

// Nome da tripulação
let comandante = "Ada";
comandante = "Grace"; // Podemos alterar porque usamos let

// ID da nave (constante)
const NAVE_ID = "X-1024";
```

[🎮] Desafio: Sistema de Monitoramento da Nave

Sua missão: Criar um sistema básico de monitoramento para nossa nave espacial. Você precisa:

1. Declarar uma variável `energia` com valor 100
2. Criar uma constante `CAPACIDADE_MAXIMA` com valor 1000
3. Definir uma variável `nomeNave` com o valor "CyberShip-X"
4. Imprimir todos os valores no console

Use o código inicial fornecido e complete a missão! Boa sorte, navegador! 🚀
