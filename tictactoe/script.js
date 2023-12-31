const cells = document.querySelectorAll('.col');
const winner = document.querySelector('#winner');
const winnerCard = document.querySelector('.winner-announce');
const resetGameBtn = document.querySelector('button');

let turn ;
let countTurn ;
let matrix;

document.addEventListener('DOMContentLoaded', refresh)

resetGameBtn.addEventListener('click', ()=>{
    refresh();
    addListeners();
})

function addListeners(){
    cells.forEach(cell =>{
        cell.addEventListener('click', handleClick)
    })
}

function refresh(){
    turn = 'o'
    countTurn = 0;
    matrix = [
        ['','',''],
        ['','',''],
        ['','','']];
    cells.forEach(cell=>{
        if(cell.firstChild)
           cell.removeChild(cell.firstChild);
    })
    addListeners();
    winner.innerHTML = '';
    winnerCard.style.display = 'none';
}

function removeListeners(){
    cells.forEach(cell =>{
        cell.removeEventListener('click', handleClick)
    })
}

function handleClick(event){
    countTurn++;
    const element = event.target;
    element.removeEventListener('click', handleClick);
    const x = element.getAttribute('id')[0];
    const y = element.getAttribute('id')[1];
    matrix[x][y] = turn;
    element.innerHTML = `<span>${turn}</span>`;
    switch (turn) {
        case 'o':
            turn = 'x';
            break;
        case 'x':
            turn = 'o';
            break;
        default:
            break;
    }
    
    const result = checkWinner();
    if(result){
        announceWinner(`Winner is ${result}`);
        removeListeners();
    }else if(countTurn == 9){
        announceWinner(`!! GAME OVER !!`);
        removeListeners();
    }
}

function announceWinner(result){

    const text = document.createTextNode(result);
    winnerCard.style.display = 'block';
    winner.appendChild(text);
}


function checkWinner(){
    // will check for the winner
    const row = 1;
    const col = 1;

    // check row 1
    if(matrix[row-1][col-1] === matrix[row-1][col] && matrix[row-1][col] === matrix[row-1][col+1] && matrix[row-1][col-1]){
        return matrix[row-1][col-1]; // return winner;
    }
    else if(matrix[row][col-1] === matrix[row][col] && matrix[row][col] === matrix[row][col+1] && matrix[row][col-1]){
        return matrix[row][col-1]; // return winner;
    }
    else if(matrix[row+1][col-1] === matrix[row+1][col] && matrix[row+1][col] === matrix[row+1][col+1] && matrix[row+1][col-1]){
        return matrix[row+1][col-1];
    }
    else if(matrix[row-1][col-1] === matrix[row][col-1] && matrix[row][col-1] === matrix[row+1][col-1] && matrix[row-1][col-1]){
        return matrix[row-1][col-1];
    }
    
    else if(matrix[row-1][col] === matrix[row][col] && matrix[row][col] === matrix[row+1][col] && matrix[row-1][col]){
        return matrix [row-1][col];
    }
    else if(matrix[row-1][col+1] === matrix[row][col+1] && matrix[row][col+1] === matrix[row+1][col+1] && matrix[row-1][col+1]){
        return matrix[row-1][col+1];
    }
    

    else if(matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][0]) return matrix[0][0];
    else if(matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[0][2] ) return matrix[1][1];
    else return null;
}
