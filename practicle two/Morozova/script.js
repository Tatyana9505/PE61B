let LSodin = 12000;
let LSdva = LSodin*1.2;
let LStri = (LSodin+LSdva)/2;
let LSchet = LStri;
let VolOdin = 128;
let VolDva, VolTri, VolChet;
let VesVol = 0.2;
let OdinVesSta, DvaVesSta, TriVesSta, ChetVesSta;
let VesOdin, VesDva, VesTri, VesChet;
//Функиция для определения ёмкости линии
function emkost (pervaLS){
   let sleduschayaLS = pervaLS/2;
    return sleduschayaLS;
}
//Нажождение веса 
function ves(VesSta, dlinaLS){
    let VesLS = (dlinaLS/100)*VesSta; //Вес всей линии
    return VesLS;
}

VolDva = emkost(VolOdin);
VolTri = emkost(VolDva);
VolChet = emkost(VolTri);

OdinVesSta = VolOdin*VesVol; //Вес ста метров линии
DvaVesSta = VolDva*VesVol;
TriVesSta = VolTri*VesVol;
ChetVesSta = VolChet*VesVol;

VesOdin  = ves(OdinVesSta, LSodin);
VesDva =  ves(DvaVesSta, LSdva);
VesTri  =  ves(TriVesSta, LStri);
VesChet  = ves(ChetVesSta, LSchet);
//Находим максимальный вес
let maxVes = Math.max(Math.max(Math.max(VesOdin,VesDva), VesTri), VesChet);
let vivod; //Строка для вывода результата

switch (maxVes){
    case VesOdin:
        vivod = ("Самая тяжёлая линия первая имеет общий вес "+VesOdin+", а сто метров используемого кабеля весит "+OdinVesSta);
        document.write(vivod);
        break;
    case VesDva:
        vivod = ("Самая тяжёлая линия вторая имеет общий вес "+VesDva+", а сто метров используемого кабеля весит "+DvaVesSta);
        document.write(vivod);
        break;
    case VesTri:
        vivod = ("Самая тяжёлая линия третья имеет общий вес "+VesTri+", а сто метров используемого кабеля весит "+TriVesSta);
        document.write(vivod);
        break;
    case VesChet:
        vivod = ("Самая тяжёлая линия четвёртая имеет общий вес "+VesChet+", а сто метров используемого кабеля весит "+ChetVesSta);
        document.write(vivod);
        break;
    default: 
        vivod=(")))"+maxVes)
        document.write(vivod); 
    break;
 }
    

