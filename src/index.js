class Person {
  // Majuscule en 1ère lettre

  // on n'est pas en typescript private / public / protected n'existe pas
  //nom

  constructor(nom) {
    // dispose d'une fonction constructor exécutée lorsque l'on fait un new
    // instancier les variables de class
    this.name = nom;
    //this.apprendre = this.apprendre.bind(this);
  }

  apprendre() {
    console.log(this.name + " est en train de se former en Javascript");
  }
}

const Alain = new Person("Alain");

Alain.apprendre();
