# S8 JS Cash Machine

In this activity we will develop the functionalities of an ATM, based on information from a customer.

We know that an ATM has some responsibilities, such as: withdrawal, balance, deposit, among others... Now, let's manipulate information from an object to perform some of these actions.

Given the object:
```js
const user = {
name: "Jhon Doyle Fox",
savingsBalance: 500,
cardsInformation: [
    {
      number: "5160 4196 4843 3388",
      creditBalance: 1000,
      ensign: "American Express",
    },
  ],
};
```

## Task1 - Withdrawal
Develop a function called makeWithDrawal. The main objective of the function is to enable the customer to make withdrawals and withdrawals from their account.

He can choose to withdraw from savings or from the credit limit that the bank has made available. Furthermore, the function must not allow the entry of negative amounts and withdrawals below R$5.00 cannot be made.

The cashier does not withdraw funds from a floating house.

If the amount requested for withdrawal is not available in the account, return "Insufficient balance".

### Exemplifying
- Validate data entry to determine the value received. If it is 1:
- Create a variable called responseWithDraw that stores the response to a prompt that asks the customer to enter 1 for savings or 2 for credit.
- Create a variable called withdrawnAmount that stores the amount the user wants to withdraw via a prompt
   - The withdrawal amount cannot be of the string type.
   - The withdrawal value must be a positive integer.
   - Withdrawal amount must be greater than 5 and less than 500
   - If the variable requirements are not met, return: "This value is not allowed"
- Call the makeWithDrawal function, passing an object of type user, the amount to be withdrawn and the account type as parameters.
   - Test whether the intended withdrawal amount is less than or equal to the available balance for the informed account profile.
     - If the user has an available balance
       - Decrease the balance value with the previous withdrawal value.
       - Return within an alert: "Withdrawal carried out."
     - Otherwise, return within an alert: "Balance unavailable"
```js
function setResponseWithDraw(){
    let responseWithDraw = parseFloat(prompt('Enter 1 for savings or 2 for credit:'))
    while(responseWithDraw - responseWithDraw != 0 || responseWithDraw != 1 && responseWithDraw != 2){
        responseWithDraw = parseFloat(prompt('Enter 1 for savings or 2 for credit:'))
    }
    return responseWithDraw
}

function setWithDrawAmount(){
    let withdrawnAmount = parseFloat(prompt('Amount to withdraw:'))
    while(withdrawnAmount - withdrawnAmount != 0 || withdrawnAmount < 5 && withdrawnAmount < 500){
        alert(`This value (${withdrawnAmount}) is not allowed.`)
        withdrawnAmount = parseFloat(prompt('Amount to withdraw:'))
    }
    return withdrawnAmount
}

function makeWithDrawal(user, typeAccount , value){
    let {name, savingsBalance, cardsInformation } = user
    if (typeof name == 'string' && savingsBalance > 0 && cardsInformation.length > 0){
        if (typeAccount == 1){
            if (value <= savingsBalance){
                savingsBalance = savingsBalance - value
                user.savingsBalance = savingsBalance
                alert(`Withdrawal carried out. - Amount withdrawn: $${value} - TOTAL: ${savingsBalance}`)
                return user
            }
            alert(`${value} Balance unavailable`)
            return user
        }
    }
    alert('User not valid.')
    return user
}
```

## Task2 - Balance

Develop a function called getBalance.
This function will receive the account type and user as parameters.
The function should return the available balance.

### Exemplifying

- Validate data entry to determine the value received. If it is 2:
- Create a variable called responseBalance that stores the response to a prompt that asks the customer to enter 1 for savings or 2 for credit.
- Call the getBalance function, passing the user and account type.
   - Create a variable called balance that stores the value of the balance property for the type of account entered.
   - Return the balance variable in an alert.
```js
function getBalance(user, typeAccount){
    let {name, savingsBalance, cardsInformation } = user
    if (typeof name == 'string' && savingsBalance > 0 && cardsInformation.length > 0){
        if (typeAccount == 2){
            let type = setResponseWithDraw()
            let balance = 0
            if (type == 1){
                balance = savingsBalance
            }
            if (type == 2){
                for (i in cardsInformation){
                    balance += cardsInformation[i].creditBalance
                } 
            }
            alert(`Balance: ${balance}`)
            return user
        }
    }
    alert('User not valid.')
    return user
}
```

## Task3 - Deposit

Develop a function called makeDeposit. This function must receive as parameters the user and the amount to be deposited.

Deposits are added to the savings balance.

### Exemplifying


- Validate data entry to determine the value received. If it is 3:
- Create a variable called valueForDeposit that stores the amount the user wants to deposit via a prompt
   - The deposit amount cannot be of type string.
   - The deposit amount must be a positive integer.
   - Deposit amount must be greater than 5 and less than 500
   - If the variable requirements are not met, return: "This value is not allowed"
- Call the makeDeposit function, passing the user and the amount to be deposited.
   - Access the savingsBalance property and increase it with the amount passed to deposit.
   - Return within a "Deposit made successfully" alert
```js
function setValueForDeposit(){
	let depositAmount = parseFloat(prompt('Amount to deposit: '))
	while(depositAmount - depositAmount != 0 || depositAmount < 5 && depositAmount < 500){
			alert(`This value (${depositAmount}) is not allowed.`)
			depositAmount = parseFloat(prompt('Amount to deposit: '))
	}
	return depositAmount
	}

function makeDeposit(user, value){
  if (typeof user.name != 'string' && user.savingsBalance < 0 && user.cardsInformation.length == 0){
    alert('User not valid.') 
    return user
  } 
    user.savingsBalance += value
    alert(`Deposit ${value} made successfully! TOTAL: ${user.savingsBalance}`)
    return user
}
```