/*Créez une fonction qui prend en paramètre un tableau et qui affiche en console tous les éléments de
ce tableau.*/
console.log("exo.1")
let herosJv = ["Link", "Mario", "Riu", "Sonic", "James", "Kirby", "Samus", "Lara", "Trico", "Snake", "Sora", "Cloud", "Gordon", "Kratos", "Yoshi", "Ken", "Squall", "Sakura", "Sagat", "Max"];
// Declaration d'un tableauu //


function functionAfficher(seq) { //Declaration fonction
  let i = 0; // enumeration
  let currentElement; // var intermédiare
  while (i < seq.length) { //condition
    currentElement = seq[i]; //
    i = i + 1; // mise a jour element courant
    console.log(currentElement); // afficher element
  }
}
functionAfficher(herosJv) // exe fonction


/*Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers
éléments de ce tableau.*/
console.log("exo.2")

function functionOfTenFirstElements(seq) { //Declaration fonction
  let i = 0; //declaration indice
  let currentElement; // var intermediaire
  while (i < seq.length) { //condition
    currentElement = seq[i]
    i = i + 1; //mise a jour element courant
    if (i === 11) // si = a 11
      break; // stop if
    console.log(currentElement) // afficher elementcourant
  }
}
functionOfTenFirstElements(herosJv) // exe fonction


console.log("exo.3")

function tenLastElements(array) {
 let i = array.length - 1; // indice commence à la derniere valeur
 let currentElement; // var intermediare
 while (i > array.length - 11 ) { //continuation condition
   currentElement = array[i];
   i--;  // valeur décrémenté
   console.log(currentElement); // exe fonction
 }
}

tenLastElements(elementsArray);

/*Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie une copie de ce tableau dans laquelle tout les nombres ont été augmentés de 1.*/
console.log("exo.4")
let arrayNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]; // declaration tableau

function functionPlusOne(seq) {
  let copyTab = []; // copie tab
  let i = 0; // enumeration
  let currentElement; // var inter
  while (i < seq.length) { // tant que indice inf a la longueur du tab
    currentElement = seq[i]; //
    i = i + 1; // indice + 1
    copyTab.push(currentElement + 1); // ajout des valeurs de la var inter dans copie tab
  }
  console.log(copyTab);
};
functionPlusOne(arrayNumb); // exe fonction





console.log("exo.5")

/*Créez une fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de
ce tableau, affiche si cet élément est pair ou non.*/

function arrayPairOrNot(seq) {
  let i = 0; // declaration indice
  let currentElement; // var inter
  while (i < seq.length) { // tant que indice inf a la longueur du tab
    currentElement = seq[i]
    i = i + 1; // indice +1
    if (i % 2 == 0) // formule pour pair
      console.log(currentElement + " pair") // si num pair alors afficher pair
    else
      console.log(currentElement + " impair") // sinon = impair
  }
}
arrayPairOrNot(arrayNumb)

/*Créez une fonction qui prend en paramètre un tableau de nombres, et qui renvoie la somme des
éléments de ce tableau.*/
console.log("exo.6")

function sumFunction(seq) {
  let i = 0; // declation de l'indice
  let currentElement;
  let sum = 0; // somme declaré à 0
  while (i < seq.length) { // tant que indice inf à longeur du tab
    currentElement = seq[i]
    i = i + 1;
    sum += currentElement; // affectation après addition
  }
  return sum; // retourner la somme
}
console.log(sumFunction(arrayNumb))



console.log("Exercice 7 :")
// Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie le nombre
// d’éléments pairs de ce tableau.

function pairSum(seq) {
  let i = 0; // declaration indice
  let currentElement;
  let numberPair = 0;
  while (i < seq.length) {
    currentElement = seq[i];
    i = i + 1;
    if (!(currentElement % 2)) { // si var inter diff de pair
      numberPair++; // nmb pair +1
    }
  }
  return numberPair; // retourner nmb pair
}

console.log(pairSum(arrayNumb));


console.log("Exercice 8 :")
// Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie la valeur maximum
// de ce tableau.

function functionMaxNumber(seq) {
  let i = 0; // declration de l'indice
  let currentElement; // var intermediare
  while (i < seq.length) { // tant que indice inf à longueur du tab
    currentElement = seq[i];
    i = i + 1; // incrémentation
  }
  return Math.max.apply(null, seq); // retourner le number max du tab
}

console.log("la valeur max : " + functionMaxNumber(arrayNumb));


console.log("Exercice 9 :")
// Créez une fonction qui prend en paramètre un tableau de nombres et qui affiche la valeur maximum
// et minimum de ce tableau.


function functionMaxAndMinNumber(seq) {
  let i = 0; // declaration de l'indice
  let currentElement; // var intermediaire
  let numMax;
  let numMin
  while (i < seq.length) {
    currentElement = seq[i];
    i = i + 1;
    numMax = Math.max.apply(null, seq); // var est = a la valeur max du tab
    numMin = Math.min.apply(null, seq); // var est = a la valeur min du tab
  }
  console.log("la valeur max : " + numMax + " la valeur min : " + numMin); // afficher les valeurs
}
functionMaxAndMinNumber(arrayNumb);


