// DOM ELEMENTS

const squareOne = document.getElementById("grid_square-1");
const squareTwo = document.getElementById("grid_square-2");
const squareThree = document.getElementById("grid_square-3");
const squareFour = document.getElementById("grid_square-4");
const squareFive = document.getElementById("grid_square-5");
const squareSix = document.getElementById("grid_square-6");
const squareSeven = document.getElementById("grid_square-7");
const squareEight = document.getElementById("grid_square-8");
const squareNine = document.getElementById("grid_square-9");
const allSquares = document.querySelectorAll(".grid__square");

const playerOneScore = document.getElementById("info__player__score1");
const playerTwoScore = document.getElementById("info__player__score2");

const infoText = document.getElementById("instructions__text");
const startGameBtn = document.getElementById("instructions_btn");

const modal = document.getElementById("modal");

// VARIABLES

const players = {
    playerOne: { name:"Jack", wins: 0},
    playerTwo: { name:"Jill", wins: 0},
};

let move = 1;
let nextPLayer = players.playerOne.name;
let pastPlayer; 
let currentImage = "cross";
let playerHasWon = false;

//  SQUARE CLICKING

function addSquareClick() {
    allSquares.forEach((square) => {
        square.addEventListener("click", squareClick);
    });
}

function squareClick () {
    this.classList.add(`${currentImage}`);
}

addSquareClick();