let city1={
  name:"Ekb",
  result2015:2000000,
  result2016:2100000,
  result2017:2234300,
  result2018:2134332,
  result2019:2003131,
},
city2={  name:"Serov",
  result2015:200000,
  result2016:210000,
  result2017:223430,
  result2018:213430,
  result2019:200310,
},
city3={  name:"Severouralsk",
  result2015:20000,
  result2016:25042,
  result2017:23514,
  result2018:214545,
  result2019:222222,
},
city4={  name:"NTagil",
  result2015:152345,
  result2016:166412,
  result2017:154333,
  result2018:132343,
  result2019:114543,
};

function Prognoz()
{
 this.result2022=Math.round( (this.result2015/2+this.result2016+this.result2017
   +this.result2018+this.result2019/2)/4);


  let  result2025=Math.round( (this.result2015/2+this.result2016+this.result2017
     +this.result2018+this.result2019+this.result2022/2)/5);

  console.log("Население города "+this.name+" к 2022 году составит: "+this.result2022+" чел."+ "а к 2025: "
  +result2025+" чел.");
}

city1.prgnz=Prognoz;
city1.prgnz();
city2.prgnz=Prognoz;
city2.prgnz();
city3.prgnz=Prognoz;
city3.prgnz();
city4.prgnz=Prognoz;
city4.prgnz();
