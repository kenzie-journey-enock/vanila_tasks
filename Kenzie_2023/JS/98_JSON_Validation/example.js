// Example JSON string
const jsonString = '{"name": "Alice", "age": null, "city": "New York"}';

try {
    // Parse the JSON string
    const userObject = JSON.parse(jsonString);

    // Check if the "city" key exists
    if ("city" in userObject) {
        console.log(`City: ${userObject.city}`);
    } else {
        console.log("City not found.");
    }

    // Check if the "age" value is null
    if (userObject.age === null) {
        console.log("Age not provided.");
    } else {
        console.log(`Age: ${userObject.age}`);
    }

    // Check if the "name" key exists and print it
    if ("name" in userObject) {
        console.log(`Name: ${userObject.name}`);
    } else {
        console.log("Name not found.");
    }
    
} catch (error) {
    console.error("Invalid JSON:", error.message);
}
