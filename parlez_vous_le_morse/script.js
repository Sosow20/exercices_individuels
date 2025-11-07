import {latinToMorse} from "./latintomorse.js";
import {morseToLatin} from "./morsetolatin.js";

//^ Etape 1 :

function getLatinCharacterList(text) {
    return text.split("")                                //.split découpe le mot en plusieurs caractères
}
// console.log(getLatinCharacterList('hello, world'))

//^ Etape 2 :

function translateLatinCharacter(alphabet) {
    const majAlphabet = alphabet.toUpperCase()         // on lui dit de convertir un caractère en Majuscule à l'inverse de .toLowerCase
    return latinToMorse[majAlphabet]                   // on lui dit de chercher le caractère en Majuscule dans le tableau latinToMorse
}

// console.log(translateLatinCharacter('B'))


//^ Etape 3

function encode(text) {
    const sentence = getLatinCharacterList(text)                            //on divise le text en plusieurs caractères
    const encodeAlphabet = sentence.map(translateLatinCharacter)            // on parcours chaque caractère du tableau en lui attribuant son équivalent morse
    return encodeAlphabet.join('')                                          // et enfin on rassemble les caractères morse 
}

console.log(encode('HELLO'))

//^ Etape 4




//^ Etape 5 DOM


