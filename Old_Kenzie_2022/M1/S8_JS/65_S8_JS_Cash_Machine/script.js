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
const userNot = {
    name: 42,
    savingsBalance: 500,
    cardsInformation: [
        ],
    };

// Task 1 Withdrawal

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

function task1CashMachine() { 
    return makeWithDrawal(user, setResponseWithDraw(), setWithDrawAmount())
}
// console.log(task1CashMachine())

// Task 2 Balance

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

function task2CashMachine(){
    return getBalance(user, 2)
}
// console.log(task2CashMachine())

// Task 3 Deposit

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

function task3CashMachine(){
  let valueForDeposit = setValueForDeposit()
  return makeDeposit(user, valueForDeposit)
}
// console.log(task3CashMachine())