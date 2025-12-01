
      // Déclaration de la phrase
      let phrase = " le dOm est un pont vers le web interactif. ";

      // Mettre toute la phrase en minuscule
      phrase = phrase.toLowerCase();
      //  Supprimer les espaces autour
      phrase = phrase.trim();

      //  Corriger la casse .
      phrase = phrase.charAt(0).toUpperCase() + phrase.slice(1);

      console.log("Phrase formatée :", phrase);

      phrase = phrase.replace("dom", "DOM");

      console.log("Phrase corrigée :", phrase);

      // Vérification du mot "pont"
      let contientPont = phrase.includes("pont");
      console.log("Contient 'pont' ?", contientPont);

      // c) Défi : Extraire le mot "interactif"
      // On cherche sa position dans la phrase
      let indexDebut = phrase.indexOf("interactif");

      // On utilise slice() pour extraire
      let extrait = phrase.slice(indexDebut, indexDebut + "interactif".length);

      console.log("Mot extrait :", extrait);
