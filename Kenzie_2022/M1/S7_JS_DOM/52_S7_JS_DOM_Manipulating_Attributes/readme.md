# S7 JS DOM Manipulating Attributes

You learned how to manipulate attributes. 
When thinking about a way of using it that would be interesting, you believe that identifying users of a website based on their access profile, using different colors would be cool.

Given the array of objects:
```js
const users = [
   {
    name: 'Madalena',
    profile: 'Admin',
    sector: 'Administration'
  },
  {
    name: 'Rafael',
    profile: 'user',
    sector: 'Finance'
  },  
  {
    name: 'Baltazar',
    profile: 'user',
    sector: 'Reception'
  },  
  {
    name: 'Carmen',
    profile: 'Admin',
    sector: 'Business'
  }    
]
```
You must go through the objects in the array and generate a card for each of them on the screen.

Each card has a specific color based on the user's access profile.

When the sector is equal to Administration and the profile is admin, the card must have the background color: #748ffc.

Other users will oscillate between background colors:

#63e6be when they are a user
and #ffe066 when they are admin.

## Task

- Cycle through all elements in the list
- For each element property create a span
- Test industry and profile value
- 'set' an attribute depending on the result of the condition
- Use css to create the card style, according to the attribute set
