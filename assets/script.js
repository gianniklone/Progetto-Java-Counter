// Selezioniamo l'elemento principale dove inseriremo il  contatore
const  app = document.getElementById('app');

// Inizializziamo il valore del contatore
let contatore = 0;

// Creazione del titolo e aggiungiamolo al dom
const titolo = document.createElement('h1');
titolo.textContent = 'Contatore';
app.appendChild(titolo); 

// Creiamo gli elementi del contatore
const counterDisplay = document.createElement('div');
counterDisplay.id = 'counter';
counterDisplay.textContent  = contatore;

// Creazione del bottone "aumenta"
const aumentaButton = document.createElement('button');
aumentaButton.textContent = '-';
aumentaButton.onclick = decrementaCounter;

// Creazione del bottone "azzera"
const azzeraButton = document.createElement('button');
azzeraButton.textContent = 'Azzera';
azzeraButton.onclick = azzeraCounter;

// Creazione del bottone "decrementa"
const decrementaButton = document.createElement('button');
decrementaButton.textContent= '+';
decrementaButton.onclick = aumentaCounter;

// Aggiunta elementi al DOM
app.appendChild(counterDisplay);
app.appendChild(aumentaButton);
app.appendChild(azzeraButton);
app.appendChild(decrementaButton);


// Creazione funzione per aumentare il contatore
function aumentaCounter() {
    contatore++;
    updateCounter();
}

// Creazione funzione per azzerare il contatore
function azzeraCounter() {
    contatore = 0;
    updateCounter();
}

// Creazione funzione per diminuire il contatore
function decrementaCounter() {
    contatore--;
    updateCounter();
}

// Funzione per  aggiornare la pagina 
function updateCounter() {
    counterDisplay.classList.add('animazione');

    setTimeout(() => {
        counterDisplay.textContent = contatore;
        counterDisplay.classList.remove('animazione');
    },  70)
}