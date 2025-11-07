// // 1.1 Une ligne d'étoiles

// function afficherEtoiles(n) {
//     console.log("*".repeat(n));
// }

// afficherEtoiles(2)
// afficherEtoiles(5)

// // 1.2 Carré d'étoiles

// function afficherRectangle(hauteur, largeur) {

//     let max = 5
//     for (let i = 0; i < max; i++) {
//         let result = ''
//         for (let j = 0; j < i; j++) {
//             result += '*'
//         }
//         console.log(result)
//     }

// }


// afficherRectangle(5, 5)


// // 1.3 Triangle d'étoiles

// 1.1 Fonction pour afficher une ligne d'étoiles

function afficherEtoiles(n) {
    let ligne = '';
    for (let i = 0; i < n; i++) {
        ligne += '*';
    }
    console.log(ligne);
}

// 1.2 Fonction pour afficher un rectangle d'étoiles

function afficherRectangle(hauteur, largeur) {
    for (let i = 0; i < hauteur; i++) {
        afficherEtoiles(largeur);
    }
}

// 1.3 Fonction pour afficher un triangle droit

function afficherTriangleDroite(n) {
    for (let i = 1; i <= n; i++) {
        let ligne = '';
        for (let j = 0; j < i; j++) {
            ligne += '*';
        }
        ligne += '\\';
        console.log(ligne);
    }
}

// 1.4 Fonction pour afficher un triangle gauche

function afficherTriangleGauche(n) {
    for (let i = 1; i <= n; i++) {
        let ligne = '';

        for (let j = 0; j < n - i; j++) {
            ligne += ' ';
        }
        ligne += '/';

        for (let j = 0; j < i - 1; j++) {
            ligne += '*';
        }
        console.log(ligne);
    }
}

// 1.5 Fonction pour afficher la pointe du sapin

function afficherPointeSapin(hauteur) {

    let espaces = ' '.repeat(hauteur);
    console.log(espaces + '+');

    for (let i = 1; i <= hauteur; i++) {
        let ligne = '';

        for (let j = 0; j < hauteur - i; j++) {
            ligne += ' ';
        }

        ligne += '/';

        for (let j = 0; j < i - 1; j++) {
            ligne += '*';
        }

        ligne += '|';

        for (let j = 0; j < i - 1; j++) {
            ligne += '*';
        }

        ligne += '\\';

        console.log(ligne);
    }
}

// 2.1 Fonction pour afficher un étage spécifique

function afficherEtage(hauteur, pointe_offset, espacement = 0) {
    for (let i = pointe_offset + 1; i <= hauteur + pointe_offset; i++) {
        let ligne = '';

        ligne += ' '.repeat(espacement);

        for (let j = 0; j < hauteur - (i - pointe_offset); j++) {
            ligne += ' ';
        }

        ligne += '/';

        for (let j = 0; j < i - 1; j++) {
            ligne += '*';
        }

        ligne += '|';

        for (let j = 0; j < i - 1; j++) {
            ligne += '*';
        }

        ligne += '\\';

        console.log(ligne);
    }
}

// 2.3 Fonction principale pour afficher le sapin

function afficherSapin(etages, hauteur_etage) {

    let espacementMax = etages * hauteur_etage;
    console.log(' '.repeat(espacementMax) + '+');

    for (let etage = 0; etage < etages; etage++) {
        let pointe_offset = etage * hauteur_etage;
        let espacement = (etages - etage - 1) * hauteur_etage;

        afficherEtage(hauteur_etage, pointe_offset, espacement);
    }
}


function afficherSapinDecore(etages, hauteur_etage, hauteur_tronc = 3) {

    let espacementMax = etages * hauteur_etage;
    console.log(' '.repeat(espacementMax) + '+');

    for (let etage = 0; etage < etages; etage++) {
        let pointe_offset = etage * hauteur_etage;
        let espacement = (etages - etage - 1) * hauteur_etage;

        afficherEtageDecore(hauteur_etage, pointe_offset, espacement);
    }

    afficherTronc(hauteur_tronc, espacementMax);
}

function afficherEtageDecore(hauteur, pointe_offset, espacement = 0) {
    for (let i = pointe_offset + 1; i <= hauteur + pointe_offset; i++) {
        let ligne = '';

        ligne += ' '.repeat(espacement);

        for (let j = 0; j < hauteur - (i - pointe_offset); j++) {
            ligne += ' ';
        }

        ligne += '/';

        for (let j = 0; j < i - 1; j++) {
            ligne += getDecoration();
        }

        ligne += '|';

        for (let j = 0; j < i - 1; j++) {
            ligne += getDecoration();
        }

        ligne += '\\';

        console.log(ligne);
    }
}

// Fonction pour générer des décorations aléatoires

function getDecoration() {
    const decorations = ['*', '*', '*', '*', 'o', '+', '*'];
    const randomIndex = Math.floor(Math.random() * decorations.length);
    return decorations[randomIndex];
}

// Fonction pour afficher le tronc

function afficherTronc(hauteur, espacement) {
    for (let i = 0; i < hauteur; i++) {
        console.log(' '.repeat(espacement) + '###');
    }
}

afficherPointeSapin(4);
afficherSapin(3, 3);
afficherSapinDecore(4, 3, 3);






