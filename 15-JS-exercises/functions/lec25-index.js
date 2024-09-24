/* Scrieți o funcție cu numele plural care să:
Accepte 2 argumente: un substantiv și un număr.
Întoarcă o propoziție ce conține numărul și substantivul la plural (dacă e cazul), ex: 
“I have 5 cats” sau “I have 1 dog”. 
Chemați funcția cu datele: “6 pig”, “0 hamster”, “1 parrot”.
Bonus: includem şi exceptiile "sheep" (“I have 1 sheep”, “I have 4 sheep”) şi "geese" (“I have 1 goose”, 
“I have 9 geese”) */

function plural(number, name) {
  let result;

  if (name === "goose" && number > 1) {
    result = console.log("I have " + number + " " + "geeese");
  } else if (number > 1 && name !== "sheep") {
    result = console.log("I have " + number + " " + name + "s");
  } else if (name === "sheep") {
    result = console.log("I have " + number + " " + name);
  } else {
    result = console.log("I have " + number + " " + name);
  }
  return result;
}

plural(5, "cat"); //Output: "I have 5 cats"

plural(1, "dog"); //Output: "I have 1 dog"

plural(6, "pig"); //Output: "I have 6 pigs"

plural(0, "hamster"); //Output: "I have 0 hamster"

plural(1, "parrot"); //Output: "I have 1 parrot"

plural(1, "sheep"); //Output: "I have 1 sheep"
plural(4, "sheep"); //Output: "I have 4 sheep"

plural(1, "goose"); //Output: "I have 1 goose"
plural(9, "goose"); //Output: "I have 9 geeese"

/* Creați o programă care are definite 3 variabile numele, anulNasterii şi isF (boolean).
Creați o funcție care calculează vârsta persoanei.
Creați o funcţie care acceptă o valoare booleană isF și întoarce vârsta de pensionare 
(folosiți ternaryOperator  - 67 bărbați, 64 femei);
Creați o funcție care află dacă persoana este deja la pensie, peste câți ani se va pensiona, şi dacă nu este minoră.
Afișați în consolă numele și mesajul de pensionare după exemplu: “Vasile mai are 26 de ani până la pensionare”.
Chemați numai o funcție cu datele.
Date: Sergiu, 1979. Anastasia, 1963. Andreea, 2010.
Bonus: aflați datele inițiale de la utilizator prin funcția prompt() */

function calcAge(birth) {
  let today = new Date();
  return today.getFullYear() - birth;
}

function calcRetirementAge(isF) {
  return isF ? 64 : 67;
}

function getPersonData(birth, isF) {
  let age = calcAge(birth);
  let retirementAge = calcRetirementAge(isF);

  let isMinor = age < 18;
  let isRetired = age >= retirementAge;
  let ageUntilRetirement = isRetired ? 0 : retirementAge - age;

  const data = {
    isMinor: isMinor,
    isRetired: isRetired,
    ageUntilRetirement: ageUntilRetirement,
  };
  return data;
}

function print(name, birth, isF) {
  let data = getPersonData(birth, isF);
  if (data.isRetired) {
    console.log(`${name} este pensionar`);
  } else if (data.isMinor) {
    console.log(
      `${name} este minor si mai are ${data.ageUntilRetirement} ani pana la pensionare`
    );
  } else {
    console.log(
      `${name} mai are ${data.ageUntilRetirement} ani pana la pensionare`
    );
  }
}

print("Sergiu", 1979, false);
print("Anastasia", 1963, true);
print("Andreea", 2010, true);
print("Vasile", 1956, false); //To check a retired person

let personName = prompt("Enter your name");
let birth = prompt("Enter your year of birth");
let gender = prompt("Enter your gender (F/M)");

print(personName, Number(birth), gender == "F");
