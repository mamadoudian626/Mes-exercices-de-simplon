
//Déclaration des variables
let passWord = "mama";
let resultatValidation = true;

// On vérifie si le mot de passe contient au moins 8 caractères
if (passWord.length < 8) {
    console.log("Erreur : Le mot de passe est trop court.");
    resultatValidation = false;
}

// La regex /[0-9]/ permet de vérifier s'il existe AU MOINS un chiffre dans la chaîne
let contientChiffre = /[0-9]/.test(passWord);  

if (!contientChiffre) {  
    console.log("Erreur : Le mot de passe doit contenir au moins un chiffre.");
    resultatValidation = false;
}


// On vérifie que le mot de passe n'est PAS exactement "password"
if (passWord === "password") {
    console.log("Erreur : Ce mot de passe est interdit.");
    resultatValidation = false;
}

// Si toutes les conditions sont validées...
if (resultatValidation === true) {
    console.log("Succès : Le mot de passe est sécurisé et validé !");
} 
// Sinon au moins une erreur a été détectée
else {
    console.log("Échec : Veuillez revoir votre mot de passe pour corriger les erreurs ci-dessus.");
}
