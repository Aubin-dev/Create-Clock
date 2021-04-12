
// Recuperation des éléments du Dom
const heure = document.querySelector('[donnee-heure-hand]')
const minute = document.querySelector('[donnee-minute-hand]')
const seconde = document.querySelector('[donnee-second-hand]');

let input = document.querySelector('input')



//creation d'un span pour le user-name
let h1 =document.createElement('span')


//style du user-name
h1.textContent='Aubin-dev';
h1.style.position='absolute'
h1.style.bottom='40%'
h1.style.fontFamily='bold'
document.body.append(h1)






setInterval(setClock, 1000)

function setClock() {
    const now = new Date()
    const secondsRatio = now.getSeconds() / 60
    const minutesRatio = (secondsRatio + now.getMinutes()) / 60
    const hoursRatio = (minutesRatio + now.getHours()) / 12


    // Declaration de nos variables 
    let jour, jourNum, mois , moisNum , quand, annee;



    // Recuperation du jour 
    jour=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    jourNum=jour[now.getDay()];


    // Recuperation du numéro correspondant à la date
    quand=now.getDate();


    // Recuperation du mois 
    mois=["Janvier","fevrier","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Novembre","Decembre"]
    moisNum=mois[now.getMonth()];



    // Recuperation de l'année
    annee = now.getFullYear()



    // Mettre le jour,le numéro du jour, le mois et l'année sur le Dom 
    input.value=jourNum + " " + quand + " " + moisNum + " " + annee


    //Rotation des aiguilles
    Rotation(seconde, secondsRatio)
    Rotation(minute, minutesRatio)
    Rotation(heure, hoursRatio)
}

// fonction permettant la rotation des aiguilles
function Rotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}











