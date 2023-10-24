# S7 JS DOM TODO List

## Project End

[TODO APP](link deploy)
[Code](01_Project_TODO)

## Intro

Household tasks are becoming more difficult to organize every day. You then decided to make an application to have more control.

Develop an application that displays an array of objects on the screen.

To organize the idea, you decided to create a layout. You are already thinking about the growth of the application and decided to create something more complete, for future functionalities.

![image](assets/interface.svg)

**This activity is used as a reference at other times of the week. All buttons used in the proposed layout will be implemented. For now, just do what the activity asks.**

## Pensando na execução
Você deverá criar um array de tarefas.
- Uma tarefa possui título e tipo.

Título basicamente é o que deve ser feito, e tipo é definido como: urgente, prioritário ou normal.

**Atenção às tarefas urgentes, sempre serão renderizadas no topo da lista.**

Seguindo a ordem de maior importância para menor.

Sua aplicação deverá ter a funcionalidade de renderizar somente o título, o tipo será utilizado para organizar os elementos da lista.

Por padrão a lista que é exibida é a lista com todas as tarefas organizadas por mais urgente para menos urgente

## Sua lista de tarefas
```js
let tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente"
  },
  {
    titulo: "Limpar o quarto",
    tipo: "urgente"
  },  
  {
    titulo: "Consertar Computador",
    tipo: "prioritário"
  },  
  {
    titulo: "Guardar dinheiro do lanche",
    tipo: "Urgente"
  },  
  {
    titulo: "Beber água",
    tipo: "prioritário"
  }    
]
```
