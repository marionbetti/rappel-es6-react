// dans le dossier react => create-react-app jour1-react-es6 (télécharger react)
// cd jour1-react-es6
// code . => ouvrir visual studio
// src/index.js => coller tout le texte que l'on avait mis dans jour1-es6/01-objet.js qui remplace tout le texte
// yarn start

// objet littéral
// variable complexe : contient plusieurs valeurs
// contenir des fonctions

const person = {
  nom: "Moi", // attribut d'objet ou propriété d'objet
  parler: function() {
    console.log("parler");
  }, // méthode d'objet = fonction dans l'objet manière classique d'écrire
  marcher() {
    console.log("Marcher");
  } // nouvelle manière d'écrire une méthode de d'objet
};

// deux manières d'utiliser de méthode
person.marcher();

const action = "parler";
person[action](); //autre manière d'exécuter les instructions de person.marcher
