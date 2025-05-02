// Creazione funzione per creare elementi
function creaElemento(tag, className = '', textContent = '', attributer = {}) {
    const el = document.createElement(tag);

    if (className) el.className = className;
    if (textContent) el.textContent = textContent;

    // Aggiunge attributi extra (id, type ecc)
    for (let attr in attributer) {
        el.setAttribute(attr, attributer[attr]);
    } 
    return el;
}




// Selezioniamo l'elemento principale dove inseriremo il  contatore
const  app = document.getElementById('app');

// Inizializziamo il valore del contatore
let contatore = 0;

// Creazione del titolo e aggiungiamolo al dom
const titolo = creaElemento('h1','','Contatore');
app.appendChild(titolo);

// Creiamo gli elementi del contatore
const counterDisplay = creaElemento('div','', contatore, {id:'contatore'});
app.appendChild(counterDisplay)

// Creazione del bottone "aumenta"
const decrementaButton = creaElemento('button','','-'.{'data-action':'decrementa'})
const azzeraButton = creaElemento('button','','Azzera'.{'data-action':'azzera'})
const aumentaButton = creaElemento('button','','+'.{'data-action':'incrementa'})


app.appendChild(aumentaButton);
app.appendChild(azzeraButton);
app.appendChild(decrementaButton);


app.addEventListener('click', function(event) {
    const action= event.target.getAttribute('data-action');

    if (!action) return;

    if (action === 'incrementa') {
        contatore++
    } else if (action === 'azzera') {
        contatore = 0;
    } else if (action === 'decrementa') {
        contatore--;
    }
    // Aggiorna il contatore
    counterDisplay.textContent = contatore;
});



// Funzione per  aggiornare la pagina 
function updateCounter() {
    counterDisplay.classList.add('animazione');

    setTimeout(() => {
        counterDisplay.textContent = contatore;
        counterDisplay.classList.remove('animazione');
    },  70)
}