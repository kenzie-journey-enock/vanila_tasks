// Implemente aqui as funções

function sitUps(abs){
  return abs >= 41
}

function swim(swimDistance, swimTime, diveTime){
  const msub1Fit5 = swimDistance >= 100 && swimTime <= 60
  const msub2Fit5 = diveTime <= 30

  return msub1Fit5 || msub2Fit5
}

function checkHeight(gender, height){
  if (gender != 'female' && gender != 'male') return false

  return gender === "female" ? height >= 1.60 : height >= 1.70
}

function barTest(gender, barReps, barSeconds){
  if (gender != 'female' && gender != 'male') return false
  
  return gender === "female" ? barReps >= 5 || barSeconds >= 12 : barReps >= 6 || barSeconds >= 15
}

function run(gender, runDistance, runTime){
  if (gender != 'female' && gender != 'male') return false

  const msub1Run = runDistance >= 3000 && runTime <= 720
  const msub2Run = runDistance >= 5000 && runTime <= 1200
  const maleRun = msub1Run || msub2Run

  const fsub1Run = runDistance >= 4000 && runTime <= 900
  const fsub2Run = runDistance >= 6000 && runTime <= 1320
  const femaleRun= fsub1Run || fsub2Run

  return gender === "female" ? femaleRun : maleRun
}

function showMessage(message){
  let mens = `${message}`
  return mens.toUpperCase()
}

function areCandidateResultsValid(gender, 
height, 
barReps,
barSeconds, 
abs, 
runDistance, 
runTime, 
swimDistance, 
swimTime, 
diveTime) {

  let message = false
  message = sitUps(abs) == true
  && swim(swimDistance, swimTime, diveTime) == true
  && checkHeight(gender, height) == true
  && barTest(gender, barReps, barSeconds) == true
  && run(gender, runDistance, runTime) == true

  console.log(showMessage(message))
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);