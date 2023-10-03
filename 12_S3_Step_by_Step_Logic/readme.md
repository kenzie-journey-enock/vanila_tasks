# S3 Step by Step Logic

Transform the following chocolate cake recipe inti an algorithm (step by step), exemplifying input, processing and output.

"Beat the butter and sugar in a mixer. Add the egg yolks one by one until you obtain a homogeneous cream. Add the milk little by little. Turn off the mixer and add the wheat flour, chocolate powder, yeast and set aside. Beat the egg whites and add them to the chocolate mixture, mixing gently. Grease a small rectangular pan with butter and flour, place the dough in it and bake in a preheated medium oven for approximately 30 minutes. Unmold the cake while it is still hot and set aside."


```js
const task = {
  name: 'Make a chocolate cake with frosting.',
  inputs: ['Ingredients', 'Mixer', 'Shape']
} 

const recipe = {
  turn_on: 'the oven at medium temperature.',
  place: `the butter in the ${task.inputs[1]}.`,
  place: `the sugar in the ${task.inputs[1]}.`,
  turn_on: `the ${task.inputs[1]}.`,
  loop: {
    while: 'there are egg yolks',
    do: 'add one egg yolk and then beat until you get a homogeneous cream.'
  },
  add: 'the milk little by little.',
  turn_off: `the ${task.inputs[1]}.`,
  add: 'the wheat flour.',
  add: 'the chocolate powder.',
  add: 'the yeast.',
  reserve: 'the dough obtained in a temporary place.',
  run: 'the loop to obtain the egg whites.',
  add: 'the egg whites to the reserved chocolate dough.',
  mix: 'this dough gently.',
  carry: 'out the loop to grease the pan with butter and flour.',
  place: 'the dough in the pan.',
  place: 'the pan in the oven.',
  wait: '30 minutes.',
  take: 'the pan out of the oven.',
  unmold: 'the cake in a temporary place.',
  cover: 'according to the coverage loop.',
  put: 'the frosting on the cake.',
}

let output = task + recipe

output = 'Cake ready for consumption! :)'
```