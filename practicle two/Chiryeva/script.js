let Line1 = 12000;
let Line2 = (Line1 * 1.2);
let Line3 = (0.5 * (Line1 + Line2));
let Line4 = Line3;

let Value1 = 128;
let Value2 = (0.5 * Value1);
let Value3 = (0.5 * Value2);
let Value4 = (0.5 * Value3);

let MaxStep, MaxWeight, NumLine;

//функция нахождения веса ста метров кабеля
function valueOfStep(Value)
{
	let Step = (0.2 * Value);
	return Step;
}

//функция нахождения веса всей линии
function lineWeight(Line,Value)
{
	let Weight = (Line / 100) * valueOfStep(Value);
	return Weight;
}

let Weight1 = lineWeight(Line1,Value1);
let Weight2 = lineWeight(Line2,Value2);
let Weight3 = lineWeight(Line3,Value3);
let Weight4 = lineWeight(Line4,Value4);

MaxWeight = Math.max(Weight1, Weight2, Weight3, Weight4);

switch (MaxWeight)
{
	case Weight1: 
	MaxStep = valueOfStep(Value1)
	NumLine = 1;
    break;
	
    case Weight2: 
	MaxStep = valueOfStep(Value2)
	NumLine = 2;
    break;
    
    case Weight3: 
	MaxStep = valueOfStep(Value3)
	NumLine = 3;
    break;
	
    case Weight4: 
	MaxStep = valueOfStep(Value4)
	NumLine = 4;
    break;
	
    default:
    break;	
}

console.log("самая тяжёлая линия "+NumLine+" имеет общий вес "+MaxWeight+", а сто метров используемого кабеля весят "+MaxStep);