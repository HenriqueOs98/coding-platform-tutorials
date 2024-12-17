---
title: "Boas Práticas de Comentários em JavaScript"
description: "Aprenda as melhores práticas para escrever comentários efetivos e manter seu código JavaScript bem documentado"
courseSlug: "javascript-fundamentals"
order: 9
language: "javascript"
initialCode: |
  // Refatore os comentários deste código seguindo as boas práticas
  
  // this function calculates something
  function calcularDistancia(x1, y1, x2, y2) {
    // use pythagoras
    return Math.sqrt((x2-x1)**2 + (y2-y1)**2);
  }
  
  // checks energy
  function verificarEnergia(nivel) {
    // if energy is less than 20 show warning
    if (nivel < 20) {
      return "Alerta";
    }
    // else return ok
    return "OK";
  }
  
  // array with crew members
  const tripulacao = ["Ana", "Bob", "Carol"];
  
validation:
  requiredVariables:
    - name: calcularDistancia
      type: function
    - name: verificarEnergia
      type: function
    - name: tripulacao
      type: const
  expectedOutput: |
    /**
     * Calcula a distância euclidiana entre dois pontos
     * @param {number} x1 - Coordenada X do primeiro ponto
     * @param {number} y1 - Coordenada Y do primeiro ponto
     * @param {number} x2 - Coordenada X do segundo ponto
     * @param {number} y2 - Coordenada Y do segundo ponto
     * @returns {number} A distância entre os pontos
     */
    
    /**
     * Verifica o nível de energia e retorna o status
     * @param {number} nivel - Nível atual de energia (0-100)
     * @returns {string} Status do sistema ("Alerta" ou "OK")
     */
    
    // Lista dos membros ativos da tripulação
  requiredStatements:
    - "function calcularDistancia"
    - "function verificarEnergia"
    - "const tripulacao"
code_solution: |
  /**
   * Calcula a distância euclidiana entre dois pontos
   * @param {number} x1 - Coordenada X do primeiro ponto
   * @param {number} y1 - Coordenada Y do primeiro ponto
   * @param {number} x2 - Coordenada X do segundo ponto
   * @param {number} y2 - Coordenada Y do segundo ponto
   * @returns {number} A distância entre os pontos
   */
  function calcularDistancia(x1, y1, x2, y2) {
    return Math.sqrt((x2-x1)**2 + (y2-y1)**2);
  }
  
  /**
   * Verifica o nível de energia e retorna o status
   * @param {number} nivel - Nível atual de energia (0-100)
   * @returns {string} Status do sistema ("Alerta" ou "OK")
   */
  function verificarEnergia(nivel) {
    if (nivel < 20) {
      return "Alerta";
    }
    return "OK";
  }
  
  // Lista dos membros ativos da tripulação
  const tripulacao = ["Ana", "Bob", "Carol"];
output_solution: |
  // Exemplo de código com comentários bem estruturados
highlightedLines: [1, 2, 3, 4, 5, 6, 7, 13, 14, 15, 16, 22]
---

[🚀] Academia de Documentação Espacial

Navegador, bem-vindo à Academia de Documentação Espacial. Aqui você aprenderá as melhores práticas para documentar seu código, garantindo que outros navegadores possam compreender e manter nossos sistemas facilmente.

[📦] Princípios de Bons Comentários

1. **Clareza e Objetividade**
```javascript
// ❌ Ruim
// faz algo com os dados
function processar(dados) {}

// ✅ Bom
// Filtra e ordena os dados de telemetria por timestamp
function processar(dados) {}
```

2. **Documentação de APIs**
```javascript
/**
 * Calcula a trajetória de interceptação
 * @param {Object} alvo - Coordenadas do alvo
 * @param {number} velocidade - Velocidade em km/s
 * @returns {Object} Vetor de interceptação
 */
function calcularInterceptacao(alvo, velocidade) {}
```

3. **Comentários Explicativos**
```javascript
// Usamos bitwise XOR para otimização de performance
const resultado = valor1 ^ valor2;
```

[🎯] Conceitos-Chave

- Comentários devem explicar "por que", não "o que"
- Use nomes descritivos para reduzir necessidade de comentários
- Mantenha comentários atualizados com o código
- Prefira documentação de API para funções públicas

[💡] Dicas & Links Úteis

- Evite comentários óbvios
- Documente casos especiais e decisões importantes
- Use JSDoc para APIs públicas
- Mantenha um estilo consistente
- [📚 MDN Web Docs - Documentando JavaScript](https://developer.mozilla.org/pt-BR/docs/MDN/Guidelines/Code_guidelines/JavaScript)

[🎯] Fatos Curiosos

Você sabia? O JSDoc, um dos padrões mais populares para documentação em JavaScript, foi inspirado no Javadoc do Java! Esta ferramenta permite gerar documentação HTML automaticamente a partir de comentários especialmente formatados no código.

[⚡] Exemplos de Boas Práticas

```javascript
// ❌ Comentários Ruins
// loop
for (let i = 0; i < arr.length; i++) {}

// verifica se é maior que 10
if (valor > 10) {}

// ✅ Comentários Bons
// Processa cada sensor em ordem de prioridade
for (let i = 0; i < sensores.length; i++) {}

// Níveis acima de 10 indicam sobrecarga do sistema
if (nivelEnergia > 10) {}

/**
 * Gerencia o consumo de energia dos sistemas
 * @param {number} consumo - Taxa de consumo em watts
 * @param {boolean} modoEconomia - Ativa modo de economia
 * @throws {Error} Se o consumo exceder capacidade máxima
 */
function gerenciarEnergia(consumo, modoEconomia) {}
```

[🎮] Desafio: Melhorando a Documentação

Sua missão: Refatorar os comentários do código fornecido seguindo as melhores práticas:

1. Substituir comentários vagos por descrições claras
2. Adicionar documentação JSDoc para as funções
3. Remover comentários redundantes
4. Manter apenas comentários que agregam valor

Lembre-se: Bons comentários são como um manual de navegação espacial - devem ser claros, concisos e úteis! 🚀
