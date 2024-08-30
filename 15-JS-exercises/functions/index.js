/* Creați o funcție „calcAverage” pentru a calcula media a 3 scoruri si 
Folosiți funcția pentru a calcula media pentru ambele echipe */

/*Creați o funcție „checkWinner” care ia ca parametri scorul mediu al fiecărei echipe („avgDolhins” și „avgKoalas”), 
apoi înregistrează câștigătorul în consolă, împreună cu punctele de victorie, conform regulii de mai sus.
Exemplu: „Koalas câștigă (30 vs. 13)”. */

//Utilizați funcția „checkWinner” pentru a determina câștigătorul atât pentru DATA 1, cât și pentru DATA 2.

// Ignorați remizele de data aceasta

//Test 1 - Delfinii scor 44, 23 și 71. Koalas scor 65, 54 și 49

let koalasRound1Test1 = 65;
let koalasRound2Test1 = 54;
let koalasRound3Test1 = 49;

let delfinsRound1Test1 = 44;
let delfinsRound2Test1 = 23;
let delfinsRound3Test1 = 71;

// Test 2 - Delfinii scor 85, 54 și 41. Koala scor 23, 34 și 27

let koalasRound1Test2 = 23;
let koalasRound2Test2 = 34;
let koalasRound3Test2 = 27;

let delfinsRound1Test2 = 85;
let delfinsRound2Test2 = 54;
let delfinsRound3Test2 = 41;

function calcAverage(round1, round2, round3) {
  let averageScore = (round1 + round2 + round3) / 3;
  return averageScore;
}

let koalasAverageScoreTest1 = calcAverage(
  koalasRound1Test1,
  koalasRound2Test1,
  koalasRound3Test1
);
let delfinsAverageScoreTest1 = calcAverage(
  delfinsRound1Test1,
  delfinsRound2Test1,
  delfinsRound3Test1
);
console.log(koalasAverageScoreTest1, delfinsAverageScoreTest1); //Output: 56 46

let koalasAverageScoreTest2 = calcAverage(
  koalasRound1Test2,
  koalasRound2Test2,
  koalasRound3Test2
);
let delfinsAverageScoreTest2 = calcAverage(
  delfinsRound1Test2,
  delfinsRound2Test2,
  delfinsRound3Test2
);
console.log(koalasAverageScoreTest2, delfinsAverageScoreTest2); //Output: 28 60

function checkWinner(koalasAverage, delfinsAverage) {
  if (koalasAverage > delfinsAverage) {
    console.log("Koalas win " + koalasAverage + " vs " + delfinsAverage + ".");
  } else {
    console.log("Delfins win " + delfinsAverage + " vs " + koalasAverage + ".");
  }
}

let checkWinnerTest1 = checkWinner(
  koalasAverageScoreTest1,
  delfinsAverageScoreTest1
);

console.log(checkWinnerTest1); //Output: Koalas win 56 vs 46.

let checkWinnerTest2 = checkWinner(
  koalasAverageScoreTest2,
  delfinsAverageScoreTest2
);

console.log(checkWinnerTest2); //Output: Delfins win 60 vs 28.
