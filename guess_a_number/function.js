/* Etape 1
Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur. 
(Attention tous les compilateurs en ligne ne permettent pas la prise d’input, prendre celui dans l’énoncé si besoin).
Stocker sa réponse dans une variable de type adéquat nommée givenNumber. */

// Etape 1

function askUserANumber() {

  let givenNumber = Number(prompt('Entrer un nombre'));
}  
alert(givenNumber)

// Pour le moment nous allons considérer que le nombre à deviner est 22.

/* Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin

Si le nombre est plus petit que 22, on affichera à l’utilisateur “Plus grand”.
Si le nombre est plus grand que 22 on affichera à l’utilisateur “Plus petit”.
Si le nombre est 22 on affichera “Bravo ! Vous avez deviné le nombre”.
L’ordre dans lequel vous ferez vos conditions est important, le but est d’exécuter le moins de code possible. 
Demandez-vous ce qu’il faut vérifier en premier.*/


/* /* ⚠️ Attention : le prompt() bloque l’exécution de la page et stoppe l’affichage du rendu. 
Pour afficher des informations à la suite d’un prompt(), utilisez alert(). */

function didIWin(givenNumber) {
    
if (givenNumber < 22) {
    return 'Plus grand'  
}
if (givenNumber > 22) {
    return 'Plus petit'  
}
else if (givenNumber === 22) {
    return 'Bravo ! Vous avez deviné le nombre'
}
}

alert(didIWin(21))


/* Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre. */ 
function gamePlay(){}


/* Étape 3
Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon.
Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. En revanche, si elle a retourné false,
on redemande un chiffre à l’utilisateur. */

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


/* Étape 4
Maintenant on va considérer que l’on a pas un seul joueur mais 2 🧑‍🤝‍🧑.

Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
La fonction didIWin doit prendre désormais un autre paramètre, le nombre à deviner.
Reprenez la logique 1, 2 et 3 pour gérer la partie et lui indiquer s’il doit continuer à jouer ou s’il a gagné. */



/* Étape 5
Afficher le range (0-50) auquel notre utilisateur à le droit autour du champ. Quelque chose comme 0 < ? < 50.
Si l’utilisateur a gagné nous effacerons tout pour afficher notre message de bravo !
En revanche, tant que l’utilisateur n’a pas trouvé le bon chiffre, on affichera le nombre de tentatives en cours sur la partie.
Ajouter un champ input qui permet à l’utilisateur de rentrer sa proposition de nombre directement dans un champ sur la page avec un bouton valider. */


/* Étape 6
Si le nombre proposé par l’utilisateur est plus petit que le nombre à deviner, alors vous changerez le range minimal. 
Ce ne sera plus 10 mais le dernier nombre proposé. 
Attention si le nombre proposé est en dessous du range minimal, cela ne sert à rien de le changer.

Ex : 12 < ? < 45, si le nombre proposé est 10, on ne change pas le range. 
Mais on peut afficher une alert pour indiquer que le nombre proposé n’est pas dans le range.

Même chose si le nombre est supérieur. */