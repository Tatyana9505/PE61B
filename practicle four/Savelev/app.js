/*
GAME RULES:
- Игра для двух игроков, играю по раундам
- В течении хода, игрок бросает кубик, результаты каждого его броска суммируются. Игрок может сохранить свой прогресс в суммарный счёт. После этого ход переходит другому игроку.
- Но, если игроку выпадает "1" не сохраненный в прогрес счёт обнуляется, ход переходит другому игроку.
- Выигрывает игрок, набравший первым 100 очков в "score"

*/
var score1=0,
score2=0,
scoreFinal1=0,
scoreFinal2=0;

$(".btn-new").click(function() {
$("#score-0").html("0");
$("#score-1").html("0");

$("#current-0").html("0");
$("#current-0").html("0");
score1=0;
score2=0;

scoreFinal1=0,
scoreFinal2=0;
});

$(".btn-roll").click(function() {
 $("div.test").empty();

  var arr = ["dice-1","dice-2","dice-3","dice-4","dice-5","dice-6"];
  z = Math.floor(Math.random()*(5-0+1)+0);
  var newimg=document.createElement("img");

  newimg.setAttribute("src",arr[z]+".png");
  newimg.setAttribute("class","dice");
  document.getElementById("2").append(newimg);
  if($('.player-0-panel').hasClass('active')){
  }

if(z==0 ){
 if($('.player-0-panel').hasClass('active')){
  $('.player-0-panel').removeClass('active');
   $('.player-1-panel').addClass('active');
   score1=0;
$("#current-0").html("0");
}
else {
 $('.player-1-panel').removeClass('active');
  $('.player-0-panel').addClass('active');
  score2=0;
$("#current-1").html("0");
}
}

if($('.player-1-panel').hasClass('active')){
score2=score2+z+1;
$("#current-1").html(score2);
}

if($('.player-0-panel').hasClass('active')){
 score1=score1+z+1;
$("#current-0").html(score1);
 
}

});

$(".btn-hold").click(function(){
 if($('.player-0-panel').hasClass('active')){
   scoreFinal1+=score1;
     $("#score-0").html(scoreFinal1);
       score1=0;

       if (scoreFinal1>=100){

         alert("Выйграл игрок 1")
       }
 }

 if($('.player-1-panel').hasClass('active')){
   scoreFinal2+=score2;
     $("#score-1").html(scoreFinal2);
     if (scoreFinal2>=100){

       alert("Выйграл игрок 2")
     }
       score2=0;
}
});
