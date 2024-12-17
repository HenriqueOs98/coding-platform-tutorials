---
title: "Adicionando Comentários em JavaScript: Comentários de Linha Única"
description: "Aprenda a usar comentários de linha única e inline para documentar seu código JavaScript"
courseSlug: "javascript-fundamentals"
order: 7
language: "javascript"
initialCode: |
  // 1. Adicione um comentário descrevendo a função
  function calcularVelocidade(distancia, tempo) {
    return distancia / tempo;
  }
  
  // 2. Adicione um comentário inline explicando a unidade
  let velocidade = 299792458; // 
  
  // 3. Adicione um comentário explicando o cálculo
  function calcularEnergia() {
    let massa = 10;
    return massa * (velocidade * velocidade);
  }
  
validation:
  requiredVariables:
    - name: velocidade
      type: let
    - name: calcularVelocidade
      type: function
    - name: calcularEnergia
      type: function
  expectedOutput: |
    // Calcula a velocidade com base na distância e tempo
    function calcularVelocidade(distancia, tempo) {
      return distancia / tempo;
    }
    
    let velocidade = 299792458; // velocidade da luz em m/s
    
    // Calcula energia usando E = mc²
    function calcularEnergia() {
      let massa = 10;
      return massa * (velocidade * velocidade);
    }
  requiredStatements:
    - "// Calcula a velocidade com base na distância e tempo"
    - "// velocidade da luz em m/s"
    - "// Calcula energia usando E = mc²"
code_solution: |
  // Calcula a velocidade com base na distância e tempo
  function calcularVelocidade(distancia, tempo) {
    return distancia / tempo;
  }
  
  let velocidade = 299792458; // velocidade da luz em m/s
  
  // Calcula energia usando E = mc²
  function calcularEnergia() {
    let massa = 10;
    return massa * (velocidade * velocidade);
  }
output_solution: |
  // Exemplo de código bem comentado
highlightedLines: [1, 5, 7]
---

[🚀] Centro de Documentação da Nave

Navegador, bem-vindo ao Centro de Documentação. Aqui você aprenderá a arte de documentar seu código usando comentários de linha única, uma prática essencial para manter nossos sistemas compreensíveis e bem documentados.

[📦] Tipos de Comentários de Linha Única

No JavaScript, temos duas formas principais de criar comentários de linha única:

1. **Comentário de Linha Completa**
```javascript
// Este é um comentário de linha completa
let coordenadas = [0, 0]; // O código vem depois
```

2. **Comentário Inline (no final da linha)**
```javascript
let velocidade = 299792458; // Velocidade da luz em m/s
```

[🎯] Conceitos-Chave

- Comentários de linha única começam com `//`
- Tudo após `//` é ignorado pelo interpretador
- São ideais para explicações breves e concisas
- Podem ser usados para desativar temporariamente código

[💡] Dicas & Links Úteis

- Use comentários para explicar "por que", não "o que"
- Mantenha comentários atualizados com o código
- Evite comentários óbvios ou redundantes
- [📚 MDN Web Docs - Comentários](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#coment%C3%A1rios)

[🎯] Fatos Curiosos

Você sabia? Os comentários de linha única (`//`) foram inspirados na linguagem C++! Esta sintaxe se tornou tão popular que foi adotada por muitas outras linguagens de programação, incluindo JavaScript, Java, e C#.

[⚡] Exemplos Práticos

```javascript
// Configurações do sistema de navegação
const CONFIG = {
    velocidadeMaxima: 1000, // em km/h
    altitude: 400         // em quilômetros
};

// Função para verificar status do sistema
function verificarStatus() {
    // TODO: Implementar verificação de temperatura
    return "OK"; // Retorno temporário
}

let combustivel = 100;    // Quantidade inicial em litros
// let backup = 50;       // Reserva desativada temporariamente
```

[🎮] Desafio: Documentando Sistemas da Nave

Sua missão: Adicionar comentários apropriados ao código da nave:

1. Adicionar um comentário descritivo para a função `calcularVelocidade`
2. Adicionar um comentário inline explicando a unidade da `velocidade`
3. Adicionar um comentário explicando o cálculo de energia

Lembre-se: Bons comentários são como instruções claras de navegação - eles ajudam outros navegadores a entender nossa rota! 🚀
