let OpLine1 = 12000;
let OpLine2 = OpLine1*1.2;
let OpLine3 = (OpLine1+OpLine2)/2;
let OpLine4 = OpLine3;
let Vol1 = 128;
let Vol2 = Vol1/2;
let Vol3 = Vol2/2;
let Vol4 = Vol3/2;
let VesVol = 0.2;
let VesSta1, VesSta2, VesSta3, VesSta4;
let Ves1, Ves2, Ves3, Ves4;

VesSta1 = Vol1*VesVol;
VesSta2 = Vol2*VesVol;
VesSta3 = Vol3*VesVol;
VesSta4 = Vol4*VesVol;

Ves1 = (OpLine1/100)*VesSta1;
Ves2 = (OpLine2/100)*VesSta2;
Ves3 = (OpLine3/100)*VesSta3;
Ves4 = (OpLine4/100)*VesSta4;


let maxVes = Math.max(Ves1,Ves2);
maxVes = Math.max(maxVes,Ves3);
maxVes = Math.max(maxVes,Ves4);

document.writeln("Первая линия: Длина = "+OpLine1+"  Волокная ёмкость = "+Vol1+"  Общий вес = "+Ves1.toFixed(2)+"  Вес ста метров = "+VesSta1+"<br>");
document.writeln("Вторая линия: Длина = "+OpLine2+"  Волокная ёмкость = "+Vol2+"  Общий вес = "+Ves2.toFixed(2)+"  Вес ста метров = "+VesSta2+"<br>");
document.writeln("Третья линия: Длина = "+OpLine3+"  Волокная ёмкость = "+Vol3+"  Общий вес = "+Ves3.toFixed(2)+"  Вес ста метров = "+VesSta3+"<br>");
document.writeln("Четвёртая линия: Длина = "+OpLine4+"  Волокная ёмкость = "+Vol4+"  Общий вес = "+Ves4.toFixed(2)+"  Вес ста метров = "+VesSta4+"<br>"+"<br>");

switch (maxVes){
    case Ves1:
        document.write("Самая тяжёлая линия первая имеет общий вес "+Ves1.toFixed(2)+", а сто метров используемого кабеля весит "+VesSta1);
        break;
    case Ves2:
        document.write("Самая тяжёлая линия вторая имеет общий вес "+Ves2.toFixed(2)+", а сто метров используемого кабеля весит "+VesSta2);
        break;
    case Ves3:
        document.write("Самая тяжёлая линия третья имеет общий вес "+Ves3.toFixed(2)+", а сто метров используемого кабеля весит "+VesSta3);
        break;
    case Ves4:
        document.write("Самая тяжёлая линия четвёртая имеет общий вес "+Ves4.toFixed(2)+", а сто метров используемого кабеля весит "+VesSta4);
        break;
    break;
 }
