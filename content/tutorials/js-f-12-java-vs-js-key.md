---
title: "Diferenças Fundamentais entre Java e JavaScript"
description: "Conheça as principais diferenças técnicas e práticas entre Java e JavaScript através de exemplos concretos"
courseSlug: "javascript-fundamentals"
order: 12
language: "javascript"
initialCode: |
  // Demonstre as diferenças-chave entre Java e JavaScript
  
  // 1. Crie um objeto (forma JavaScript)
  const nave = {
    // Adicione propriedades e um método
  };
  
  // 2. Use desestruturação (exclusivo JavaScript)
  
  // 3. Use template literals (exclusivo JavaScript)
  
validation:
  requiredVariables:
    - name: nave
      type: const
  expectedOutput: |
    { nome: "Voyager", velocidade: 1000 }
    Voyager
    1000
    Nave Voyager viajando a 1000 km/h
  requiredStatements:
    - "const nave ="
    - "const { nome, velocidade } ="
    - "console.log(`Nave ${nome} viajando a ${velocidade} km/h`)"
code_solution: |
  const nave = {
    nome: "Voyager",
    velocidade: 1000
  };
  
  console.log(nave);
  
  // Desestruturação
  const { nome, velocidade } = nave;
  console.log(nome);
  console.log(velocidade);
  
  // Template literals
  console.log(`Nave ${nome} viajando a ${velocidade} km/h`);
output_solution: |
  { nome: "Voyager", velocidade: 1000 }
  Voyager
  1000
  Nave Voyager viajando a 1000 km/h
highlightedLines: [1, 7, 12]
---

[🚀] ## Centro de Análise Comparativa

Navegador, bem-vindo ao Centro de Análise Comparativa. Aqui vamos explorar em detalhes as diferenças fundamentais entre Java e JavaScript, com exemplos práticos de cada característica.

[📦] ## Diferenças Estruturais

### 1. Declaração de Variáveis
```javascript
// JavaScript - Declaração flexível
let numero = 42;
const PI = 3.14;
var antiga = "legacy";

// Java
// int numero = 42;
// final double PI = 3.14;
// String antiga = "legacy";
```

### 2. Estruturas de Dados
```javascript
// JavaScript - Arrays dinâmicos
const mix = [1, "dois", true, {chave: "valor"}];

// Java
// Object[] mix = {1, "dois", true}; // Não tão flexível
```

[🎯] ## Características Exclusivas

### JavaScript Possui:
1. **Tipagem Dinâmica**
```javascript
let valor = 42;        // número
valor = "42";          // agora é string
```

2. **Desestruturação**
```javascript
const {x, y} = ponto;
const [primeiro, ...resto] = array;
```

3. **Template Literals**
```javascript
const mensagem = `Olá, ${nome}!`;
```

### Java Possui:
1. **Tipos Genéricos**
```java
// ArrayList<String> lista = new ArrayList<>();
```

2. **Sobrecarga de Métodos**
```java
// public void metodo(int x) { }
// public void metodo(String x) { }
```

[💡] ## Comparações Práticas

### Orientação a Objetos
```javascript
// JavaScript - Protótipos e Classes
class Nave {
    constructor(nome) {
        this.nome = nome;
    }
}

// Java
// public class Nave {
//     private String nome;
//     public Nave(String nome) {
//         this.nome = nome;
//     }
// }
```

### Funções
```javascript
// JavaScript - Funções como valores
const saudacao = function(nome) {
    return `Olá, ${nome}!`;
};

// Java
// public String saudacao(String nome) {
//     return "Olá, " + nome + "!";
// }
```

[🎯] ## Aspectos Técnicos

### JavaScript:
- Interpretado no navegador/Node.js
- Event loop e assincronicidade
- Sem threads nativos
- Garbage collection automático

### Java:
- Compilado para bytecode
- Threads nativos
- Forte tipagem
- Garbage collection gerenciado

[⚡] ## Casos de Uso

### JavaScript é Melhor Para:
- Desenvolvimento web frontend
- Aplicações em tempo real
- Prototipagem rápida
- Scripts leves

### Java é Melhor Para:
- Aplicações empresariais
- Sistemas distribuídos
- Processamento paralelo
- Aplicações Android

[🎮] ## Desafio: Recursos Exclusivos do JavaScript

Sua missão: Demonstrar recursos que só existem em JavaScript:

1. Criar um objeto usando a sintaxe literal
2. Usar desestruturação de objetos
3. Implementar template literals

Lembre-se: Cada linguagem tem seus pontos fortes - a chave é usar a ferramenta certa para cada missão! 🚀
