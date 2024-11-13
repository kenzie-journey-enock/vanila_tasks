# Storing Data in LocalStorage

## Introduction
In this lesson, I learned how to store data in LocalStorage using JavaScript. I explored how to create, read, update, and delete data from LocalStorage.

## Creating Data in LocalStorage
To store data in LocalStorage, I used the `setItem()` method. This method takes two parameters: the item's key and its value. For example, by using `localStorage.setItem("name", "João");`, I created an item in LocalStorage with the key "name" and the value "João".

## Reading Data from LocalStorage
To read data from LocalStorage, I employed the `getItem()` method. This method takes the item's key as a parameter and returns its value. For instance, `const name = localStorage.getItem("name");` allowed me to retrieve the value associated with the key "name" and store it in a variable called "name".

## Updating Data in LocalStorage
I learned that updating an item in LocalStorage is straightforward; I simply called `setItem()` again with the same key. For example, by executing `localStorage.setItem("name", "Maria");`, I updated the value of the item with the key "name" to "Maria".

## Deleting Data from LocalStorage
To delete an item from LocalStorage, I used the `removeItem()` method, which takes the key of the item to be removed as a parameter. For example, `localStorage.removeItem("name");` effectively deleted the item with the key "name" from LocalStorage.

## Conclusion
I discovered that storing data in LocalStorage is simple and user-friendly. By using the methods `setItem()`, `getItem()`, and `removeItem()`, I can easily create, read, update, and delete data in LocalStorage. However, I also learned that LocalStorage has limitations, such as a restricted storage capacity, so it is important to use it wisely to avoid performance issues in the browser.