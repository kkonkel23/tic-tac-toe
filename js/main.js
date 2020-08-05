/*------Variables (state)------*/
let player = {'-1': 'X', '1':'O', }
let winner, board;
let winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [6,4,2],
    [0,4,8]
];
/*------Cached Element References------*/

const resetBtn = document.getElementById('resetButton');
const messageEl = document.getElementById('message');
const box0 = document.getElementById('sq0');
const box1 = document.getElementById('sq1');
const box2 = document.getElementById('sq2');
const box3 = document.getElementById('sq3');
const box4 = document.getElementById('sq4');
const box5 = document.getElementById('sq5');
const box6 = document.getElementById('sq6');
const box7 = document.getElementById('sq7');
const box8 = document.getElementById('sq8');
const squares = Array.from(document.querySelectorAll('div'));

/*------Event Listeners------*/

document.getElementById('board').addEventListener('click', whoseTurn);

/* Functions */

init();

function init(){
    messageEl.innerText = `Let's play Tic-Tac-Toe! Choose a square!`
    turn = -1;
    winner = false;
    board = Array(9).fill('');
    render();
}

function whoseTurn(event) {
    let idx = squares.indexOf(event.target);
    board[idx] = player[turn];
    winner = checkWinner();
    turn *= -1;
    render();
}

resetBtn.addEventListener('click', function(){
    init();
})

function checkWinner() {
    if((board[0] + board[1] + board[2] === 'XXX') || (board[0] + board[1] + board[2] === 'OOO')){
        winner = player[turn];
        return winner;
    }
    if((board[0] + board[3] + board[6] === 'XXX') || (board[0] + board[3] + board[6] === 'OOO')){
        winner = player[turn];
        return winner;
    }
    if((board[0] + board[4] + board[8] === 'XXX') || (board[0] + board[4] + board[8] === 'OOO')){
        winner = player[turn];
        return winner;
    }
    if((board[1] + board[4] + board[7] === 'XXX') || (board[1] + board[4] + board[7] === 'OOO')){
        winner = player[turn];
        return winner;
    }
    if((board[2] + board[4] + board[6] === 'XXX') || (board[2] + board[4] + board[6] === 'OOO')){
        winner = player[turn];
        return winner;
    }
    if((board[2] + board[5] + board[8] === 'XXX') || (board[2] + board[5] + board[8] === 'OOO')){
        winner = player[turn];
        return winner;
    }
    if((board[3] + board[4] + board[5] === 'XXX') || (board[3] + board[4] + board[5] === 'OOO')){
        winner = player[turn];
        return winner;
    }
    if((board[6] + board[7] + board[8] === 'XXX') || (board[6] + board[7] + board[8] === 'OOO')){
        winner = player[turn];
        return winner;
    }
    if ((board[0] + board[1] + board[2] + board[3] + board[4] + board[5] + board[6] + board[7] + board[8]).length === 9)
    return 'T';
    return false;
}
    
function render() {
    squares.forEach(function(mark, idx) {
        squares[idx].textContent = board[idx];
        return player;
    });
    messageEl.innerText = winner === 'T' ? `That's a tie!` : winner ? `${winner} wins the game!` : `It's ${player[turn]}'s turn`;
};

