# ES6 modules (import / export)

## Introduction
In this lesson, I learned about one of the key additions to JavaScript ES6: modules. Modules allow developers to break down their code into reusable and independent pieces, enabling the import and export of objects, functions, and other resources between JavaScript files. 

## 1. Syntax of Import and Export
I explored how to export resources from a module using the `export` keyword. This can include functions, objects, and classes. For example:

```javascript
// Exporting a function
export function myFunction() {
  // ...
}

// Exporting an object
export const myObject = {
  // ...
}

// Exporting a class
export class MyClass {
  // ...
}
```

To import these resources, I used the `import` keyword:

```javascript
// Importing a function
import { myFunction } from './my-module.js';
```

## 2. Using Modules in Different Contexts
I learned how to import modules in HTML files by using the `<script>` tag with the `type="module"` attribute:

```html
<!-- Importing a module in an HTML file -->
<script type="module" src="./my-module.js"></script>
```

In a Node.js environment, I found that I could use the `require` function to import modules, but to utilize ES6 import/export syntax, I need to install the `esm` package.

```bash
npm install esm
```

Then, I could import a module using ES6 syntax:

```javascript
import { myFunction } from './my-module.js';
```

## 3. Using Third-Party Libraries and NPM Modules
I learned how to install and import packages from NPM. After installing a package with `npm install`, I could import its functions using ES6 syntax:

```javascript
import { myFunction } from 'my-package';
```

I also discovered how to export a default resource using the `default` keyword, allowing me to import it easily with a simpler syntax:

```javascript
// Exporting the default
export default function myFunction() {
  // ...
}

// Importing the default
import myFunction from './my-module.js';
```

## 4. Resolving Naming Conflicts
To avoid naming conflicts when importing from different modules, I learned that I can rename the imported resources using the `as` keyword:

```javascript
// Importing an object with the name 'myFunction' from a module
import { myFunction as myOtherFunction } from './my-other-module.js';
```

## 5. Conclusion
Overall, I discovered that modules are a significant feature of JavaScript ES6, allowing me to structure my code into reusable pieces. The syntax for importing and exporting makes it straightforward to manage resources across files, and I can use modules in various contexts, including HTML files and Node.js environments. Additionally, renaming imported resources helps prevent conflicts, making my code cleaner and more manageable.