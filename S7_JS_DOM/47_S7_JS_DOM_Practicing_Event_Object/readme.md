# S7 JS DOM Practicing Event Object

Create an element based on the product object. Product has the following properties:
```js
let product = {
   name: 'Notebook',
   value: 3000.00,
   settlement: true,
   distributor: 'kenzie.com.br'
}
```
Use the `<li>` element to render the object and its properties can be in `<spans>`.

The distributor property must be in an anchor element, but be careful, the link must not take the user to another page when the settlement property is set to true.

When the product card is clicked on the sale `<span>`, a message should be rendered on the screen with the actual price of the product. The actual price is given by the calculation:
`value * 0.3 - value`

The discount value is 30% when the product is on sale.

The message should only appear if the user has clicked on the settlement `<span>`.

Note that the information whether or not the product is on sale is created dynamically based on a condition, whether the sale property is true or false

To illustrate what is proposed:

![image](assets/app.png)

Clicking on the phrase 'In sale':

![image](assets/app_click.png)