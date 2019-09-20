let OptiLineFirst = 12000
let OptiLineSecond = 12000*1.2
let OptiLineThird = (OptiLineFirst+OptiLineSecond)/2
let OptiLineForth = (OptiLineFirst+OptiLineSecond)/2

function volokno(vol) {
    return vol/2
}

let VoloknoFirst = 128
let VoloknoSecond = volokno(VoloknoFirst)
let VoloknoThird = volokno(VoloknoSecond)
let VoloknoForth = volokno(VoloknoThird)
let VesVol = 200

function ves(opti,vols,VesVolokon) {
    return (opti/100*vols*VesVolokon/1000)
}

let VesLineFirst = ves(OptiLineFirst,VoloknoFirst,VesVol)
let VesLineSecond = ves(OptiLineSecond,VoloknoSecond,VesVol)
let VesLineThird = ves(OptiLineThird,VoloknoThird,VesVol)
let VesLineForth = ves(OptiLineForth,VoloknoForth,VesVol)

switch (true) {
        case(VesLineFirst>VesLineSecond && VesLineFirst>VesLineThird && VesLineFirst>VesLineForth):
            document.writeln("Самая тяжелая линия 1 имеет общий вес ",VesLineFirst," кг, а сто метров используемого кабеля весят ",VesLineFirst/OptiLineFirst*100," кг")
            break
        case(VesLineSecond>VesLineFirst && VesLineSecond>VesLineThird && VesLineSecond>VesLineForth):
            document.writeln("Самая тяжелая линия 2 имеет общий вес ",VesLineSecond," кг, а сто метров используемого кабеля весят ",VesLineSecond/OptiLineSecond*100," кг")
            break
        case (VesLineThird>VesLineFirst && VesLineThird>VesLineSecond && VesLineThird>VesLineForth):
            document.writeln("Самая тяжелая линия 3 имеет общий вес ",VesLineThird," кг, а сто метров используемого кабеля весят ",VesLineThird/OptiLineThird*100," кг")
            break
        case (VesLineForth>VesLineFirst && VesLineForth>VesLineSecond && VesLineForth>VesLineThird):
            document.writeln("Самая тяжелая линия 4 имеет общий вес ",VesLineForth," кг, а сто метров используемого кабеля весят ",VesLineForth/OptiLineForth*100," кг")
            break    
}
