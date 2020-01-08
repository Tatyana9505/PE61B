let komAnton = ((89+120+103)/3);
let komIvan = ((116+94+123)/3);
let komMaria = ((97+134+105)/3);

if (komAnton>komIvan){
    if (komAnton>komMaria){
        document.write("<p>Антон набрал больше очков</p>");
    } else {
        document.write("<p>Мария набрала больше очков</p>");
    }
}else if (komIvan>komMaria){
    document.write("<p>Иван набрал набрал больше очков</p>");
} else {
    document.write("<p>Мария набрала больше очков</p>");
}
