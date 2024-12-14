---
title: "Variáveis em JavaScript"
description: "Aprenda sobre declaração de variáveis e tipos de dados básicos em JavaScript"
order: 1
initialCode: "// Declare suas variáveis aqui\n"
solution: "let nome = 'João';\nconst idade = 30;\nvar estudante = true;\n\nconsole.log(nome, idade, estudante);"
---

# Compreendendo Variáveis em JavaScript

Variáveis são contêineres para armazenar valores de dados. Em JavaScript, você pode declarar variáveis usando três palavras-chave: `var`, `let` e `const`.

## Tipos de Declarações de Variáveis

### `let`
- Escopo de bloco
- Pode ser reatribuída
- Introduzida no ES6

```javascript
let nome = 'Alice';
nome = 'Bob'; // Permitido
const

Escopo de bloco
Não pode ser reatribuída
Usada para valores que não mudarão

javascriptCopyconst PI = 3.14159;
// PI = 3; // Isto causaria um erro
var

Escopo de função
Pode ser reatribuída
Método mais antigo de declaração

javascriptCopyvar idade = 25;
idade = 26; // Permitido
Desafio
Crie variáveis para armazenar seu nome, idade e se você é um estudante.