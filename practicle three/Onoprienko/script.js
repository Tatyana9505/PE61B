let Ekb = {
    name: "Екатеринбург",
    god1: [1428042, 2015], //mini massiv s chislom ludey i godom, kotoromu sootvetstvuet kolichestvo ludey
    god2: [1444439, 2016],
    god3: [1455904, 2017],
    god4: [1468833, 2018],
    god5: [1483119, 2019],  
}

let Mosk = {
    name: "Москва",
    god1: [12197596, 2015 ],
    god2: [12330126, 2016 ],
    god3: [12380664, 2017 ],
    god4: [12506468, 2018 ],
    god5: [12615279, 2019 ],  
}

let StPt = {
    name: "Санкт-Петербург",
    god1: [5191690, 2015 ],
    god2: [5225690, 2016 ], 
    god3: [5281579, 2017 ],
    god4: [5351935, 2018 ],
    god5: [5383890, 2019 ],   
}

let Omsk = {
    name: "Омск",
    god1: [1173854, 2015],
    god2: [1178079, 2016], 
    god3: [1178391, 2017],
    god4: [1172070, 2018],
    god5: [1164815, 2019],   
}

//Изменение населения
function SredInzm() {
	this.Izm = Math.round(((this.god5[0]-this.god4[0])+(this.god4[0]-this.god3[0])+(this.god3[0]-this.god2[0])+(this.god2[0]-this.god1[0]))/4);
	document.write("Изменение насления в " + this.name + "е Составит " + this.Izm + " человека в год");
}

let year2021=2021;
let year2026=2026;

function Nas2021(){
	this.God2021[0] = this.Izm*(year2021-this.god5[1])+this.god5[0];
	this.God2021[1] = 2022;
	document.write("В "+this.God2021[1]+" году населние города "+ this.name +" будет состовлять "+ this.God2021[0]+" человек."+"<p>");
}

function Nas2026(gorod){
    let a;
    a = gorod.Izm*(year2026-gorod.God2021[1])+gorod.God2021[0];
	document.write("В 2026 году населения города "+ gorod.name +" будет составлять "+ a +" человек"+"<p>");
	document.write("----------------------------------------------------"+"<p>");
}

Ekb.Izm = SredInzm;
Ekb.Izm();
document.write("<p>");
Ekb.God2021 = Nas2021;
Ekb.God2021();
Nas2026(Ekb);

document.write("<p>");
Mosk.Izm = SredInzm;
Mosk.Izm();
document.write("<p>");
Mosk.God2021 = Nas2021;
Mosk.God2021();
Nas2026(Mosk);   

document.write("<p>");
StPt.Izm = SredInzm;
StPt.Izm();
document.write("<p>");
StPt.God2021 = Nas2021;
StPt.God2021();
Nas2026(StPt);  

document.write("<p>");
Omsk.Izm = SredInzm;
Omsk.Izm();
document.write("<p>");
Omsk.God2021 = Nas2021;
Omsk.God2021();
Nas2026(Omsk);  
