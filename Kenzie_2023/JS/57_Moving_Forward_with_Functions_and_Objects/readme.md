# Moving Forward with Functions and Objects

## Introduction
In this lesson, I discovered various ways to manipulate an object, particularly through the use of functions. By defining a function for controlling or inserting data into an object, I established a pattern of organization. This approach allows me to gain mastery over the object's data and makes support and maintenance simpler and more scalable.

## Contextualizing
We created a person object with properties such as name, age, and city using the following function:

```javascript
function createPerson(name, age, city) {
  const person = {
    name: name,
    age: age,
    city: city,
  };
  return person;
}
```

This function allows me to create an object based on the parameters received. I realized it would be beneficial to modify some data after creating the object without needing to create a new one. With this in mind, I developed functions to perform these updates:

```javascript
function changeName(newName, person){
  person.name = newName;
}

function changeAge(newAge, person){
  person.age = newAge;
}

function changeCity(newCity, person){
  person.city = newCity;
}
```

Now, I have functions that manipulate my object. It's clear what each function is designed to do, and I learned that the function receives an object (in this case, called "person") and can access its attributes using dot notation.

## Conclusion
In this lesson, I learned that using functions for object manipulation offers numerous benefits for code organization and scalability. By establishing organizational patterns, I can effectively manage the object's data and simplify code maintenance. Furthermore, I explored how to create functions for updating an already created object's data, eliminating the need to create new objects for every update. With this knowledge, I feel better equipped to develop more robust and efficient code, adhering to best programming practices.