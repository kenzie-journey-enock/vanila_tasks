// Step 1: Creating a contact list as a JavaScript object
const contactList = [
  { name: "Alice", phone: "123-456-7890", email: "alice@example.com" },
  { name: "Bob", phone: "987-654-3210", email: "bob@example.com" },
];

// Step 2: Converting the contact list to a JSON string
const jsonContactList = JSON.stringify(contactList);
console.log("JSON Contact List:");
console.log(jsonContactList);

/* Output:
JSON Contact List:
[{"name":"Alice","phone":"123-456-7890","email":"alice@example.com"},{"name":"Bob","phone":"987-654-3210","email":"bob@example.com"}]
*/

// Step 3: Converting the JSON string back to a JavaScript object
const parsedContactList = JSON.parse(jsonContactList);
console.log("\nParsed Contact List:");
console.log(parsedContactList);

/* Output:
Parsed Contact List:
[ { name: 'Alice', phone: '123-456-7890', email: 'alice@example.com' },
{ name: 'Bob', phone: '987-654-3210', email: 'bob@example.com' } ]
*/

// Step 4: Accessing individual contact details
console.log("\nContact Details:");
console.log(`Name: ${parsedContactList[0].name}, Phone: ${parsedContactList[0].phone}, Email: ${parsedContactList[0].email}`);
console.log(`Name: ${parsedContactList[1].name}, Phone: ${parsedContactList[1].phone}, Email: ${parsedContactList[1].email}`);

/* Output:
Contact Details:
Name: Alice, Phone: 123-456-7890, Email: alice@example.com
Name: Bob, Phone: 987-654-3210, Email: bob@example.com
*/

// Step 5: Adding a new contact
parsedContactList.push({ name: "Charlie", phone: "555-555-5555", email: "charlie@example.com" });
console.log("\nUpdated Contact List:");
console.log(JSON.stringify(parsedContactList));

/* Output:
Updated Contact List:
[{"name":"Alice","phone":"123-456-7890","email":"alice@example.com"},{"name":"Bob","phone":"987-654-3210","email":"bob@example.com"},{"name":"Charlie","phone":"555-555-5555","email":"charlie@example.com"}]
*/

// Step 6: Removing a contact (e.g., Bob)
const indexToRemove = parsedContactList.findIndex(contact => contact.name === "Bob");
if (indexToRemove !== -1) {
  parsedContactList.splice(indexToRemove, 1);
}

console.log("\nContact List After Removal:");
console.log(JSON.stringify(parsedContactList));

/* Output:
Contact List After Removal:
[{"name":"Alice","phone":"123-456-7890","email":"alice@example.com"},{"name":"Charlie","phone":"555-555-5555","email":"charlie@example.com"}]
*/
