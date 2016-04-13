// Création d'une fonction d'ambience, invisible du transpilateur
global['power'] = function power(value) {
    return value * value;
};

// Déclaration de la fonction d'ambience
declare function power(value:number):number;

console.log(power(7));