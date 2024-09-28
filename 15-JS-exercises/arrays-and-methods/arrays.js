/* Creează un array numit listaCumparaturi și adaugă câteva produse pe care vrei să le cumperi.
Scrie o funcție numită sorteazaAlfabetic care sortează lista de cumpărături în ordine alfabetică și o afișează.
Scrie o funcție numită cautaProdus care primește un produs ca argument și returnează indicele acestuia în listă sau un mesaj dacă nu este găsit.
Scrie o funcție numită adaugaProdus care primește un produs ca argument și dacă acesta nu este deja în listă îl adaugă la lista de cumpărături.
Scrie o funcție numită eliminaProdus care primește un produs ca argument și îl elimină din lista de cumpărături.
Afișați atât lista inițială și numărul de produse din ea cât și lista finală și numărul de produse din ea. */

const groceryList = [
  "avocado",
  "bananas",
  "steak",
  "pineaple",
  "fish",
  "cheese",
];

function sortAlphabetically() {
  let list = groceryList;
  return list.sort();
}
sortAlphabetically(); //Output: (6) ['avocado', 'bananas', 'cheese', 'fish', 'pineaple', 'steak']

function findProduct(product) {
  let productIndex = groceryList.indexOf(product);
  if (productIndex > 0) {
    return productIndex;
  } else {
    return "The element was not found in the list";
  }
}

findProduct("pineaple"); // Output: 4
findProduct("almond milk"); // Output: 'The element was not found in the list'

function addProduct(product) {
  let list = groceryList;
  if (list.includes(product)) {
    return "This product is already added to the list";
  } else {
    list.push(product);
    return list;
  }
}
addProduct("fish"); //Output: 'This product is already added to the list'
addProduct("carrot"); //Output: (7) ['avocado', 'bananas', 'steak', 'pineaple', 'fish', 'cheese', 'carrot']
addProduct("avocado"); //Output: 'This product is already added to the list'
