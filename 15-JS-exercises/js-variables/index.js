// VARIANTA 1: Vadim are greutatea de 78 kg si are 1,69 m inăltime. Alex cântăreste 92 kg si are 1,95 m înăltime

//Vadim's personal data
let vadimWeight = 78;
let vadimHeight = 1.69;
let vadimBMI = vadimWeight / vadimHeight ** 2;

//Alex's personal data
let alexWeight = 92;
let alexHeight = 1.95;
let alexBMI = alexWeight / alexHeight ** 2;

//BMI data comparison

let markHigherBMI = vadimBMI > alexBMI;

//Console output of both BMI indexes and their comparison
console.log("Vadim's BMI index is: " + vadimBMI);
console.log("Alex's BMI index is: " + alexBMI);
console.log("Is Vadim's BMI index higher than Alex's? " + markHigherBMI);

//VARIANTA 2: Vadim are greutatea de 95 kg si are 1,88 mînăltime. Alex cântăreste 85 kg si are 1,76 m înăltime

//Vadim's personal data the 2'th variant
let vadimWeightv2 = 95;
let vadimHeightv2 = 1.88;
let vadimBMIv2 = vadimWeightv2 / vadimHeightv2 ** 2;

//Alex's personal data the 2'th variant
let alexWeightv2 = 85;
let alexHeightv2 = 1.76;
let alexBMIv2 = alexWeightv2 / alexHeightv2 ** 2;

//BMI data comparison the 2'th variant

let markHigherBMIv2 = vadimBMIv2 > alexBMIv2;

//Console output of both BMI indexes and their comparison the 2'th variant
console.log("Vadim's BMI index is: " + vadimBMIv2);
console.log("Alex's BMI index is: " + alexBMIv2);
console.log("Is Vadim's BMI index higher than Alex's? " + markHigherBMIv2);
