# Loops with while

## Introduction
In this learning session, I explored the **while loop** in JavaScript, which is a control structure that allows a block of code to be executed repeatedly as long as a specified condition remains true. This structure is particularly useful when the number of iterations is unknown or when the condition for stopping may change dynamically.

## Syntax
I learned that the syntax of a while loop looks like this:
```javascript
while (condition) {
  // Code to be executed
}
```
The condition is checked before each iteration, and as long as it is true, the code inside the loop continues to execute.

## Usability
To apply this knowledge, I created a `script.js` file and practiced with various while loops. One key difference from the `for` loop is that with a `while` loop, I had to declare the counter variable outside the loop and ensure it was updated inside the loop to avoid infinite iterations.

For example:
```javascript
let counter = 0;
while (counter < 10) {
  console.log(`counter = ${counter}`);
  counter++;
}
console.log("Exited the loop!!");
```
Without updating the counter, the loop would continue indefinitely and potentially crash the system by consuming all available memory.

## Combining Conditionals
I also learned how to integrate conditionals into a `while` loop. For instance, I created a function that generates the multiplication table of two, but only for odd numbers:
```javascript
function oddMultiplesOfTwo() {
  let counter = 0;
  while (counter <= 10) {
    if (counter % 2 === 1) {
      console.log(`2 x ${counter} = ${counter * 2}`);
    }
    counter++;
  }
  console.log("Exited the loop!!");
}
oddMultiplesOfTwo();
```
This loop iterated over numbers from 0 to 10, checking if they were odd before calculating their multiple of 2.

## Optimized Logic
To make the loop more efficient, I adjusted the logic to eliminate the need for an internal conditional statement by incrementing the counter directly by 2, starting from the first odd number:
```javascript
function oddMultiplesOfTwo() {
  let counter = 1;
  while (counter <= 10) {
    console.log(`2 x ${counter} = ${counter * 2}`);
    counter += 2;
  }
  console.log("Exited the loop!!");
}
oddMultiplesOfTwo();
```
This version provided a more elegant solution, iterating only through the odd numbers between 1 and 10.

## Conclusion
Through this learning experience, I gained a deeper understanding of the **while loop** in JavaScript. It’s a powerful structure that can be used to iterate over data, especially when the number of iterations isn’t known upfront. By managing the initialization, loop condition, and counter updates properly, I can avoid common pitfalls like infinite loops.

```js
// Praticar

/*
Exercícios para praticar
Faça um programa que peça um valor entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 
Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
Faça um programa que enquanto a entrada for números inteiros positivos, menores que 10, continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média.
Faça um programa que registre votos. Em uma eleição para o grêmio estudantil existem apenas 3 candidatos, o candidato a, o candidato b e o candidato c.

Solicite ao usuário que entre com a letra correspondente a um candidato e incremente em +1 o número de votos para o candidato. ⁠Caso o usuário entre com um valor que não seja correspondente a um candidato, alerte: "Candidato não encontrado".

Ao final de cada votação alerte a mensagem: "Voto registrado com sucesso".

Para encerrar a votação é necessário que entre com uma flag (variável de controle) de parada: use o x para isso.

Quando o valor x for inserido alerte o número de votos que cada candidato teve.

*/

```