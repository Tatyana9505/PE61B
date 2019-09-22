let pervayOptliniya = 12000
let vtorayaOptliniya = pervayOptliniya*1.2
let tretiyaOptliniya = (pervayOptliniya+vtorayaOptliniya)/2
let chetvOptliniya = tretiyaOptliniya
let Voloc1 = 128

function emcost(emc)
{
    return emc/2
}

let Voloc2 = emcost(Voloc1);
let Voloc3 = emcost(Voloc2);
let Voloc4 = emcost(Voloc3);

function veskabelya(dlina,emcos)
{
    return dlina/100*emcos*200/1000
}
let veskabelya1 = veskabelya(pervayOptliniya,Voloc1)
let veskabelya2 = veskabelya(vtorayaOptliniya,Voloc2)
let veskabelya3 = veskabelya(tretiyaOptliniya,Voloc3)
let veskabelya4 = veskabelya(chetvOptliniya,Voloc4)

switch(true){
    case veskabelya1>veskabelya2 && veskabelya1>veskabelya3 && veskabelya1>veskabelya4:
        document.write("самая тяжёлая линия 1 имеет общий вес "+ veskabelya1+" кг, а сто метров используемого кабеля весят "+ veskabelya1/pervayOptliniya*100 +" кг");
        break;
    case veskabelya2>veskabelya1 && veskabelya2>veskabelya3 && veskabelya2>veskabelya4:
        document.write("самая тяжёлая линия 2 имеет общий вес "+ veskabelya2+" кг, а сто метров используемого кабеля весят "+ veskabelya2/vtorayaOptliniya*100 +" кг");
        break;
    case veskabelya3>veskabelya1 && veskabelya3>veskabelya2 && veskabelya3>veskabelya4:
        document.write("самая тяжёлая линия 3 имеет общий вес "+ veskabelya3+" кг, а сто метров используемого кабеля весят "+ veskabelya3/tretiyaOptliniya*100 +" кг");
        break;
    case veskabelya4>veskabelya1 && veskabelya4>veskabelya2 && veskabelya4>veskabelya1:
        document.write("самая тяжёлая линия 4 имеет общий вес "+ veskabelya4+" кг, а сто метров используемого кабеля весят "+ veskabelya4/chetvOptliniya*100 +" кг");
        break;
}
    