let Ekb = {
    name: "Екатеринбург",
    g2015: 1428042,
    g2016: 1444439,
    g2017: 1455904,
    g2018: 1468833,
    g2019: 1483119,
}

let Ntagil = {
    name: "Нижний Тагил",
    g2015: 356744,
    g2016: 356288,
    g2017: 355693,
    g2018: 353950,
    g2019: 352135,
}

let Serov = {
    name: "Серов",
    g2015: 98041,
    g2016: 97940,
    g2017: 97762,
    g2018: 97366,
    g2019: 96613,
}

let Pervouralsk = {
    name: "Первоуральск",
    g2015: 125495,
    g2016: 124981,
    g2017: 124447,
    g2018: 123655,
    g2019: 122183,
}

let year = 2019;

function izmeneniya()
{
    let progn = Math.round(((this.g2019-this.g2018)+(this.g2018-     this.g2017)+(this.g2017-this.g2016)+(this.g2016-this.g2015))/4);
    this.g2022 = ((2022-year)*progn+this.g2019);
    let g2025 = ((2025-year)*progn+this.g2019);
    document.write("Среднее изменения населения в городе ",this.name," = ",progn,", к 2022 году население будет = ",this.g2022,", а к 2025 = ",g2025,"<br\/>");
}

Ekb.g2022=izmeneniya;
Ekb.g2022();
Ntagil.g2022=izmeneniya;
Ntagil.g2022();
Serov.g2022=izmeneniya;
Serov.g2022();
Pervouralsk.g2022=izmeneniya;
Pervouralsk.g2022();
