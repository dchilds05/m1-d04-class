const bases = [3, 5, 7, 9, 11];
// we want to have this as a result [9, 25, 49, 81, 121];

const inputs = ["MaAcO", "fEdE"];
const names = ["Marco", "Fede"];

const myPlusOnes = bases
  .map((element) => {
    return element + 1;
  })
  .sort((a, b) => {
    return a - b;
  }); // map returns a CHAINABLE NEW array

console.log(myPlusOnes);
console.log(bases);

/* 
const myPlusOnes = bases
  .map(function (element) {
    console.log(`I am + 1 ${element} to get ${element + 1}`);
    return element + 1;
  })
  .sort(); // map returns a CHAINABLE NEW array

console.log(myPlusOnes);
console.log(bases);
 */
