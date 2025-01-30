document.addEventListener("DOMContentLoaded", function () {
    const boutons = document.querySelectorAll(".btn-warning")
    console.log(boutons)
    const textResultat = document.querySelector(".form-control")

    boutons.forEach((bouton) => {
        bouton.addEventListener("click", () => {
            
            textResultat.value += bouton.value;
            console.log(bouton.value)
            // console.log(typeof(textResultat.value))

            let result = [textResultat.value]
            

            console.log(typeof(result))
            console.log(result)

            switch(bouton.value) {
                case "C":
                    textResultat.value = "" ;
                break;
                case "=":
                    textResultat.value = console.log(textResultat.value);
                    break;
                    
            
            }      
        })
    })
})








// document.addEventListener("DOMContentLoaded", function () {
//     // Récupération des boutons et du champ de résultat
//     const boutons = document.querySelectorAll(".btn-warning");
//     const textResultat = document.querySelector(".form-control");

//     // Vérifie si les éléments existent bien
//     if (!textResultat || boutons.length === 0) {
//         console.error("Les éléments ne sont pas trouvés !");
//         return;
//     }

//     // Ajout des événements sur chaque bouton
//     boutons.forEach((bouton) => {
//         bouton.addEventListener("click", () => {
//             switch (bouton.value) {
//                 case "C":
//                     textResultat.value = ""; // Réinitialise l'affichage
//                     break;
//                 case "=":
//                     try {
//                         textResultat.value = eval(textResultat.value); // Calculer l'expression
//                     } catch {
//                         textResultat.value = "Erreur";
//                     }
//                     break;
//                 default:
//                     textResultat.value += bouton.value; // Ajouter la valeur du bouton
//                     break;
//             }
//         });
//     });
// });