console.log("Exercice 10 :")
// Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie vrai si ce tableau
// est ordonné dans l’ordre croissant, faux si ce n’est pas le cas.

function functionOrderBy(seq) {
  let i = 0; // declaration indice
  let currentElement; // var inter
  let previousElement = arrayNumb[0]; // var qui permet de vérifier element precedent dans tab
  while (i < seq.length) {
    currentElement = seq[i];
    i = i + 1;
    if (previousElement > currentElement) { // si element precedent est sup a l'element courrant
      console.log("faux"); // retourner faux
      return;

    } else { // sinon
      previousElement = currentElement; // element precedent du tab est = a l'element courrant
    }
  }
  console.log("vrai") // alors vrai
}
functionOrderBy(arrayNumb);

console.log("Exercice 11 :")

let arrayNumbDouble = [1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 16, 17, 18, 18, 19, 20, 21, 21];
// Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau
// de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, chaque
// élément n'a qu'une seule occurrence.


function withoutDouble(seq) {
  let i = 0;
  let currentElement;
  let secondTab = [];
  while (i < seq.length) {
    currentElement = seq[i]
    if (secondTab.indexOf(currentElement) === -1) { // si  tab valeur est egal a élémentRecherché aux éléments contenus dans le tableau
      secondTab.push(currentElement); // alors on ajout valeur de l'element courrant
    }
    i++ // incrémentation du compteur
  }
  return secondTab; // on retourne le 2eme tab
}
console.log(withoutDouble(arrayNumbDouble));


console.log("Exercice 12 :")
// Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau
// de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, l'ordre
// des éléments est inversé.

function reverseArray(seq) {
  let i = (seq.length - 1); // declaration de l'indice -1 pour ne pas compter le 0
  let secondArray = []; // declaration 2eme tab
  let currentElement; // var intermediaire
  while (i >= 0) { // tant que indice sup ou = à 0
    currentElement = seq[i] // element courrant prend en valeur l'indice du tab
    i = i - 1; // décrémentation de l'indice
    secondArray.push(currentElement); // ajout des valeurs dans le second tab
  }
  return secondArray; // retourne 2eme tab
}
console.log(reverseArray(arrayNumb)); // execution fonction sur tab


console.log("Exercice 13 :")
// Créez une fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau
// correspondant à la concaténation des deux tableaux d'entiers passés en paramètres.

let arrayLittleNum = [1, 2, 3] // declaration d'un petit tab

function twoArray(array, array2) { // fonction prenant en para deux tab
  let i = 0; // indice déclaré a 0
  let currentElement; // var intermediaire
  while (i < array.length) { // tant que I est inf a la longueur du tab
    currentElement = array[i]; // element courant est = a indice du tab
    array2.push(currentElement); // on ajout les valeurs de l'element courant au tab 2
    i = i + 1; // on incrémente
  }
  return array2; // on retourne le tab 2
}
console.log(twoArray(arrayLittleNum, arrayNumb)) // on execute la fonction avec deux tab en para


console.log("Exercice 14 :")
// Créez une fonction qui prend en paramètre un tableau de chaînes de caractères, qui copie dans un
// nouveau tableau tous les éléments du tableau passé en paramètre commençant par une voyelle.

function addVowel(array) {
  let i = 0;
  let arrayVowel = [];
  let currentElement;
  while (i < array.length) {
    currentElement = array[i];
    i = i + 1;
    if (currentElement[0].toUpperCase() == "A" || currentElement[0].toUpperCase() == "E" || currentElement[0].toUpperCase() == "I" || currentElement[0].toUpperCase() == "O" || currentElement[0].toUpperCase() == "U" || currentElement[0].toUpperCase() == "Y") {
      arrayVowel.push(currentElement);
    }
  }
  return arrayVowel
}
console.log(addVowel(herosJv));

console.log("Exercice 14.5 :")
// Créez une fonction qui prend en paramètre une chaîne de caractères, qui renvoie vrai si la chaîne est
// un palindrome, ou qui renvoie faux si ce n’est pas le cas.

function palindrome(string) {
  let currentElement
  let reverseString = '';
  let i = string.length - 1;
  while (i >= 0) {
    currentElement = string[i];
    i = i - 1;
    reverseString += currentElement;
  }
  if (string == reverseString) {
    return true;
  } else {
    return false
  }
}
console.log("kayak");
console.log(palindrome("kayak"));

console.log("Exercice 15 :")
// Créez une fonction qui prend en paramètre deux chaînes de caractères, qui renvoie vrai si la 1ère
// chaîne est un anagramme de la 2ème chaîne, ou qui renvoie faux si ce n’est pas le cas.

function anagramme(string1, string2) {
  let currentElement;
  let currentElement2;
  let i = 0;
  let j = 0;
  while (i >= 0) {
    currentElement = string1;
    i = i + 1;
    while (i >= 0) {
      currentElement2 = string2[i];
      i = i -1;
    }
  }

}
