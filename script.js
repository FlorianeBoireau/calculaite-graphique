document.addEventListener("DOMContentLoaded", function () {
    let sum = 0
    let input = document.getElementById('number-input')


    document.getElementById('add-button').addEventListener(
        'click', () => {
            console.log(sum+=input)
        }
    )
})

function writeNumber(imput) {
    
}

function add (num1, num2) {
    return num1 + num2
}

function substract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

console.log(add(8,4))
console.log(substract(8,4))
console.log(multiply(8,4))
console.log(divide(8,4))


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
