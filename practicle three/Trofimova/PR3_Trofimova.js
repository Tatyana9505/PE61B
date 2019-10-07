let year = 2019
let Ekb = {
    name:"Екатеринбург",
    r2015: 1428042,
    r2016: 1444439,
    r2017: 1455904,
    r2018: 1468833,
    r2019: 1483119,
}
 
let Krasnoturinsk = {
    name:"Краснотурьинск",
    r2015:58581,
    r2016:58023,
    r2017:57514,
    r2018:57008,
    r2019:56584,
}

let Serov = {
    name:"Серов",
    r2015:98041,
    r2016:97940,
    r2017:97762,
    r2018:97366,
    r2019:96613,
}

let Karpinsk = {
    name:"Карпинск",
    r2015:27638,
    r2016:27281,
    r2017:26957,
    r2018:26571,
    r2019:26249,
}

function prognoz(){
    let SrNas = Math.round((this.r2019-this.r2015)/5)
    this.r2022 = Math.round(SrNas*(2022-year)+this.r2019)
    let r2025 = Math.round(SrNas*(2025-year)+this.r2019)
    document.writeln("<br\/>В городе ",this.name," население к 2022 году составит: ",this.r2022," человек, а к 2025 году: ",r2025," человек. Средний прирост(убыль) населения = ",SrNas," человек.")  
}

Ekb.prog = prognoz;
Ekb.prog();
Krasnoturinsk.prog = prognoz;
Krasnoturinsk.prog();
Serov.prog = prognoz;
Serov.prog();
Karpinsk.prog = prognoz;
Karpinsk.prog();

