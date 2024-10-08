// Não altere o nome das variavéis ou o texto do prompt! 
// Modifique apenas o tipo da variavel!            
var gender = prompt('Genero');
var height = prompt('Altura');
var barReps = prompt('Repetições com barra');
var barSeconds = prompt('Tempo das repetições com barra');
var abs = prompt('Abdominais');
var runDistance = prompt('Distância da corrida');
var runTime = prompt('Tempo da corrida');
var swimDistance = prompt('Distância da natação');
var swimTime = prompt('Tempo da natação');
var diveTime = prompt(' Tempo de mergulho');

var result = false;

//Desenvolva seu código aqui:

var verificationMale = gender === 'male' && height >= 1.7 && (barReps >= 6 || barSeconds >= 15) && abs >= 41

if(verificationMale){
    
    var verificationMaleRun = (runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)
    
    if (verificationMaleRun){
        
        var verificationMaleSwim = (swimDistance >= 100 && swimTime <= 60) ||  diveTime <= 30
        
        if(verificationMaleSwim){
            result = true
        }
        
    }
} else {
    
    var verificationFemale = gender === 'female' && height >= 1.6 && abs >= 41 && (barReps >= 5 || barSeconds >= 12)
    
    if(verificationFemale){
        var verificationFemaleRun = (runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)
        
        if (verificationFemaleRun){
            var verificationFemaleSwim = (swimDistance >= 100 && swimTime <= 60) ||  diveTime <= 30
            
            if(verificationFemaleSwim){
                result = true
            }
        }
    }
}

console.log(result);
        