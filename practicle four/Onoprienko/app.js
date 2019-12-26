/*
GAME RULES:

- Игра для двух игроков, играю по раундам
- В течении хода, игрок бросает кубик, результаты каждого его броска суммируются. Игрок может сохранить свой прогресс в суммарный счёт. После этого ход переходит другому игроку.
- Но, если игроку выпадает "1" не сохраненный в прогрес счёт обнуляется, ход переходит другому игроку.
- Выигрывает игрок, набравший первым 100 очков в "score"

*/
var conunt, score, diceScore;
start();

//Кнопка начала игры
document.querySelector('.btn-new').addEventListener("click", function(){    
    start();

    } 
);

//Начало игры
function start(){
    score = [0,0];
    conunt =[0,0];
    activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('loser');
    document.querySelector('.player-1-panel').classList.remove('loser');
    document.querySelector('.btn-hold').style.display = 'block'; 
    document.querySelector('.btn-roll').style.display = 'block';
}


//Рандомное число
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Бросок кубика
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    diceScore = getRandomInt(1, 6);
    diceScore2 = getRandomInt(1, 6);
    if(diceScore !==1 && diceScore2 !==1){
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice2').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + diceScore + '.png';
    document.querySelector('.dice2').src = 'dice-' + diceScore2 + '.png';
    conunt[activePlayer] += diceScore+diceScore2;
    document.getElementById('current-'+activePlayer).textContent = conunt[activePlayer];
    }
	
    if(diceScore ==1 || diceScore2 ==1){
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice2').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + diceScore + '.png';
    document.querySelector('.dice2').src = 'dice-' + diceScore2 + '.png';
    conunt[activePlayer] = 0;
    document.getElementById('current-'+activePlayer).textContent = conunt[activePlayer];
	nextPlayer();
        }
    }
);

//переход к следующему игроку
function nextPlayer(){
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    if (activePlayer === 0) {
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

//охранения очков
document.querySelector('.btn-hold').addEventListener('click', function(){
    score[activePlayer] += conunt[activePlayer];
    conunt[activePlayer] = 0;
    document.getElementById('score-'+activePlayer).textContent = score[activePlayer];
    document.getElementById('current-'+activePlayer).textContent = conunt[activePlayer];
    if(score[activePlayer]>=100){
		if (activePlayer == 0){
        alert('Победил игрок №1');
		}
		else{
		alert('Победил игрок №2');	
		}
        switch(activePlayer){
            case(0):{
                document.querySelector('.player-0-panel').classList.remove('active');
                document.querySelector('.player-0-panel').classList.add('winner');
                document.getElementById('name-0').textContent = 'winner';
                document.querySelector('.player-1-panel').classList.add('loser');
                document.getElementById('name-1').textContent = 'Loser';
                document.querySelector('.btn-hold').style.display = 'none';
                document.querySelector('.btn-roll').style.display = 'none'; 
            break;
            }
            case(1):{
                document.querySelector('.player-1-panel').classList.remove('active');
                document.querySelector('.player-1-panel').classList.add('winner');
                document.getElementById('name-1').textContent = 'winner';
                document.querySelector('.player-0-panel').classList.add('loser');
                document.getElementById('name-0').textContent = 'Loser';
                document.querySelector('.btn-hold').style.display = 'none';
                document.querySelector('.btn-roll').style.display = 'none';
            break;    
            }

        }
    }
    else {nextPlayer();}
    
    }
    
);