// Game mode 301
console.log("Initiating new game of 301");

let playerScore1 = 301;
let playerScore2 = 301;

console.log('Player 1 Score: ' + playerScore1 + '\nPlayer 2 Score: ' + playerScore2);
console.log("Player 1 Now Throwing");

// these are stand-ins for the throws that will be evaluated by the angular form... I think...
let currentThrow1 = "10";
let currentThrow2 = "D11";
let currentThrow3 = "T5";

let throwInt;
let throwVal;
let throwArr = [currentThrow1, currentThrow2, currentThrow3];
// isInputValid = function () {
// here I will need a for loop that will evaluate each throw for validity
//   switch (currentThrow){
//
//   }
// };

for(var i = 0; i < throwArr.length; i++) {
// is the current throw multiplied by any value?
  let multiplier = function () {
    if (throwArr[i].charAt(0) == "D") {
      throwInt = throwArr[i].slice(1);
      throwVal = 2 * parseInt(throwInt);
    }
    else if (throwArr[i].charAt(0) == "T") {
      throwInt = throwArr[i].slice(1);
      throwVal = 3 * parseInt(throwInt);
    }
// if it is not multiplied the value stays as is
    else {
      throwInt = parseInt(throwArr[i]);
      throwVal = parseInt(throwArr[i]);
    }
  };
  multiplier();

  playerScore1 = playerScore1 - throwVal;

  console.log("Current Throw = " + throwArr[i]);
  console.log("Throw Gore = " + throwInt);
  console.log("Value of Throw = " + throwVal);
};

// console.log("Player 1 New Score: " + playerScore1);
