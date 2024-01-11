console.log("JS OK");


// recupero la griglia
// recupero i dati dall'html
// al click del bottone, genero la griglia

// recupero gli elementi dall'html
const grid = document.getElementById('grid');
const button = document.getElementById('button');
const selector = document.getElementById('selector');


// valori iniziali
let rows;
let cols;

selector.addEventListener('change', function(){
    
    let selectorValue = selector.value;
    console.log(selectorValue);
    switch(selectorValue){
        case "medium":
            rows = 9;
            cols = 9;
            break;
        case "hard":
            rows = 7;
            cols = 7;
            break;
        default:
            rows = 10;
            cols = 10;
            break;
                    
    }
    console.log(rows);
    console.log(cols);
                
                
    const numOfRows = document.querySelector(':root');
    const setnumOfRows = () => {
        numOfRows.style.setProperty('--cols-per-row', cols);
        return setnumOfRows;
                  
    }
                
})


// funzioni
            
// crea una cella

const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.classList.add("d-flex", "justify-content-center", "align-items-center");
    return cell;
}


let totalCells = rows * cols;

// svolgimento

// creiamo una variabile falsa di default
let gridExist = false;

button.addEventListener('click', function(){

    console.log(totalCells);

    for(let i = 0; i < totalCells; i++){

        // variabili
        const newCell = createCell();        

        // creiamo il contenitore per il numero
        cellContainer = document.createElement('h5');


        //inseriamo il numero dentro il contenitore
        numInCell = i + 1;
        cellContainer.textContent = numInCell;


        // inseriamo il contenitore dentro la cella
        newCell.appendChild(cellContainer);
        

        // inseriamo la cella dentro la griglia
        grid.appendChild(newCell);

        // coloriamo la cella di blu
        newCell.addEventListener('click', () => {

            newCell.classList.add("clicked");
            console.log(newCell.innerText);

            // coloriamola di rosso se contiene una bomba


        })


        // facciamo si che il bottone play generi una sola griglia
        gridExist = true;
    }



});










