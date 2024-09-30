/* Să revenim la Mark și Vasile comparându-și BMI-urile! De data aceasta, să folosim obiecte pentru
 a implementa calculele! Amintiți-vă: BMI= masă / înălțime ** 2 = masă / (înălțime * înălțime). 
 (masa in kg si inaltimea in metri)
1. Pentru fiecare dintre ele, creați un obiect cu proprietăți pentru numele complet,
 masa și înălțimea lor (Mark Ganea și Vasile Cibotaru)
2. Creați o metodă „calcBMI” pe fiecare obiect pentru a calcula BMI (aceeași metodă pentru ambele obiecte). 
Stocați valoarea BMI într-o proprietate și, de asemenea, returnați-o din metodă.
3. Afisati in consola cine are BMI mai mare, împreună cu numele complet și BMI respectiv. 
Exemplu: „BMI-ul lui Vasile Cibotaru (28,3) este mai mare decât cel al lui Mark Ganea (23,9)!”
DATE TEST: Mark greutatea 78 kg și are 1,69 m înălțime. Vasile cântărește 92 kg și are 1,95 m înălțime. */

const mark = {
  firstName: "Mark",
  lastName: "Ganea",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const vasile = {
  firstName: "Vasile",
  lastName: "Cibotaru",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
mark.calcBMI();
vasile.calcBMI();

if (mark.BMI > vasile.BMI) {
  console.log(
    `${mark.getFullName()}'s BMI (${
      mark.BMI
    }) is bigger than ${vasile.getFullName()}'s (${vasile.BMI})!`
  );
} else if (vasile.BMI > mark.BMI) {
  console.log(
    `${vasile.getFullName()}'s BMI (${
      vasile.BMI
    }) is bigger than ${mark.getFullName()}'s (${mark.BMI})!`
  );
} else {
  console.log("The BMIs are equal!");
}
