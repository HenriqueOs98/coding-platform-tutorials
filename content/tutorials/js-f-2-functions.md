---
title: "Funções em JavaScript: Programando os Sistemas da Nave"
description: "Aprenda a criar e usar funções em JavaScript, desde funções básicas até arrow functions"
courseSlug: "javascript-fundamentals"
order: 2
language: "javascript"
initialCode: |
  // Crie uma função chamada 'calcularPotencia' que:
  // - Recebe 'velocidade' e 'aceleracao' como parâmetros
  // - Retorna: (velocidade * aceleracao) / 2
  
  // Crie uma função chamada 'verificarSistemas' que:
  // - Não recebe parâmetros
  // - Retorna "Sistemas operacionais!"
  
  // Crie uma arrow function chamada 'calcularCombustivel' que:
  // - Recebe 'distancia' como parâmetro
  // - Retorna: distancia * 0.08
  
  // Teste suas funções:
  // Use console.log para mostrar os resultados de:
  // calcularPotencia(10, 5)
  // verificarSistemas()
  // calcularCombustivel(100)
validation:
  requiredVariables:
    - name: calcularPotencia
      type: function
    - name: verificarSistemas
      type: function
    - name: calcularCombustivel
      type: function
  expectedOutput: |
    25
    Sistemas operacionais!
    8
  requiredStatements:
    - console.log(calcularPotencia(10, 5))
    - console.log(verificarSistemas())
    - console.log(calcularCombustivel(100))
code_solution: |
  function calcularPotencia(velocidade, aceleracao) {
    return (velocidade * aceleracao) / 2;
  }
  
  function verificarSistemas() {
    return "Sistemas operacionais!";
  }
  
  const calcularCombustivel = (distancia) => distancia * 0.08;
  
  console.log(calcularPotencia(10, 5));
  console.log(verificarSistemas());
  console.log(calcularCombustivel(100));
output_solution: |
  25
  Sistemas operacionais!
  8
highlightedLines: [1, 5, 9]
---

[🚀] Bem-vindo ao Centro de Controle de Funções

Navegador, você está entrando no módulo de programação de sistemas da nossa nave espacial. Aqui você aprenderá sobre funções - os comandos que fazem nossa nave executar operações específicas no vasto ciberespaço.

[📦] Tipos de Funções no Sistema

No universo JavaScript, temos diferentes formas de criar funções, cada uma com seu propósito especial:

1. Funções Declarativas
```javascript
function ativarMotores(potencia) {
    return `Motores ativados com ${potencia}% de potência!`;
}
```

2. Arrow Functions - Nossa tecnologia mais avançada
```javascript
const calcularVelocidade = (distancia, tempo) => distancia / tempo;
```

3. Funções Anônimas - Operações temporárias
```javascript
const operacaoSecreta = function() {
    return "Executando protocolo secreto...";
};
```

[🎯] Conceitos-Chave

- Funções são blocos de código reutilizáveis
- Podem receber parâmetros e retornar valores
- São fundamentais para organizar e modularizar o código
- Podem ser armazenadas em variáveis (funções de primeira classe)

[💡] Dicas & Links Úteis

- Use nomes descritivos que indicam a ação da função
- Mantenha suas funções pequenas e focadas em uma única tarefa
- Prefira arrow functions para operações simples
- [📚 MDN Web Docs - Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

[🎯] Fatos Curiosos

Você sabia? As arrow functions foram introduzidas no ES6 (2015) e revolucionaram a forma como escrevemos funções em JavaScript! Elas não só são mais concisas, mas também mantêm o contexto do `this`, um recurso crucial para navegação no ciberespaço.

[⚡] Exemplos Práticos

```javascript
// Sistema de navegação da nave
const calcularRota = (origem, destino) => {
    return `Calculando rota de ${origem} para ${destino}...`;
};

// Sistema de energia
function verificarEnergia(nivel) {
    if (nivel < 20) {
        return "ALERTA: Energia baixa!";
    }
    return "Níveis de energia estáveis";
}

// Sistema de comunicação
const enviarMensagem = function(mensagem) {
    return `Transmitindo: ${mensagem}`;
};
```

[🎮] Desafio: Programando os Sistemas da Nave

Sua missão: Criar três funções essenciais para nossa nave espacial:

1. Função `calcularPotencia` que calcula a potência baseada na velocidade e aceleração
2. Função `verificarSistemas` que retorna o status dos sistemas
3. Arrow function `calcularCombustivel` que calcula o consumo de combustível baseado na distância

Complete o código inicial fornecido e teste todas as funções! A segurança da nave depende de você, navegador! 🚀
