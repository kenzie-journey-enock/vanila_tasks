# JSON Validation

## Introduction
In this lesson, I learned about validating JSON syntax and how to handle common errors that arise when parsing JSON data.

## Validating JSON Syntax
I discovered that for JSON to be used in a web application, its syntax must be valid. I learned that I can validate JSON syntax using the `JSON.parse()` method. If the syntax is invalid, an exception is thrown. For example, when I tried to parse the string `const dados = '{"nome": "João", "idade": 25, "cidade": "São Paulo"';`, it resulted in a `SyntaxError`, which helped me understand the importance of proper JSON formatting.

An exception, as I learned, is an event that occurs during the execution of a program and can disrupt its normal behavior. Exceptions can be thrown by the program itself or the operating system when something unexpected happens. They are essential for handling programming errors, like accessing uninitialized variables or division by zero, making programs more robust by allowing them to recover from errors.

## Common Errors When Parsing JSON Data
I also explored common errors that can occur while parsing JSON, such as invalid or missing data. I learned how to handle these errors using conditional statements. For instance, I checked if a key exists in a converted JSON object using the `in` operator, which helped me verify data presence effectively. 

In one example, I checked for the existence of a city in the JSON object:  
```javascript
if ("cidade" in objeto) {
    console.log(objeto.cidade);
} else {
    console.log("Cidade não encontrada.");
}
```
Additionally, I learned how to check if a value is null using the strict equality operator `===`, allowing me to handle cases where expected data was not provided. 

These examples highlighted some of the many potential errors I might encounter when working with JSON and presented strategies to avoid them. Understanding that `JSON.parse()` transforms a JSON string into a JavaScript object was crucial, as it allows for applying object methods to conduct further checks and prevent errors.

## Conclusion
Overall, I realized that validating JSON syntax is vital to ensure that data is correctly utilized in web applications. Moreover, handling common errors, such as null or non-existent values, is essential for robust JSON data management.