# Applying the Concept of Objects

## Introduction
In this lesson, I explored how to create an object in JavaScript.

## Creating Objects
I learned that the syntax for creating an object is similar to that of a regular variable. I can define an object using either `const meuObjeto = {}` or `let meuObjeto = {}`. I discovered that using uppercase or lowercase letters for the object name is flexible, but I opted for lowercase.

## Accessing Object Properties
I found that there are two main ways to access properties of an object. The first method uses dot notation, as in `meuObjetoPessoa.nome`. The second method employs bracket notation, like `meuObjetoPessoa["nome"]`. Both methods yield the same result, but I need to remember that when using brackets, the property name must be in string format.

## Manipulating Properties
I realized that altering an object's properties is straightforward once I've accessed them. For example, I could change a name from "Ino" to "Hinata" using either dot or bracket notation. Additionally, I learned that attempting to access a non-existent property returns `undefined`.

## Adding a Property
Adding new properties to an existing object is easy. I practiced by adding a "clã" property to `meuObjetoPessoa`, resulting in the object now displaying the property alongside others.

## Deleting a Property
Similarly, I can remove properties using the `delete` operator. For instance, removing the "cidade" property returned a boolean indicating the success of the operation.

## Objects and Arrays
I explored the combination of objects and arrays for storing lists, like addresses. I learned how to access properties of objects within an array using syntax such as `enderecos[0].logradouro`. I also discovered how to structure more complex data by embedding an array of addresses within a person object, creating a more realistic scenario for applications like deliveries.

## Conclusion
Overall, I learned the importance of understanding objects in JavaScript, including how to create, access, manipulate, add, and delete properties. I also saw how to combine objects and arrays to build complex data structures. This knowledge is crucial for effectively handling data in my projects.