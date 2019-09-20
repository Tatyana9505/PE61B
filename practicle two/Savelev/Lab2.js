let Line1=12000,
Line2=Line1*0.2,
Line3=(Line1+Line2)/2,
Line4=(Line1+Line2)/2,
Yomkost1=128,
Yomkost2=64,
Yomkost3=32,
Yomkost4=16;

function Cabel(x, y) {
shag=x/100;
gramm=y+200;
weight=(gramm*shag)/1000;
console.log(weight, "кг весит кабель а сто метров весят", gramm ,"грамм");
}

cabelOne=Cabel(Line1,Yomkost1);
x=weight;
x1=gramm;
cabelTwo=Cabel(Line2,Yomkost2);
z=weight;
z1=gramm;
cabelThree=Cabel(Line3,Yomkost3);
f=weight;
f1=gramm;
cabelFour=Cabel(Line4,Yomkost4);
g=weight;
g1=gramm;

result=Math.max(x,z,f,g);
result1=Math.max(x1,z1,f1,g1);
console.log(result, "кг весит самый тяжелый кабель а сто метров весят", result1 ,"грамм");
