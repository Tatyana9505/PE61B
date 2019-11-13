let Maria = ((97+134+105)/3);
let Ivan = ((116+94+123)/3);
let Anton = ((89+120+103)/3);;


document.write("<p>К.Марии = "+ Maria +" Очков<p>");
document.write("<p>К.Ивана = "+ Ivan +" Очков<p>");
document.write("<p>К.Антона = "+ Anton +" Очков<p>");

if (Maria>Ivan){
    if (Maria>Anton){
        document.write("<p>Мария набрала больше очков</p>");
    } else {
        document.write("<p>Антон набрал больше очков</p>");
    }
}else if (Ivan>Anton){
    document.write("<p>Иван набрал набрал больше очков</p>");
} else {
    document.write("<p>Антон набрал больше очков</p>");
}
