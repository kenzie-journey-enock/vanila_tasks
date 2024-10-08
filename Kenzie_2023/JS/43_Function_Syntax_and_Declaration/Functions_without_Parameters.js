function printHello(){
  console.log('NHANHANHANHANHANHA')
}

function verifyMonitor(){
  let monitor = {
    entregas: 100,
    entrevistas: 100,
    presenca: 100
  }

  let verification = monitor.entregas == 100 && monitor.entrevistas == 100 && monitor.presenca == 100

  if(verification){
    console.log('Possível monitor(a).')
  } else {
    console.log('Selecionar outro(a) aluno(a).')
  }

}

function isBigger(){
  let var1 = 1
  let var2 = 2
  let var3 = 3

  let bigger = var1 > var2 && var1 > var3 ? var1 : var2
  bigger = bigger > var3 ? bigger : var3
  return `Bigger is: ${bigger}`
}


function fullName(){
  let name = 'Bernardo'
  let lastName = 'Enock'
  let age = 25

  return `Meu nome é ${name} ${lastName}, e tenho ${age} anos`
}

fullName()