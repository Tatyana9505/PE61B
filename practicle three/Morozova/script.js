let Ekb = {
    name: "Екатеринбург",
    god1: [1428042, 2015], //mini massiv s chislom ludey i godom, kotoromu sootvetstvuet kolichestvo ludey
    god2: [1444439, 2016],
    god3: [1455904, 2017],
    god4: [1468833, 2018],
    god5: [1483119, 2019],  
}

let Ser = {
    name: "Серов",
    god1: [98041, 2015 ],
    god2: [97940, 2016 ],
    god3: [97762, 2017 ],
    god4: [97366, 2018 ],
    god5: [96613, 2019 ],  
}

let Kras = {
    name: "Краснотурьинск",
    god1: [58581, 2015 ],
    god2: [58023, 2016 ], 
    god3: [57514, 2017 ],
    god4: [57008, 2018 ],
    god5: [56584, 2019 ],   
}

let Revd = {
    name: "Ревда",
    god1: [62209, 2015],
    god2: [62395, 2016], 
    god3: [62632, 2017],
    god4: [62687, 2018],
    god5: [62326, 2019],   
}

//Изменение населения
function sredprir() { //Zapis v srednego izmeneniya naselenia
	this.izmnas = Math.round(((this.god5[0]-this.god4[0])+(this.god4[0]-this.god3[0])+(this.god3[0]-this.god2[0])+(this.god2[0]-this.god1[0]))/4);
	document.write("Izmenenie naselenia v " + this.name + " Coctavliyaet " + this.izmnas + " v god");
}
//god dlya rascheta
let year2022=2022;
let year2025=2025;
//Naselenie v 2022
function nas2022(){
	this.god2022[0] = this.izmnas*(year2022-this.god5[1])+this.god5[0];
	this.god2022[1] = 2022;
	document.write("Naselenie v gorode" + this.name + " budet sostavliat " + this.god2022[0]+" В году "+this.god2022[1]+"<p>");
}
//naselenie v 2025
function nas2025(gorod){
    let a; //localnaya peremennay dlya chronenia naseleniya
    a = gorod.izmnas*(year2025-gorod.god2022[1])+gorod.god2022[0];
    document.write("Naselenie v " + gorod.name + " v 2025 godu budet sostavlyat " + a + "people");
}

Ekb.izmnas = sredprir;
Ekb.izmnas();
document.write("<p>");
Ekb.god2022 = nas2022;
Ekb.god2022();
nas2025(Ekb);

document.write("<p>");
Ser.izmnas = sredprir;
Ser.izmnas();
document.write("<p>");
Ser.god2022 = nas2022;
Ser.god2022();
nas2025(Ser);   

document.write("<p>");
Kras.izmnas = sredprir;
Kras.izmnas();
document.write("<p>");
Kras.god2022 = nas2022;
Kras.god2022();
nas2025(Kras);  

document.write("<p>");
Revd.izmnas = sredprir;
Revd.izmnas();
document.write("<p>");
Revd.god2022 = nas2022;
Revd.god2022();
nas2025(Revd);  
