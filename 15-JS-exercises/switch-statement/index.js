// Exercitiu: Ana’s calculator v.1
/* Ana vrea să construiască un calculator de bacșiș (tips) foarte simplu pentru ori de câte ori merge să mănânce într-un restaurant. 
În țara ei, este obișnuit să dai bacșiș 15% dacă valoarea facturii este între 50 și 300. 
Dacă valoarea este diferită, bacșișul este de 20%.
1. Sarcina ta este de a calcula bacșișul, în funcție de valoarea facturii. Creați o variabilă numită „tip” pentru aceasta. 
2. Imprimați pe consolă care conține valoarea facturii, bacșișul și valoarea finală (factura + bacșiș). 
Exemplu: „Nota a fost 275, bacșișul a fost 41,25 și valoarea totală 316,25”
DATE DE TEST: Testați pentru valorile facturii 275, 40 și 430 */

// Testing 275 $ bill
let bill = 275;
let tip15 = (bill / 100) * 15;
let tip20 = (bill / 100) * 20;
let tip = bill > 300 ? tip20 : tip15;
let total = bill + tip;
console.log(
  "The bill was: " +
    bill +
    ", the tip was: " +
    tip +
    "." +
    " Total value is: " +
    total +
    "."
); // The output is: The bill was: 275, the tip was: 41.25. Total value is: 316.25.

//Testing 40 $ bill
let billV2 = 40;
let tip15V2 = (billV2 / 100) * 15;
let tip20V2 = (billV2 / 100) * 20;
let tipV2 = billV2 > 300 ? tip20V2 : tip15V2;
let totalV2 = billV2 + tipV2;
console.log(
  "The bill was: " +
    billV2 +
    ", the tip was: " +
    tipV2 +
    "." +
    " Total value is: " +
    totalV2 +
    "."
); // The output is: The bill was: 40, the tip was: 6. Total value is: 46.

//Testing 430 $ bill

let billV3 = 430;
let tip15V3 = (billV3 / 100) * 15;
let tip20V3 = (billV3 / 100) * 20;
let tipV3 = billV3 > 300 ? tip20V3 : tip15V3;
let totalV3 = billV3 + tipV3;
console.log(
  "The bill was: " +
    billV3 +
    ", the tip was: " +
    tipV3 +
    "." +
    " Total value is: " +
    totalV3 +
    "."
); // The output is: The bill was: 430, the tip was: 86. Total value is: 516.
