let firstline = 12000
let secondline = firstline*1.2
let thertline = (firstline+secondline)/2
let fourline = thertline
let V1 = 128
function emcost(emc)
{
    return emc/2
}

let V2 = emcost(V1);
let V3 = emcost(V2);
let V4 = emcost(V3);

function kabelVes(dlinna,emcosti)
{
    return dlinna/100*emcosti*200/1000
}
let kabel1ves = kabelVes(firstline,V1)
let kabel2ves = kabelVes(secondline,V2)
let kabel3ves = kabelVes(thertline,V3)
let kabel4ves = kabelVes(fourline,V4)

switch(true){
    case kabel1ves>kabel2ves && kabel1ves>kabel3ves && kabel1ves>kabel4ves:
        document.write("самая тяжёлая линия 1 имеет общий вес "+ kabel1ves+" кг, а сто метров используемого кабеля весят "+ kabel1ves/firstline*100 +" кг");
        break;
    case kabel2ves>kabel1ves && kabel2ves>kabel3ves && kabel2ves>kabel4ves:
        document.write("самая тяжёлая линия 2 имеет общий вес "+ kabel2ves+" кг, а сто метров используемого кабеля весят "+ kabel2ves/secondline*100 +" кг");
        break;
    case kabel3ves>kabel1ves && kabel3ves>kabel2ves && kabel3ves>kabel4ves:
        document.write("самая тяжёлая линия 3 имеет общий вес "+ kabel3ves+" кг, а сто метров используемого кабеля весят "+ kabel3ves/thertline*100 +" кг");
        break;
    case kabel4ves>kabel1ves && kabel4ves>kabel2ves && kabel4ves>kabel1ves:
        document.write("самая тяжёлая линия 4 имеет общий вес "+ kabel4ves+" кг, а сто метров используемого кабеля весят "+ kabel4ves/fourline*100 +" кг");
        break;
}