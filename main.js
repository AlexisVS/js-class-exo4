// ## EXO1

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
class Lieu {
    constructor(nom) {
        this.nom = nom,
            this.personnes = []
    }
}
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
let molengeek = new Lieu("MolenGeek");
let snack = new Lieu("Snack");
let maison = new Lieu("Maison");
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), 
// cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
class Personne {
    constructor(nom, prenom, argent) {
        this.nom = nom,
            this.prenom = prenom,
            this.argent = argent,
            this.lieu = ""
    }
    seDeplacer = (lieu) => {
        bus.embarquer(this);
        this.lieu = lieu;
    }
}
// ### Puis créez une instance de votre personnage.
let alexis = new Personne("Van San", "Alexis", 3000);
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) 
class Bus {
    constructor() {
        this.personnes = [],
            this.caisse = 10
    }
    embarquer = (personnage) => {
        if (personnage.argent >= 2.8) {
            personnage.argent -= 2.8;
            this.caisse += 2.8;
            personnage.argent
            this.caisse
        }
    }
}
// et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne)
// qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, 
// et le personnage rentre dans le bus. Le bus cout 2.80.

// ### Créez une instance de Bus. 
let bus = new Bus;
// ### 8h00 Vous êtes à la maison.
// ### 8h30 Vous prennez le bus vers MolenGeek.
alexis.seDeplacer(molengeek)
console.log(alexis);
// ### 8h45 Vous êtes à MolenGeek.
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
alexis.seDeplacer(snack);
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
alexis.seDeplacer(maison);

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus
console.log(alexis);
console.log(bus.caisse.toFixed(2));
console.log((2.6*3).toFixed(2));