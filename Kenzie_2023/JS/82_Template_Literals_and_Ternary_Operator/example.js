const name = "Enock";
const age = 25;
const status = age >= 18 ? "Adult" : "Minor";

// Using Template Literals with interpolation and multiline string
const introduction = `
Hello! My name is ${name}.
I am ${age} years old, which makes me an ${status}.
Thanks to Template Literals, creating this multiline string is easy and readable!
`;

console.log(introduction);
