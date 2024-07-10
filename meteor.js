
const chuvaDeMeteoros = [
{nome:"Alfa Centaurídeos"     , declinacao:-59},
{nome:"Gama Normídeos"        , declinacao:-50},
{nome:"Pi Pupídeos"           , declinacao:-45},
{nome:"Líridas"               , declinacao:34 },
{nome:"Eta Aquáridas"         , declinacao:-1 },
{nome:"Eta Líridas"           , declinacao:44 },
{nome:"Bootídeos de Junho"    , declinacao:48 },
{nome:"Alfa Capricornídeos"   , declinacao:-10},
{nome:"Delta Aquáridas do Sul", declinacao:-16},
{nome:"Piscis Austrinídeos"   , declinacao:-30},
{nome:"Perseidas"             , declinacao:58 },
]

let Hemisferio_Norte = chuvaDeMeteoros.filter(chuva   => chuva.declinacao >= 0);
let Hemisferio_Sul   = chuvaDeMeteoros.filter(chuva   => chuva.declinacao < 0);

function Apresentacao_Dos_Meteoros(){
return [Hemisferio_Norte,Hemisferio_Sul]
};


let Norte_Sul = Apresentacao_Dos_Meteoros();

//Apresentação dos meteoros
let Norte = Norte_Sul[0];
let Sul   = Norte_Sul[1];

let maior_menor = (c1,c2) => {
return c2.declinacao - c1.declinacao 
}

Norte.sort(maior_menor);

//Hemisfério norte
console.log(`${"".padStart(10,"-")}|Chuvas do hemisfério Norte|${"".padEnd(10,"-")} `);
for(let i = 0; i < Norte.length; i++)
{
console.log(`Meteoro    : ${"".padEnd(20,".")} ${Norte[i].nome}
Declinação : ${"".padEnd(20,".")} ${Norte[i].declinacao}dc
`)
}

//Hemisfério Sul
console.log(`${"".padStart(10,"-")}|Chuvas do hemisfério Sul|${"".padEnd(10,"-")}`);

const maior_menor_Sul = (dcNeg,dcNeg2) => {
return  dcNeg.declinacao - dcNeg2.declinacao;
}

Sul.sort(maior_menor_Sul);

for(let i = 0; i < Sul.length; i++){
console.log(`Meteoro    :${"".padStart(20,".")} ${Sul[i].nome}
Declinação :${"".padEnd(20,".")} ${Sul[i].declinacao}dc
`);
}
