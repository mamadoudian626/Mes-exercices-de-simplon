

    // a) Déclaration des variables
    let prixBrut = 11.6789;
    let tauxTVA = "19.6";


    // b) Partie A : Formater prixBrut à 2 décimales
    let prixFormaté = prixBrut.toFixed(2);  
    console.log("Prix formaté :", prixFormaté, "de Type :", typeof prixFormaté);


    // c) Partie B : Convertir la TVA en entier
    let tvaEntiere = parseInt(tauxTVA);  // 
    console.log("TVA convertie en entier :", tvaEntiere);


    // d) Défi : Vérifier si c'est un entier valide
    let estEntier = Number.isInteger(tvaEntiere);
    console.log("La TVA est-elle un entier valide ?", estEntier);


