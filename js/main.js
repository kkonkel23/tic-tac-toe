/*------Constants------*/

/*------Variables (state)------*/

// Variables might include (board/turn/winner)

let isWinner = null;

let currentPlayer = null;

let turn = 'X';

let winner, board;
let winningCombo = [
    ['sq0','sq1','sq2'],
    ['sq3', 'sq4', 'sq5'],
    ['sq6', 'sq7', 'sq8'],
    ['sq0','sq3', 'sq6'],
    ['sq1', 'sq4', 'sq7'],
    ['sq2','sq5', 'sq8'],
    ['sq6','sq4','sq2'],
    ['sq0','sq4','sq8']
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
// const xChoice = document.getElementById('xButton');
// const oChoice = document.getElementById('oButton');
// const boxButtons = document.getElementsByClassName('boxButtons');
const squares = Array.from(document.querySelectorAll('section'));


// You might choose to put your game status here

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click
document.getElementById('board').addEventListener('click', whoseTurn);

init();

function init(){
    messageEl.innerText = `Let's play Tic-Tac-Toe! Choose a square!`
    isWinner = false;
    box0.innerText = '';
    box1.innerText = '';
    box2.innerText = '';
    box3.innerText = '';
    box4.innerText = '';
    box5.innerText = '';
    box6.innerText = '';
    box7.innerText = '';
    box8.innerText = '';
    console.log('reset');
}

function whoseTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    winner = checkWinner();
    render();
}

// On-Click function:
// Set up what happens when one of the elements
// is clicked

resetBtn.addEventListener('click', function(){
    init();
})

function checkWinner() {
    for (let i=0; i < winningCombo.length; i++) {
        if (Math.abs(board[winningCombo[i][0]] + board[winningCombo[i][1]] + board[winningCombo[i][2]]) === 3)
        return board[winningCombo[i][0]];
    }
    if (board.includes(null))
    return null;
    return 'T';
}
    


function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
    });
    message.textContent = winner === 'T' ? `That's a tie!` : winner ? `${winner} wins the game!` : `It's ${turn}'s turn`;
};

//Keeping this here to figure it out later 


// box0.addEventListener('click', function(){
//     if (currentPlayer === 'X') {
//         box0.innerText = 'X';
//         turn = 1;
//         board
//     } else {
//         box0.innerText = 'O';
//         turn = -1;
//     }
//     console.log('worked')
// })
// box1.addEventListener('click', function(){
//     if (currentPlayer === 'X') {
//         box1.innerText = 'X';
//         turn = 1;
//     } else {
//         box1.innerText = 'O';
//         turn = -1;
//     }
//     console.log('worked')
// })
// box2.addEventListener('click', function(){
//     if (currentPlayer === 'X') {
//         box2.innerText = 'X';
//         turn = 1;
//     } else {
//         box2.innerText = 'O';
//         turn = -1;
//     }
//     console.log('worked')
// })
// box3.addEventListener('click', function(){
//     if (currentPlayer === 'X') {
//         box3.innerText = 'X';
//         turn = 1;
//     } else {
//         box3.innerText = 'O';
//         turn = -1;
//     }
//     console.log('worked')
// })
// box4.addEventListener('click', function(){
//     if (currentPlayer === 'X') {
//         box4.innerText = 'X';
//         turn = 1;
//     } else {
//         box4.innerText = 'O';
//         turn = -1;
//     }
//     console.log('worked')
// })
// box5.addEventListener('click', function(){
//     if (currentPlayer === 'X') {
//         box5.innerText = 'X';
//         turn = 1;
//     } else {
//         box5.innerText = 'O';
//         turn = -1;
//     }
//     console.log('worked')
// })
// box6.addEventListener('click', function(){
//     if (currentPlayer === 'X') {
//         box6.innerText = 'X';
//         turn = 1;
//     } else {
//         box6.innerText = 'O';
//         turn = -1;
//     }
//     console.log('worked')
// })
// box7.addEventListener('click', function(){
//     if (currentPlayer === 'X') {
//         box7.innerText = 'X';
//         turn = 1;
//     } else {
//         box7.innerText = 'O';
//         turn = -1;
//     }
//     console.log('worked')
// })
// box8.addEventListener('click', function(){
//     if (currentPlayer === 'X') {
//         box8.innerText = 'X';
//         turn = 1;
//     } else {
//         box8.innerText = 'O';
//         turn = -1;
//     }
//     console.log('worked')
// })

// xChoice.addEventListener('click', function(){
//     currentPlayer = 'X';
//     let turn = 1;
//     messageEl.innerText = 'Choose a square!';
//     console.log('x is the choice')
// })
// oChoice.addEventListener('click', function(){
//     currentPlayer = 'O';
//     let turn = -1;
//     messageEl.innerText = 'Choose a square!'
//     console.log('o is choice')
// })
