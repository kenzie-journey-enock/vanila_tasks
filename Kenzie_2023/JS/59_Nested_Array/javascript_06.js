// Challenge - JavaScript: ATM

const user = {
  name: "Jhon Doyle Fox",
  savingsBalance: 500,
  cardsInformation: [
    {
      number: "5160 4196 4843 3388",
      creditBalance: 1000,
      brand: "American Express",
    },
  ],
};

function validateAmount(amount) {
  amount = parseFloat(amount.replace(",", "."));

  if (isNaN(amount) || amount % 1 !== 0 || amount < 5 || amount > 500) {
    alert("This value is not allowed");

    return true;
  }
  return false;
  /* 
    parseFloat: converts the input into a floating-point number
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  */
  /* 
    replace: if the input has "," (comma) it is replaced with "." (dot)
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace 
  */
  /* 
  isNaN: checks if amount can be converted to a number
  returns true if the value is NaN (not a number)
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  */
  /*
   The % operator is used to check if the amount is an integer.
   Remember that for integer numbers, the remainder of the division by 1 always equals zero.
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
  */
}

// 1 - Withdrawal
let responseWithdraw;
let withdrawnAmount;

// do-while loop to execute the prompt while the user input is not 1 or 2.
do {
  responseWithdraw = prompt("Enter 1 for savings or 2 for credit:");
} while (responseWithdraw !== "1" && responseWithdraw !== "2");

do {
  withdrawnAmount = prompt("Withdrawal amount:");
} while (validateAmount(withdrawnAmount));

function makeWithdrawal(user, responseWithdraw, withdrawnAmount) {
  if (responseWithdraw === "1" && user.savingsBalance >= withdrawnAmount) {
    user.savingsBalance -= withdrawnAmount;
    return alert("Withdrawal completed.");
  } else if (
    responseWithdraw === "2" &&
    user.cardsInformation[0].creditBalance >= withdrawnAmount
  ) {
    user.cardsInformation[0].creditBalance -= withdrawnAmount;
    return alert("Withdrawal completed.");
  }

  return alert("Insufficient balance");
}

makeWithdrawal(user, responseWithdraw, withdrawnAmount);

// 2 - Balance

let responseBalance;

// do-while loop to execute the prompt while the user input is not 1 or 2.
do {
  responseBalance = prompt("Enter 1 for savings or 2 for credit:");
} while (responseBalance !== "1" && responseBalance !== "2");

function getBalance(responseBalance, user) {
  const balance =
    responseBalance === "1"
      ? user.savingsBalance
      : user.cardsInformation[0].creditBalance;

  return alert(balance);
  /*
 The ternary operator evaluates the condition; if the first expression is true, it returns the expression that comes after the "?",
 if false, it returns the expression that comes after the ":"
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
}

getBalance(responseBalance, user);

// 3 - Deposit

let valueForDeposit;

/* 
do-while loop to execute the prompt while the input does not meet 
the rules checked by the validateAmount function:
The deposit amount cannot be of type string (text).
The deposit amount must be a positive integer.
The deposit amount must be greater than 5 and less than 500.
*/

do {
  valueForDeposit = prompt("Deposit amount:");
} while (validateAmount(valueForDeposit));

function makeDeposit(user, valueForDeposit) {
  user.savingsBalance += parseInt(valueForDeposit);

  return alert("Deposit made successfully");
}

makeDeposit(user, valueForDeposit);
