/*
GAME RULES:

- Игра для двух игроков, играю по раундам
- В течении хода, игрок бросает кубик, результаты каждого его броска суммируются. Игрок может сохранить свой прогресс в суммарный счёт. После этого ход переходит другому игроку.
- Но, если игроку выпадает "1" не сохраненный в прогрес счёт обнуляется, ход переходит другому игроку.
- Выигрывает игрок, набравший первым 100 очков в "score"

*/

let btnNew = document.querySelector(".btn-new");
let btnRoll = document.querySelector(".btn-roll");
let dice = document.querySelector(".dice");
let btnHold = document.querySelector(".btn-hold");

let player0 = {
	name: "Player 1",
	score: 0,
	current: 0,
	playerScoreBox: document.querySelector("#score-0"), 
	currentBox: document.querySelector("#current-0"),
	panel: document.querySelector(".player-0-panel")
};
let player1 = {
	name: "Player 2",
	score: 0,
	current: 0,
	playerScoreBox: document.querySelector("#score-1"), 
	currentBox: document.querySelector("#current-1"),
	panel: document.querySelector(".player-1-panel")
}

let activePlayer;

function newGame(){
	activePlayer = player0;

	btnRoll.style.display = 'block';
	btnHold.style.display = 'block';

	player0.currentBox.textContent = 0;
	player0.playerScoreBox.textContent = 0;
	player0.score = 0;
	player0.current = 0;
    

	player1.currentBox.textContent = 0;
	player1.playerScoreBox.textContent = 0;
	player1.score = 0;
	player1.current = 0;
    
}

function rollDice(){
	let score = Math.floor(Math.random() * 6) + 1;

	switch (true){

		case (score == 1):
		activePlayer.score = 0;
		activePlayer.playerScoreBox.textContent = activePlayer.score;
		dice.setAttribute('src', 'dice-1.png');
		nextPlayer();
		break;

		case (score == 2):
		activePlayer.score +=2 ;
		dice.setAttribute('src', 'dice-2.png');
		break;
		
		case (score == 3):
		activePlayer.score += 3;
		dice.setAttribute('src', 'dice-3.png');
		break;
		
		case (score == 4):
		activePlayer.score += 4;
		dice.setAttribute('src', 'dice-4.png');
		break;
		
		case (score == 5):
		activePlayer.score += 5;
		dice.setAttribute('src', 'dice-5.png');
		break;
		
		case (score == 6):
		activePlayer.score += 6;
		dice.setAttribute('src', 'dice-6.png');
		break;
	}
	
	activePlayer.playerScoreBox.textContent = activePlayer.score;
}

function hold(){
	activePlayer.current += activePlayer.score;
	activePlayer.score = 0;
	activePlayer.currentBox.textContent = activePlayer.current;
	if (activePlayer.current >= 100) gameOver();
	nextPlayer();
}

function nextPlayer() {
	activePlayer.panel.classList.remove('active');
	
	if (activePlayer == player0)
		activePlayer = player1;
	else
		activePlayer = player0;

	activePlayer.panel.classList.add('active');
	activePlayer.playerScoreBox.textContent = 0;

}

function gameOver(){
	alert(activePlayer.name+" win!");
	btnRoll.style.display = 'none';
	btnHold.style.display = 'none';
}

newGame();
btnNew.addEventListener("click",newGame);
btnRoll.addEventListener("click",rollDice);
btnHold.addEventListener("click",hold);