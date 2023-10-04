// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
gender = process.argv[2]; // Genero 
height = process.argv[3]; // Altura
barReps = process.argv[4]; // Repetições com barra
barSeconds = process.argv[5]; // Tempo das repetições com barra 
abs = process.argv[6]; // Abdominais
runDistance = process.argv[7]; // Distância da corrida
runTime = process.argv[8]; // Tempo da corrida
swimDistance = process.argv[9]; // Distância da natação
swimTime = process.argv[10]; // Tempo da natação
diveTime = process.argv[11]; // Tempo de mergulho

passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...

*/
// **sua lógica a partir daqui**
if (gender === "male") {
  // Candidatos do sexo masculino ("male"):

  // Altura mínima de 1,70 metros;
  const male_fit1 = height >= 1.70 

  // Pelo menos 6 repetições na barra ou duração mínima de 15 segundos;
  const male_fit2 = barReps >= 6 || barSeconds >= 15

  // Pelo menos 41 abdominais;
  const male_fit3 = abs >= 41

  // Pelo menos 3km em no máximo 12 minutos de corrida 
  const msub1Fit4 = runDistance >= 3000 && runTime <= 720
  // ou pelo menos 5km em no máximo 20 minutos de corrida;
  const msub2Fit4 = runDistance >= 5000 && runTime <= 1200
  const male_fit4 = msub1Fit4 || msub2Fit4

  // Pelo menos 100 metros em no máximo 1 minuto de natação 
  const msub1Fit5 = swimDistance >= 100 && swimTime <= 60
  // ou no máximo 30 segundos de mergulho;
  const msub2Fit5 = diveTime <= 30
  const male_fit5 = msub1Fit5 || msub2Fit5
  
  male_fit1 &&
  male_fit2 &&
  male_fit3 &&
  male_fit4 &&
  male_fit5 ? passed = true : passed

} else if (gender === "female"){
  // Candidatos do sexo feminino ("female"):

  // Altura mínima de 1,60 metros;
  const female_fit1 = height >= 1.60 

  // Pelo menos 5 repetições na barra ou duração mínima de 12 segundos;
  const female_fit2 = barReps >= 5 || barSeconds >= 12

  // Pelo menos 41 abdominais;
  const female_fit3 = abs >= 41

  // Pelo menos 4km em no máximo 15 minutos de corrida 
  const msub1Fit4 = runDistance >= 4000 && runTime <= 900
  // ou pelo menos 6km em no máximo 22 minutos de corrida;
  const msub2Fit4 = runDistance >= 6000 && runTime <= 1320
  const female_fit4 = msub1Fit4 || msub2Fit4

  // Pelo menos 100 metros em no máximo 1 minuto de natação 
  const msub1Fit5 = swimDistance >= 100 && swimTime <= 60
  // ou no máximo 30 segundos de mergulho; 
  const msub2Fit5 = diveTime <= 30
  const female_fit5 = msub1Fit5 || msub2Fit5
  
  female_fit1 &&
  female_fit2 &&
  female_fit3 &&
  female_fit4 &&
  female_fit5 ? passed = true : passed
}
/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);