---
title: "Como Escrever Comentários Multilinha em JavaScript"
description: "Aprenda a criar e utilizar comentários multilinha para documentar seu código JavaScript de forma eficiente"
courseSlug: "javascript-fundamentals"
order: 8
language: "javascript"
initialCode: |
  // 1. Adicione um comentário multilinha descrevendo a classe
  class NaveEspacial {
    constructor(nome, velocidade) {
      this.nome = nome;
      this.velocidade = velocidade;
    }
    
    acelerar() {
      this.velocidade += 10;
    }
  }
  
  // 2. Adicione um comentário multilinha documentando esta função
  function iniciarMissao(nave, destino) {
    nave.acelerar();
    return `${nave.nome} iniciando missão para ${destino}`;
  }
  
validation:
  requiredVariables:
    - name: NaveEspacial
      type: class
    - name: iniciarMissao
      type: function
  expectedOutput: |
    /*
     * Classe que representa uma nave espacial
     * Propriedades:
     * - nome: nome da nave
     * - velocidade: velocidade atual em km/h
     */
    
    /*
     * Inicia uma nova missão espacial
     * @param {NaveEspacial} nave - A nave que realizará a missão
     * @param {string} destino - O destino da missão
     * @returns {string} Mensagem de confirmação da missão
     */
  requiredStatements:
    - "class NaveEspacial"
    - "function iniciarMissao"
code_solution: |
  /*
   * Classe que representa uma nave espacial
   * Propriedades:
   * - nome: nome da nave
   * - velocidade: velocidade atual em km/h
   */
  class NaveEspacial {
    constructor(nome, velocidade) {
      this.nome = nome;
      this.velocidade = velocidade;
    }
    
    acelerar() {
      this.velocidade += 10;
    }
  }
  
  /*
   * Inicia uma nova missão espacial
   * @param {NaveEspacial} nave - A nave que realizará a missão
   * @param {string} destino - O destino da missão
   * @returns {string} Mensagem de confirmação da missão
   */
  function iniciarMissao(nave, destino) {
    nave.acelerar();
    return `${nave.nome} iniciando missão para ${destino}`;
  }
output_solution: |
  // Exemplo de código bem documentado com comentários multilinha
highlightedLines: [1, 2, 3, 4, 5, 15, 16, 17, 18, 19]
---

[🚀] Laboratório de Documentação Avançada

Navegador, bem-vindo ao Laboratório de Documentação Avançada. Aqui você aprenderá a criar documentação detalhada usando comentários multilinha, essenciais para documentar sistemas complexos.

[📦] Estrutura de Comentários Multilinha

No JavaScript, comentários multilinha são delimitados por `/*` e `*/`:

1. **Comentário Multilinha Básico**
```javascript
/* Este é um comentário
   que pode ocupar
   várias linhas */
```

2. **Comentário de Documentação Estilizado**
```javascript
/*
 * Este é um comentário estilizado
 * com asteriscos para melhor legibilidade
 * cada linha começa com um asterisco
 */
```

[🎯] Conceitos-Chave

- Comentários multilinha começam com `/*` e terminam com `*/`
- Podem ocupar quantas linhas forem necessárias
- Ideais para documentação detalhada de classes e funções
- Suportam formatação estilizada para melhor legibilidade

[💡] Dicas & Links Úteis

- Use para documentação detalhada de funções e classes
- Mantenha um estilo consistente com asteriscos
- Inclua exemplos de uso quando relevante
- [📚 MDN Web Docs - Comentários](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#coment%C3%A1rios)

[🎯] Fatos Curiosos

Você sabia? O estilo de comentário multilinha com asteriscos (`/*` `*` `*/`) vem da tradição do C e Java, e é amplamente usado em ferramentas de documentação automática como JSDoc! Estas ferramentas podem gerar documentação HTML automaticamente a partir desses comentários.

[⚡] Exemplos Práticos

```javascript
/*
 * Representa um Sistema de Navegação
 * @class
 * @property {Array} coordenadas - Coordenadas atuais [x, y, z]
 * @property {number} velocidade - Velocidade atual em km/h
 */
class SistemaNavegacao {
    /* Define as coordenadas iniciais */
    constructor() {
        this.coordenadas = [0, 0, 0];
    }
}

/*
 * Calcula a rota para um destino
 * @param {Array} origem - Coordenadas de origem [x, y, z]
 * @param {Array} destino - Coordenadas de destino [x, y, z]
 * @returns {Object} Objeto contendo a rota calculada
 */
function calcularRota(origem, destino) {
    // Implementação aqui
}
```

[🎮] Desafio: Documentando Sistemas Complexos

Sua missão: Adicionar documentação adequada ao código da nave espacial:

1. Criar um comentário multilinha para a classe `NaveEspacial`
   - Descrever o propósito da classe
   - Listar suas propriedades
   - Explicar seus métodos

2. Documentar a função `iniciarMissao`
   - Descrever o que a função faz
   - Documentar os parâmetros
   - Especificar o valor de retorno

Lembre-se: Documentação clara é como um mapa estelar - guia outros desenvolvedores através do código! 🚀
