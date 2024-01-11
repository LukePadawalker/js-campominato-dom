console.log("JS OK");


// recupero la griglia
// recupero i dati dall'html
// al click del bottone, genero la griglia

// recupero gli elementi dall'html
const grid = document.getElementById('grid');
const button = document.getElementById('button');
const selector = document.getElementById('selector');


// valori iniziali
// const rows = 10;
// const cols = 10;
// const totalCells = rows * cols;
let selectorValue = selector.value;
console.log(selectorValue);



// funzioni
const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.classList.add("d-flex", "justify-content-center", "align-items-center");
    
    return cell;
}


function selectorListener(){
    
    let rows;
    let cols;
    let totalCells;
    
    selector.addEventListener('submit', function(event){

        event.preventDefault;

        if (selectorValue == 1){
            console.log("hai scelto la modalita Facile");
            rows = 7;
            cols = 7;
        }else if(selectorValue == 2){
            console.log("hai scelto la modalita media");
            rows = 9;
            cols = 9;
        }else if(selectorValue == 3){
            console.log("hai scelto la modalita difficile");
            rows = 10;
            cols = 10;
        }else{
            console.log("hai scelto la modalita Estrema");
            rows = 30;
            cols = 30;
        }

        totalCells = rows * cols;

        console.log(rows);
        console.log(cols);
        console.log(totalCells);
    
    })


    return rows;
    return cols;
    return totalCells;


}

// svolgimento
// selectorListener();
// definiamo i vari casi in base alla difficolta del gioco
console.log(selectorValue);

// creiamo una variabile falsa di default
let gridExist = false;


button.addEventListener('click', function(){



    if (gridExist == false){
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


            newCell.addEventListener('click', () => {
                newCell.classList.toggle("clicked");
                console.log(newCell.innerText);
            })





        }


        // facciamo si che il bottone play generi una sola griglia
        gridExist = true;
    }



});










