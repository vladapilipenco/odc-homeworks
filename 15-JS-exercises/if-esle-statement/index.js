/* Exercise 1 - Creeați o variabilă "temperature". Folosiți instrucțiuni if/else pentru
 a verifica dacă temperatura este sub 0 (îngheț), între 0 și 10 (frig), 
 între 11 și 25 (moderat), sau peste 25 (cald). Afișați categoria de temperatură corespunzătoare */
let temperature = 18;
let category;

if (temperature < 0) {
  category = "îngheț";
} else if (temperature >= 0 && temperature <= 10) {
  category = "frig";
} else if (temperature >= 11 && temperature <= 20) {
  category = "moderat";
} else {
  category = "cald";
}
console.log(category); // Output "moderat"

/* Exercise 2 - Creeați o variabilă "day" cu o valoare de la 1 la 7, unde 1 reprezintă Luni și 7 reprezintă Duminică. 
Folosiți instrucțiuni if/else pentru a afișa numele zilei. 
De exemplu, dacă day este 1, afișați "Luni"; dacă day este 5, afișați "Vineri" */
let day = 2;
let weekDay;

if (day == 1) {
  weekDay = "Luni";
} else if (day == 2) {
  weekDay = "Marti";
} else if (day == 3) {
  weekDay = "Mercuri";
} else if (day == 4) {
  weekDay = "Joi";
} else if (day == 5) {
  weekDay = "Vineri";
} else if (day == 6) {
  weekDay = "Sambata";
} else if (day == 7) {
  weekDay = "Duminica";
}
console.log(weekDay); //Output "Marti"

/* Exercise 3 - Având o variabilă "number", folosiți instrucțiuni if/else pentru a determina 
dacă numărul este par sau impar. Afișați "Par" dacă numărul este par și "Impar" dacă este impar */
let number = 22;

if (number % 2 == 0) {
  console.log("Numarul este par");
} else {
  console.log("Numarul este impar");
} //Output "Numarul este par"

/* Exercise 4 - Creeați o variabilă "purchaseAmount" și determinați costul total 
după aplicarea unei reduceri și adăugarea impozitului:
 - Dacă purchaseAmount este mai mare sau egal cu 100, aplicăm o reducere de 10%.
 - Pentru toate sumele, adaugăm un impozit de 5% la totalul după reducere (la necesitate).
Afișați suma finală de plătit. */

let purchaseAmount = 800;
let discount = (purchaseAmount / 100) * 10;

if (purchaseAmount >= 100) {
  purchaseAmount -= discount;
}
let total = purchaseAmount + (purchaseAmount / 100) * 5; //Dupa impozit

console.log(total); //Output 756
/* Calcule: 
10% de la 800 = 80 
800 - 80 = 720
5% de la 720 = 36 
720 + 36 = 756 */

/* Exercise 5 - Creeați o variabilă password și folosiți instrucțiuni if/else pentru a verifica complexitatea parolei:
-    Dacă password are cel puțin 12 caractere și conține atât litere mari, litere mici, cât și cifre, afișați "Parolă foarte sigură".
-    Dacă password are cel puțin 8 caractere și conține litere mari și litere mici, afișați "Parolă sigură".
-    Dacă password are cel puțin 6 caractere și conține doar litere, afișați "Parolă slabă".
-    Altminteri, afișați "Parolă nesigură" */

let password;
let verySecurePassword = "gggghhGHghgAs12346Wqsdd"; //For verification
let securePassword = "fgfGGFffFFFgfgf"; //For verification
let lessSecurePassword = "klklkl"; //For verification
let insecurePassword = "hdgfb"; //For verification

password = insecurePassword; //Output "Parolă nesigură"

let regexNum = /[0-9]/; //Daca contine cifre
let regexUpLow = /[A-Za-z]/; //Daca contine litere mari și litere mici
let regexLow = /[a-z]/; //Daca contine doar litere mici

if (
  password.length >= 12 &&
  password.search(regexUpLow) > -1 &&
  password.search(regexNum) > -1
) {
  console.log("Parolă foarte sigură");
} else if (password.length >= 8 && password.search(regexUpLow) > -1) {
  console.log("Parolă sigură");
} else if (password.length >= 6 && password.search(regexUpLow) > -1) {
  console.log("Parolă slabă");
} else {
  console.log("Parolă nesigură");
}
