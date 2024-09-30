// Exerciţiul: Ana’s calculator v.3

/* 1. Creați un array „facturi” care să conțină toate cele 10 valori ale facturilor de testare
   2. Creați 2 array-uri goale pentru “tips” și “totals”
   3. Utilizați funcția „calcTip” pe care am scris-o înainte (nu este nevoie să repetați) pentru a calcula bacșișurile 
și valorile totale (factură + bacșiș) pentru fiecare valoare din array-ul de facturi. Utilizați ciclul for pentru
 a efectua cele 10 calcule!
DATE TESTARE: 22, 295, 176, 440, 37, 105, 10, 1100, 86 și 52
SFAT: Apelați calcTip în ciclu și utilizați metoda push pentru a adăuga valori in array-urile tips si totals.
   4. Scrieți o funcție „calcAverage” care ia ca argument un array numit „arr”. 
Această funcție calculează media tuturor numerelor din array-ul primit. Apelați funcția cu array-ul „totals”. */

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  let result = calcTip(bills[i]);
  tips.push(result.tip);
  totals.push(result.total);
}

function calcTip(bill) {
  let tip15 = (bill / 100) * 15;
  let tip20 = (bill / 100) * 20;
  let tip = bill > 300 ? tip20 : tip15;
  let total = bill + tip;
  return { tip: tip, total: total };
}
console.log(
  `For every bill Ann's payed the following tips: ${tips}, and total sums were: ${totals}`
); //Output: For every bill Ann's payed the following tips: 3.3,44.25,26.4,88,5.55,15.75,1.5,220,12.9,7.800000000000001,
// and total sums were: 25.3,339.25,202.4,528,42.55,120.75,11.5,1320,98.9,59.8

function calcAverage(arr) {
  let sum = arr.reduce((total, value) => {
    return total + value;
  });
  return sum / arr.length;
}

console.log(`The everage is: ${calcAverage(totals)}`);
