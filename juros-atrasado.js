
import valorDevido from 'readline-sync';
import diasAtraso  from 'readline-sync';

let ValorJuros 
let TaxaJuros 
let ValorTotal

let ColecaoDivida = 
[
{valorDevido : Number(valorDevido.question("Digite o valor que você deve : "))},
{dias        : Number(diasAtraso.question("Digite os dias de atraso : "))}
]


if(ColecaoDivida[0].valorDevido > 0)
{

//Conditional 1
if(ColecaoDivida[1].dias === 0)
{
console.log("Não será cobrada nenhuma taxa você pagará " + ColecaoDivida[0].valorDevido + "R$\nVocê está em dia")    
}
//Conditional 2
else if(ColecaoDivida[1].dias > 1 && ColecaoDivida[1].dias < 5)
{

TaxaJuros = 5

ValorJuros = (Number(ColecaoDivida[0].valorDevido) * 5 ) / 100
ValorTotal = Number(ColecaoDivida[0].valorDevido) + ValorJuros 

console.log("\nVocê está devendo "       + ColecaoDivida[0].valorDevido   + "R$"            )
console.log("O pagamento está a "       + ColecaoDivida[1].dias + " Dias Atrasados")
console.log("Será cobrado uma taxa de " + TaxaJuros     + "% de juros"    )
console.log("No valor total ficará "    + ValorTotal    + "R$"            )

}
//Conditional 3
else if(ColecaoDivida[1].dias >= 5 && ColecaoDivida[1].dias <= 10){

TaxaJuros  = 10 

ValorJuros = (Number(ColecaoDivida[0].valorDevido) * 10) / 100 
ValorTotal = Number(ColecaoDivida[0].valorDevido) + ValorJuros

console.log("\nVocê está devendo " + ColecaoDivida[0].valorDevido +"R$")
console.log("O pagamento está a " + ColecaoDivida[1].dias + " Dias Atrasados" )
console.log("Será cobrado uma taxa de " + TaxaJuros + "% de juros");
console.log("No valor total ficará  " +  ValorTotal  + "R$");
 
}
//Conditional 4
else if(ColecaoDivida[1].dias  >= 11 && ColecaoDivida[1].dias <= 29){

TaxaJuros  = 20

ValorJuros = (Number(ColecaoDivida[0].valorDevido) * 20) / 100
ValorTotal = Number(ColecaoDivida[0].valorDevido) + ValorJuros

console.log("\nVocê está devendo " + ColecaoDivida[0].valorDevido + "R$")
console.log("O pagamento está a " + ColecaoDivida[1].dias + " Dias Atrasados")
console.log("Será cobrado uma taxa de " + TaxaJuros + "% de Juros" )
console.log("No valor total ficará " + ValorTotal + "R$")
}
//Conditional case doesn't come before
else 
{

TaxaJuros = 50

ValorJuros = (ColecaoDivida[0].valorDevido * 50) / 100
ValorTotal = Number(ColecaoDivida[0].valorDevido) + ValorJuros

console.log("Se os dias de atraso passar de 1 mês então  será cobrado uma taxa de 50% ")
console.log("\nVocê está devendo " + ColecaoDivida[0].valorDevido + "R$")
console.log("O pagamento está a " + ColecaoDivida[1].dias + " dias atrasados, 1 Mês de Atraso")
console.log("Será cobrado uma taxa de " + TaxaJuros + "% de Juros")    
console.log("No valor total ficará " + ValorTotal + "R$")

}

}
else
{
console.log("O Valor inválido o valor da divida tem que ser maior do que zero")    
}