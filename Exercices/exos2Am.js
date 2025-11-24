
let motDePasse = "MonSuperMDP123"; // Le mot de passe à vérifier


//Vérifie si la longueur du mot de passe est suffisante
function verifierLongueur(mdp) {
    const LONGUEUR_MIN = 8;
    if (mdp.length >= LONGUEUR_MIN) {
        // Mot de passe assez long
        return true;
    } else {
        console.log("Erreur : Le mot de passe est trop court.");
        return false;
    }
}


//  Vérifie si le mot de passe contient au moins un chiffre
function verifierContientChiffre(mdp) {
    let contientChiffre = /[0-9]/.test(mdp);

    if (contientChiffre) {
        return true;
    } else {
        console.log("Erreur : Le mot de passe doit contenir au moins un chiffre.");
        return false;
    }
}


//Vérifie si le mot de passe n'est pas interdit (ex: "password")
function verifierInterdit(mdp, motInterdit) {
    if (mdp !== motInterdit) {
        return true;
    } else {
        console.log("Erreur : Ce mot de passe est interdit.");
        return false;
    }
}

function validerMotDePasse(mdpAChecker) {
    let estLong = verifierLongueur(mdpAChecker);
    let aUnChiffre = verifierContientChiffre(mdpAChecker);
    let nEstPasInterdit = verifierInterdit(mdpAChecker, "password");

    if (estLong && aUnChiffre && nEstPasInterdit) {
        console.log("Succès : Mot de passe validé.");
    } else {
        console.log("Échec : Veuillez corriger les erreurs.");
    }
}

validerMotDePasse(motDePasse); // On passe la variable globale
