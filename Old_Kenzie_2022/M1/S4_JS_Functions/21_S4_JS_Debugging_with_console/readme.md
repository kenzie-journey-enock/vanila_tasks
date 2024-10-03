# S4 Debugging with console.log()

In this activity we will practice using console.log() to know the value of the elements at a given moment in the application.

## Task 1

Your code debugger has mysteriously stopped working, and now you need to figure out what should be returned in console.log.

### Bug
```js
function verificaNumero(num) {
  let str = '';
  
  if (num % 2 == 0) {
    str = 'par';
  } else {
    str = 'impar';
  }

  str += ', ';

  if (num > 0) {
    str += 'positivo';
  } else {
    str += 'negativo';
  }

  str += ' e ';

  if (num === parseInt(num)) {
    str += 'não possui casas decimais';
  } else {
    str += 'possui casas decimais';
  }

  str = 'O numero ' + num + ' é ' + str;

  return str;
}

console.log(verificaNumero(-12));

// Não retorna corretamente se o numero é par ou impar.
```
### Debug
```js
function verificaNumero(num) {
  let str = '';
  
  let int = parseInt(num)
  
  if (int % 2 == 0) {
    str = 'par';
  } else {
    str = 'impar';
  }

  str += ', ';

  if (int > 0) {
    str += 'positivo';
  } else {
    str += 'negativo';
  }

  str += ' e ';

  if (num === parseInt(num)) {
    str += 'não possui casas decimais';
  } else {
    str += 'possui casas decimais';
  }

  str = 'O numero ' + num + ' é ' + str;

  return str;
}

console.log(verificaNumero(-12)); // expect: O numero -12 é par, negativo e não possui casas decimais

console.log(verificaNumero(-12.5)); // expect: O numero -12.5 é par , negativo e possui casas decimais
console.log(verificaNumero(-12.6)); // expect: O numero -12.6 é par, negativo e possui casas decimais
console.log(verificaNumero(-12.4)); // expect: O numero -12.4 é par, negativo e possui casas decimais

console.log(verificaNumero(12)); // expect: O numero 12 é par, positivo e não possui casas decimais

console.log(verificaNumero(12.5)); // expect: O numero 12.5 é par , positivo e possui casas decimais
console.log(verificaNumero(12.6)); // expect: O numero 12.6 é par, positivo e possui casas decimais
console.log(verificaNumero(12.4)); // expect: O numero 12.4 é par, positivo e possui casas decimais

console.log(verificaNumero(-13)); // expect: O numero 12 é impar, negativo e não possui casas decimais

console.log(verificaNumero(-13.5)); // expect: O numero -13.5 é impar, negativo e possui casas decimais
console.log(verificaNumero(-13.6)); // expect: O numero -13.6 é impar, negativo e possui casas decimais
console.log(verificaNumero(-13.4)); // expect: O numero -13.4 é impar, negativo e possui casas decimais

console.log(verificaNumero(13)); // expect: O numero 13 é impar, positivo e possui casas decimais

console.log(verificaNumero(13.5)); // expect: O numero 13.5 é impar, positivo e possui casas decimais
console.log(verificaNumero(13.6)); // expect: O numero 13.6 é impar, positivo e possui casas decimais
console.log(verificaNumero(13.4)); // expect: O numero 13.4 é impar, positivo e possui casas decimais
```

## Task 2

The code snippet below is performing some mathematical operations, and to make sure that all of them are working as they should, the developer has added some logs in his code.

### Bug
```js
let valor = 18;
let result = valor / 2;
console.log(result);

result = result / 3;
console.log(result);

// A variavel isPair não verifica corretamente se é par
let isPair = ( result == 3 );
console.log(isPair);

if (isPair) {
  result = result * 6;
} else {
  result = result * 12;
}

console.log(result);
```

### Debug
```js
let valor = 18;
let result = valor / 2;
console.log(result);

result = result / 3;
console.log(result);

let isPair = ( result % 2 == 0 );
console.log(isPair);

if (isPair) {
  result = result * 6;
} else {
  result = result * 12;
}

console.log(result);
```

## Task 3

The function below takes any number and returns the number of digits that make up it.
Try to find out the value that will be returned in each console.log() without running the code in the terminal.

```js
function algarismosEmUmNumero(n){ // Cria a função
  let str = `${n}`; // Troca o tipo de n para string
  let contagem = str.length; // Assim guardando o numero de caracteres
  console.log(contagem); // Imprime o numero de caracteres

  if (n != parseInt(n)) { // Verifica se n é decimal, abrindo o escopo caso seja
    console.log("Entrou aqui"); // Imprime no console, informando que entrou no if
    contagem = contagem - 1; // Remove o '.' para não aver erro na contagem
  }

  console.log(contagem); // Imprimeo numero de algoritimos

  return contagem; // Retorna o numero de algoritimos
}
algarismosEmUmNumero(3.141517); // Executa a função
```