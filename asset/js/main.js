const quantite = document.getElementById('quantite')
const bouton = document.getElementById('bouton')
const message = document.getElementById('message')

bouton.addEventListener('click', afficherResultat)

function afficherResultat() {
    if (quantite.value <= 10) {
    prix = quantite.value * 0.1;
    console.log(prix);

    } else if (quantite.value <=30) {
    prix = (quantite.value -10) * 0.09 +1 
    console.log(prix)

    } else if (quantite.value > 30) {
    prix = (quantite.value -30) * 0.08 + 2.80
    console.log(prix)
    }
    message.innerHTML = (prix + '€')
}


