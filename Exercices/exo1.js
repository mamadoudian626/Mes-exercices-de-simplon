//  Déclaration des variables de base
let nomArticle = "Clavier Mécanique";   
let prixUnitaire = 2000;                
let quantite = 3;                      
let clientFidele = true;                

//  Calcul du prix total sans réduction
let prixTotal = prixUnitaire * quantite;
let tauxReduction = 0.10; 

//   Vérification des conditions
if (clientFidele === true && prixTotal > 20000) {
    prixTotal = prixTotal - (prixTotal * tauxReduction);
}

// Message final 
console.log(
    "La commande de " + nomArticle + " (x" + quantite + ") par le client " +
    (clientFidele ? "Fidèle" : "Non-Fidèle") + " s'élève à " + prixTotal + " €."
);
