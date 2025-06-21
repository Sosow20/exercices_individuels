
// Etape 1

function askUserANumber() {

  let input = prompt('choisissez un nombre');
  let givenNumber = Number(input)
  alert(`le nombre choisis est ${givenNumber}`)
}  
askUserANumber()


//Etape 2

function didIWin(givenNumber) {
    
if (givenNumber < 22) {
    alert('Plus grand'); 

} else if (givenNumber > 22) {
    alert('Plus petit');  
}
else if (givenNumber === 22) {
    alert('Bravo ! Vous avez deviné le nombre');
} 
else {
    alert('Veuillez entrer un nombre valide');
}
} 

didIWin()


//Étape 3

function didIWin() {
    if (userFindNumber) {
        return true
    }
    else {
        return false
    }
}

function gamePlay() {
    if (didIWin === true) {
        return 'on arrête le jeu'
    }
}


//Étape 4




//Étape 5



//Étape 6
