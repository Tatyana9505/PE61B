/*
GAME RULES:

- Игра для двух игроков, играю по раундам
- В течении хода, игрок бросает кубик, результаты каждого его броска суммируются. Игрок может сохранить свой прогресс в суммарный счёт. После этого ход переходит другому игроку.
- Но, если игроку выпадает "1" не сохраненный в прогрес счёт обнуляется, ход переходит другому игроку.
- Выигрывает игрок, набравший первым 100 очков в "score"

*/
var conunt, score, diceScore;

//Кнопка начала игры
document.querySelector('.btn-new').addEventListener("click", function(){    
    alert("Игра началась");//Сообщение о начале игры
    nachalo();

    } 
);
//Кнопка броска кубика
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    diceScore = Math.floor(Math.random() * 6) + 1; //Выпадает кубик
    diceScore2 = Math.floor(Math.random() * 6) + 1; //Выпадает кубик
    if(diceScore !==1 || diceScore2 !==1){
    document.querySelector('.dice').style.display = 'block'; //Показ стиля
    document.querySelector('.dice2').style.display = 'block'; //Показ стиля
    document.querySelector('.dice').src = 'dice-' + diceScore + '.png'; //Картинка соответствующего кубика
    document.querySelector('.dice2').src = 'dice-' + diceScore2 + '.png';
    conunt[activePlayer] += diceScore+diceScore2; //Складываие очков
    document.getElementById('current-'+activePlayer).textContent = conunt[activePlayer]; //Выпавшее число
    nextPlayer();
        }
    else {
    document.querySelector('.dice').style.display = 'block'; //Показ стиля кубика 1
    document.querySelector('.dice2').style.display = 'block'; //Показ стиля кубика 2
    document.querySelector('.dice').src = 'dice-' + diceScore + '.png'; //Картинка соответствующего кубика
    document.querySelector('.dice2').src = 'dice-' + diceScore2 + '.png';
    conunt[activePlayer] = 0; //Обнуление очков
    document.getElementById('current-'+activePlayer).textContent = conunt[activePlayer]; //Выпавшее число
    nextPlayer();
        }
    }
);
//Кнопка сохранения очков
document.querySelector('.btn-hold').addEventListener('click', function(){
    score[activePlayer] += conunt[activePlayer]; //Запись в массив очков
    conunt[activePlayer] = 0; //Обнуление выпавших очков
    document.getElementById('score-'+activePlayer).textContent = score[activePlayer]; //Сохранение очков
    document.getElementById('current-'+activePlayer).textContent = conunt[activePlayer];
    if(score[activePlayer]>=100){
        alert('POBEDA'); //Вывод оповещения о конце игры
        switch(activePlayer){
            case(0):{
                document.querySelector('.player-0-panel').classList.remove('active');//Удаление активного стия
                document.querySelector('.player-0-panel').classList.add('winner');//Добавление стиля победителя
                document.getElementById('name-0').textContent = 'winner';
                document.querySelector('.player-1-panel').classList.add('loser');//Добавление стиля програвшего
                document.getElementById('name-1').textContent = 'Loser'; // Подпись проигравшего
                document.querySelector('.btn-hold').style.display = 'none'; //Сокрытие кнопок
                document.querySelector('.btn-roll').style.display = 'none'; 
            break;
            }
            case(1):{
                document.querySelector('.player-1-panel').classList.remove('active');//Удаление активного стия
                document.querySelector('.player-1-panel').classList.add('winner');//Добавление стиля победителя
                document.getElementById('name-1').textContent = 'winner';
                document.querySelector('.player-0-panel').classList.add('loser');//Добавление стиля програвшего
                document.getElementById('name-0').textContent = 'Loser';
                document.querySelector('.btn-hold').style.display = 'none';//Сокрытие кнопок
                document.querySelector('.btn-roll').style.display = 'none';
            break;    
            }

        }
    }
    else {nextPlayer();}
    
    }
    
);

//Функция перехода к следующему игроку
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

//Функция начала игры
function nachalo(){
    //Обнуление массивов, хранящих очки
    score = [0,0]; //Всего очков
    conunt =[0,0]; //Очков на хадержке
    activePlayer = 0; //Делаем первого игрока активным
    //Добавление класса активного игрока активному игроку
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    //Обнуление очков игрока
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    //Обнуленые выпавших очков
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //Убираем кубик с экрана
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    //Присвоение названий игрокам
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    //Убираем класс победителя 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('loser');
    document.querySelector('.player-1-panel').classList.remove('loser');
    //Открытие кнопок
    document.querySelector('.btn-hold').style.display = 'block'; 
    document.querySelector('.btn-roll').style.display = 'block';

}
