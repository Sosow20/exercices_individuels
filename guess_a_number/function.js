
// Etape 1

function askUserANumber(message) {

    let input = prompt(message);
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

// function gamePlay() {
//     while (true) {
//         let number = askUserANumber()
//         let result = didIWin(number)
//         if (result === true) {
//             break
//         } else {
//             continue
//         }
//     }
// }

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



// function askUser1aNumbertoGuess() {
//     while (true) {
//         let input = askUserANumber('choisir un nombre entre 0 et 50')

//         if (input > 50) {
//             continue
//         } else if (input < 0) {
//             continue
//         } else {
//             return input

//         }
//     }
// }



function didIWin(givenNumber, numbertoGuess) {
    if (givenNumber === numbertoGuess) {
        return true
    } else {
        return false
    }
}


// function gamePlay() {
//     while (true) {
//         let numbertoGuess = askUser1aNumbertoGuess()
//         let inputNumber = askUserANumber('choisir nombre a deviner')
//         let result = didIWin(inputNumber, numbertoGuess)

//         if (result === true) {
//             alert('gagné')
//             break
//         } else {
//             alert('perdu')

//             continue
//         }
//     }
// }




//Étape 5




// function gamePlay() {
//     let attempts = 0

//     while (true) {
//         attempts = attempts + 1
//         let numbertoGuess = askUser1aNumbertoGuess()
//         let inputNumber = askUserANumber('choisir nombre a deviner')
//         let result = didIWin(inputNumber, numbertoGuess)

//         if (result === true) {
//             alert('gagné')
//             break
//         } else {
//             alert(`perdu, nombre de tentatives = ${attempts}`)

//             continue
//         }
//     }
// }



//Étape 6

