// ======================================
// 1. VARIABLES GLOBALES
// ======================================

// Nom de l'article
let nomArticle = "Clavier Mécanique";

let prixUnitaire = 75.99;
let quantite = 3;
let clientFidele = true;
let tauxReduction = 0.10;
let TVA = 0.20;



// FONCTION : Calculer le prix hors taxes (HT)
function calculerPrixHT(prix, qte) {
    let prixHT = prix * qte;

    return prixHT;
}



// FONCTION : Calculer le prix TTC utilisant la TVA globale

function calculerPrixTotalTTC(prixHT) {
    // Prix TTC = prixHT * (1 + TVA)
    let prixTTC = prixHT * (1 + TVA);

    return prixTTC;
}




//  FONCTION : Vérifier la réduction
function verifierReduction(estFidele, prix, taux) {
    // Variable locale (accessible seulement ici)
    let prixApresReduction = prix;

    // Si le client est fidèle ET que le prix dépasse 200 €
    if (estFidele === true && prix > 200) {
        // On applique la réduction
        prixApresReduction = prix - (prix * taux);
    }

    // On retourne le prix final (avec ou sans réduction)
    return prixApresReduction;
}


//  Calcul du prix HT
let prixHT = calculerPrixHT(prixUnitaire, quantite);

// Calcul du prix TTC
let prixTTC = calculerPrixTotalTTC(prixHT);

// Application éventuelle de la réduction
let prixFinal = verifierReduction(clientFidele, prixTTC, tauxReduction);

//Resultat final 
console.log(
    "Le prix final (TTC après réduction) pour " +
    nomArticle +
    " est : " +
    prixFinal.toFixed(2) +
    " €."
);
