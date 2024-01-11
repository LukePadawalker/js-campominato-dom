console.log("JS OK");


// recupero la griglia
// recupero i dati dall'html
// al click del bottone, genero la griglia

// recupero gli elementi dall'html
const grid = document.getElementById('grid');
const button = document.getElementById('button');
const selector = document.getElementById('selector');
const scoreContainer = document.getElementById('score');


// valori iniziali
let rows;
let cols;
const maxBombs = 16;


let selectorValue = selector.value;

console.log(selectorValue);
switch (selectorValue){
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

let totalCells = rows * cols;

      
        
const numOfRows = document.querySelector(':root');
const setnumOfRows = () => {
    numOfRows.style.setProperty('--cols-per-row', cols);
    return setnumOfRows;
              
}  


const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.classList.add("d-flex", "justify-content-center", "align-items-center");
    return cell;
}

// svolgimento

// creiamo una variabile falsa di default
let gridExist = false;

const arrayBombs = () =>{

    let array = [];
    for(i = 0;array.length < maxBombs; i++){
        const randomNum = Math.floor(Math.random() * 100) + 1;
        console.log(randomNum);

        if (!array.includes(randomNum)){
            array.push(randomNum);
        }

        console.log(array);
    }
    return array;
    console.log(array);

}
arrayBombs();

button.addEventListener('click', function(){


    if (gridExist == false){
        
            
        for(let i = 0; i < totalCells; i++){
    
            // variabili
            const newCell = createCell();    
            let score = 0;
    
            // creiamo il contenitore per il numero
            const cellContainer = document.createElement('h5');
    
    
            // inseriamo il numero dentro il contenitore
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

                // aumentiamo il punteggio di 1
                score = score + 1;
                console.log(score);
                
                // coloriamola di rosso se contiene una bomba
                if (arrayBombs().includes(numInCell)){
                    console.log("hai cliccato una bomba")
                }
                console.log(numInCell);
                
                
            })
            
            
        }
        
        // inseriamo il punteggio dentro il contenitore
        scoreContainer.textContent = score;
        


        // facciamo si che il bottone play generi una sola griglia
        gridExist = true;
    }



});



selector.addEventListener('submit',function(event){
    event.preventDefault;
})













