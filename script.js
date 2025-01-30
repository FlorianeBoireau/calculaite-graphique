const boutonsNombre = document.getElementsByClassName("btn btn-warning")
const textResultat = document.getElementsByClassName("form-control")

function calculate(boutonsNombre,textResultat) {
    
    
    boutonsNombre.addEventListener("click", () => {
        switch(boutonsNombre.value) {
            case "C":
                textResultat.textContent = "" ;
            case "+" :
                textResultat.textContent += boutonsNombre.value   
        }

    })
}
calculate(boutonsNombre,textResultat)