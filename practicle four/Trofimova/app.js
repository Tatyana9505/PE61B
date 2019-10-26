/*
GAME RULES:

- Игра для двух игроков, играю по раундам
- В течении хода, игрок бросает кубик, результаты каждого его броска суммируются. Игрок может сохранить свой прогресс в суммарный счёт. После этого ход переходит другому игроку.
- Но, если игроку выпадает "1" не сохраненный в прогрес счёт обнуляется, ход переходит другому игроку.
- Выигрывает игрок, набравший первым 100 очков в "score"

*/

var score, avgScore, activePlayer, game;


document.querySelector('.btn-roll').addEventListener('click', function () {
    if(game) {
        var dice = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;
        var diceface2 = document.querySelector('.dice2');
        var diceFace = document.querySelector('.dice');
        diceFace.style.display = 'block';
        diceface2.style.display = 'block';
        diceFace.src = 'dice-'+dice+'.png';
        diceface2.src = 'dice-'+dice2+'.png';
        
        if (dice !== 1 && dice2 !== 1) {
            avgScore +=dice+dice2;
            document.querySelector('#current-'+activePlayer).textContent = avgScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function() {
    if(game) {
        score[activePlayer] +=avgScore;
        document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
        
        if (score[activePlayer] >=100) {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.dicplay = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('Winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            game = false;
        } else {
            nextPlayer();
        }
    }
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    avgScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.dicplay = 'none';
    
};

document.querySelector('.btn-new').addEventListener('click',begin);

function begin() {
    score = [0,0];
    activePlayer = 0;
    avgScore = 0;
    game = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('Winner');
    document.querySelector('.player-1-panel').classList.remove('Winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    alert('Игра началась');
}
