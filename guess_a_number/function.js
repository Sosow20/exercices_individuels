
// Etape 1

function askUserANumber() {

    let input = prompt('choisissez un nombre');
    let givenNumber = parseInt(input)
    return givenNumber
}


//Etape 2

// function didIWin(givenNumber) {

// if (givenNumber < 22) {
//     alert('Plus grand'); 

// } else if (givenNumber > 22) {
//     alert('Plus petit'); 

// } else if (givenNumber === 22) {
//     alert('Bravo ! Vous avez deviné le nombre');
// } 
// }

// didIWin(22)



//Étape 3

// function didIWin(givenNumber) {
//     if (givenNumber === 22) {
//         return true
//     } else {
//         return false
//     }
// }

function gamePlay() {
    while (true) {
        let number = askUserANumber()
        let result = didIWin(number)
        if (result === true) {
            break
        } else {
            continue
        }
    }
}

// function gamePlay() {
//     let number = askUserANumber()
//     let result = didIWin(number)


//     while (result == false) {
//         let number = askUserANumber()
//         let result = didIWin(number)
//         if (result === true) {
//             break
//         } else {
//             continue
//         }
//     }
// }


//Étape 4



function askUser1ANumber(input) {
    const min = 0;
    const max = 50;
    
    
}

function didIWin(givenNumber, numbertoGuess) {
    if (givenNumber === numbertoGuess) {
        return true
    } else {
        return false
    }
}



//Étape 5



//Étape 6
