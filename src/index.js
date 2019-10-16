// combo arrow function, this et objet littéral

const formation = {
  nom: "Developpeur Web & Mobile",
  apprendre() {
    console.log(this.nom);
  },
  apprendreVite() {
    setTimeout(function() {
      console.log(this.nom); // attention au contexte
      console.log(this);
    }, 1000);
  },
  apprendreViteSelf() {
    // méthode super classique
    const self = this; // créer une variable qui va contenir la valeur de this (formation)

    setTimeout(function() {
      console.log(self.nom); // puis l'utiliser dans la fonction
      console.log(self);
    }, 2000);
  },
  apprendreViteArrow() {
    setTimeout(() => {
      // Arrows functions ne créent pas de nouveau contexte
      console.log(this.nom);
    }, 3000);
  }
};

formation.apprendre();
formation.apprendreVite();
formation.apprendreViteSelf();
formation.apprendreViteArrow();
