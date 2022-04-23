const dice = document.querySelector("#dice");
const button = document.querySelector(".roll");

//Rolling the dice

const colors = ["yellow", "pink", "orange", "blue", "brown", "green"];
const chooseRandom = () => Math.trunc(Math.random() * 6);
const animations = ["animate", "animate2"];
let active = 0;

button.addEventListener("click", function () {
  dice.className = `${animations[active]} ${colors[chooseRandom()]}`;
  active = active == 0 ? 1 : 0;
});

// Players and buttons
const scoreYellowP1 = document.querySelector("#scoreYellow--p1");
const minusYellowP1 = document.querySelector("#minusYellow--p1");
const addYellowP1 = document.querySelector("#addYellow--p1");
const scoreOrangeP1 = document.querySelector("#scoreOrange--p1");
const addOrangeP1 = document.querySelector("#addOrange--p1");
const minusOrangeP1 = document.querySelector("#minusOrange--p1");
const scoreBrownP1 = document.querySelector("#scoreBrown--p1");
const addBrownP1 = document.querySelector("#addBrown--p1");
const minusBrownP1 = document.querySelector("#minusBrown--p1");
const scoreGreenP1 = document.querySelector("#scoreGreen--p1");
const addGreenP1 = document.querySelector("#addGreen--p1");
const minusGreenP1 = document.querySelector("#minusGreen--p1");
const scorePinkP1 = document.querySelector("#scorePink--p1");
const addPinkP1 = document.querySelector("#addPink--p1");
const minusPinkP1 = document.querySelector("#minusPink--p1");
const scoreBlueP1 = document.querySelector("#scoreBlue--p1");
const addBlueP1 = document.querySelector("#addBlue--p1");
const minusBlueP1 = document.querySelector("#minusBlue--p1");

const scoreYellowP2 = document.querySelector("#scoreYellow--p2");
const minusYellowP2 = document.querySelector("#minusYellow--p2");
const addYellowP2 = document.querySelector("#addYellow--p2");
const scoreOrangeP2 = document.querySelector("#scoreOrange--p2");
const addOrangeP2 = document.querySelector("#addOrange--p2");
const minusOrangeP2 = document.querySelector("#minusOrange--p2");
const scoreBrownP2 = document.querySelector("#scoreBrown--p2");
const addBrownP2 = document.querySelector("#addBrown--p2");
const minusBrownP2 = document.querySelector("#minusBrown--p2");
const scoreGreenP2 = document.querySelector("#scoreGreen--p2");
const addGreenP2 = document.querySelector("#addGreen--p2");
const minusGreenP2 = document.querySelector("#minusGreen--p2");
const scorePinkP2 = document.querySelector("#scorePink--p2");
const addPinkP2 = document.querySelector("#addPink--p2");
const minusPinkP2 = document.querySelector("#minusPink--p2");
const scoreBlueP2 = document.querySelector("#scoreBlue--p2");
const addBlueP2 = document.querySelector("#addBlue--p2");
const minusBlueP2 = document.querySelector("#minusBlue--p2");

const scoreYellowP3 = document.querySelector("#scoreYellow--p3");
const minusYellowP3 = document.querySelector("#minusYellow--p3");
const addYellowP3 = document.querySelector("#addYellow--p3");
const scoreOrangeP3 = document.querySelector("#scoreOrange--p3");
const addOrangeP3 = document.querySelector("#addOrange--p3");
const minusOrangeP3 = document.querySelector("#minusOrange--p3");
const scoreBrownP3 = document.querySelector("#scoreBrown--p3");
const addBrownP3 = document.querySelector("#addBrown--p3");
const minusBrownP3 = document.querySelector("#minusBrown--p3");
const scoreGreenP3 = document.querySelector("#scoreGreen--p3");
const addGreenP3 = document.querySelector("#addGreen--p3");
const minusGreenP3 = document.querySelector("#minusGreen--p3");
const scorePinkP3 = document.querySelector("#scorePink--p3");
const addPinkP3 = document.querySelector("#addPink--p3");
const minusPinkP3 = document.querySelector("#minusPink--p3");
const scoreBlueP3 = document.querySelector("#scoreBlue--p3");
const addBlueP3 = document.querySelector("#addBlue--p3");
const minusBlueP3 = document.querySelector("#minusBlue--p3");

const scoreYellowP4 = document.querySelector("#scoreYellow--p4");
const minusYellowP4 = document.querySelector("#minusYellow--p4");
const addYellowP4 = document.querySelector("#addYellow--p4");
const scoreOrangeP4 = document.querySelector("#scoreOrange--p4");
const addOrangeP4 = document.querySelector("#addOrange--p4");
const minusOrangeP4 = document.querySelector("#minusOrange--p4");
const scoreBrownP4 = document.querySelector("#scoreBrown--p4");
const addBrownP4 = document.querySelector("#addBrown--p4");
const minusBrownP4 = document.querySelector("#minusBrown--p4");
const scoreGreenP4 = document.querySelector("#scoreGreen--p4");
const addGreenP4 = document.querySelector("#addGreen--p4");
const minusGreenP4 = document.querySelector("#minusGreen--p4");
const scorePinkP4 = document.querySelector("#scorePink--p4");
const addPinkP4 = document.querySelector("#addPink--p4");
const minusPinkP4 = document.querySelector("#minusPink--p4");
const scoreBlueP4 = document.querySelector("#scoreBlue--p4");
const addBlueP4 = document.querySelector("#addBlue--p4");
const minusBlueP4 = document.querySelector("#minusBlue--p4");

const scoreYellowP5 = document.querySelector("#scoreYellow--p5");
const minusYellowP5 = document.querySelector("#minusYellow--p5");
const addYellowP5 = document.querySelector("#addYellow--p5");
const scoreOrangeP5 = document.querySelector("#scoreOrange--p5");
const addOrangeP5 = document.querySelector("#addOrange--p5");
const minusOrangeP5 = document.querySelector("#minusOrange--p5");
const scoreBrownP5 = document.querySelector("#scoreBrown--p5");
const addBrownP5 = document.querySelector("#addBrown--p5");
const minusBrownP5 = document.querySelector("#minusBrown--p5");
const scoreGreenP5 = document.querySelector("#scoreGreen--p5");
const addGreenP5 = document.querySelector("#addGreen--p5");
const minusGreenP5 = document.querySelector("#minusGreen--p5");
const scorePinkP5 = document.querySelector("#scorePink--p5");
const addPinkP5 = document.querySelector("#addPink--p5");
const minusPinkP5 = document.querySelector("#minusPink--p5");
const scoreBlueP5 = document.querySelector("#scoreBlue--p5");
const addBlueP5 = document.querySelector("#addBlue--p5");
const minusBlueP5 = document.querySelector("#minusBlue--p5");

const scoreYellowP6 = document.querySelector("#scoreYellow--p6");
const minusYellowP6 = document.querySelector("#minusYellow--p6");
const addYellowP6 = document.querySelector("#addYellow--p6");
const scoreOrangeP6 = document.querySelector("#scoreOrange--p6");
const addOrangeP6 = document.querySelector("#addOrange--p6");
const minusOrangeP6 = document.querySelector("#minusOrange--p6");
const scoreBrownP6 = document.querySelector("#scoreBrown--p6");
const addBrownP6 = document.querySelector("#addBrown--p6");
const minusBrownP6 = document.querySelector("#minusBrown--p6");
const scoreGreenP6 = document.querySelector("#scoreGreen--p6");
const addGreenP6 = document.querySelector("#addGreen--p6");
const minusGreenP6 = document.querySelector("#minusGreen--p6");
const scorePinkP6 = document.querySelector("#scorePink--p6");
const addPinkP6 = document.querySelector("#addPink--p6");
const minusPinkP6 = document.querySelector("#minusPink--p6");
const scoreBlueP6 = document.querySelector("#scoreBlue--p6");
const addBlueP6 = document.querySelector("#addBlue--p6");
const minusBlueP6 = document.querySelector("#minusBlue--p6");

/*Scores*/
let yellowP1 = 0;
let brownP1 = 0;
let greenP1 = 0;
let blueP1 = 0;
let pinkP1 = 0;
let orangeP1 = 0;

let yellowP2 = 0;
let brownP2 = 0;
let greenP2 = 0;
let blueP2 = 0;
let pinkP2 = 0;
let orangeP2 = 0;

let yellowP3 = 0;
let brownP3 = 0;
let greenP3 = 0;
let blueP3 = 0;
let pinkP3 = 0;
let orangeP3 = 0;

let yellowP4 = 0;
let brownP4 = 0;
let greenP4 = 0;
let blueP4 = 0;
let pinkP4 = 0;
let orangeP4 = 0;

let yellowP5 = 0;
let brownP5 = 0;
let greenP5 = 0;
let blueP5 = 0;
let pinkP5 = 0;
let orangeP5 = 0;

let yellowP6 = 0;
let brownP6 = 0;
let greenP6 = 0;
let blueP6 = 0;
let pinkP6 = 0;
let orangeP6 = 0;

// scoreBrownP1.textContent = brownP1;
// scoreGreenP1.textContent = greenP1;
// scoreBlueP1.textContent = blueP1;
// scorePinkP1.textContent = pinkP1;
// scoreOrangeP1.textContent = orangeP1;

// scoreYellowP2.textContent = yellowP2;
// scoreBrownP2.textContent = brownP2;
// scoreGreenP2.textContent = greenP2;
// scoreBlueP2.textContent = blueP2;
// scorePinkP2.textContent = pinkP2;
// scoreOrangeP2.textContent = orangeP2;

// scoreYellowP3.textContent = yellowP3;
// scoreBrownP3.textContent = brownP3;
// scoreGreenP3.textContent = greenP3;
// scoreBlueP3.textContent = blueP3;
// scorePinkP3.textContent = pinkP3;
// scoreOrangeP3.textContent = orangeP3;

// scoreYellowP4.textContent = yellowP4;
// scoreBrownP4.textContent = brownP4;
// scoreGreenP4.textContent = greenP4;
// scoreBlueP4.textContent = blueP4;
// scorePinkP4.textContent = pinkP4;
// scoreOrangeP4.textContent = orangeP4;

// scoreYellowP5.textContent = yellowP5;
// scoreBrownP5.textContent = brownP5;
// scoreGreenP5.textContent = greenP5;
// scoreBlueP5.textContent = blueP5;
// scorePinkP5.textContent = pinkP5;
// scoreOrangeP5.textContent = orangeP5;

// scoreYellowP6.textContent = yellowP6;
// scoreBrownP6.textContent = brownP6;
// scoreGreenP6.textContent = greenP6;
// scoreBlueP6.textContent = blueP6;
// scorePinkP6.textContent = pinkP6;
// scoreOrangeP6.textContent = orangeP6;

addYellowP1.addEventListener("click", function () {
  yellowP1++;
  scoreYellowP1.textContent = yellowP1;

  if (yellowP1 === 5) {
    addYellowP1.classList.add("hidden");
    scoreYellowP1.textContent = "";
    minusYellowP1.textContent = "";
  }
});

minusYellowP1.addEventListener("click", function () {
  yellowP1--;
  scoreYellowP1.textContent = yellowP1;

  if (yellowP1 < 5) {
    addYellowP1.classList.remove("hidden");
    minusYellowP1.textContent = "-";
  }
});

addBrownP1.addEventListener("click", function () {
  brownP1++;
  scoreBrownP1.textContent = brownP1;

  if (brownP1 === 5) {
    addBrownP1.classList.add("hidden");
    scoreBrownP1.textContent = "";
    minusBrownP1.textContent = "";
  }
});

minusBrownP1.addEventListener("click", function () {
  brownP1--;
  scoreBrownP1.textContent = brownP1;

  if (brownP1 < 5) {
    addBrownP1.classList.remove("hidden");
    minusBrownP1.textContent = "-";
  }
});

addGreenP1.addEventListener("click", function () {
  greenP1++;
  scoreGreenP1.textContent = greenP1;

  if (greenP1 === 5) {
    addGreenP1.classList.add("hidden");
    scoreGreenP1.textContent = "";
    minusGreenP1.textContent = "";
  }
});

minusGreenP1.addEventListener("click", function () {
  greenP1--;
  scoreGreenP1.textContent = greenP1;

  if (greenP1 < 5) {
    addGreenP1.classList.remove("hidden");
    minusGreenP1.textContent = "-";
  }
});

addBlueP1.addEventListener("click", function () {
  blueP1++;
  scoreBlueP1.textContent = blueP1;

  if (blueP1 === 5) {
    addBlueP1.classList.add("hidden");
    scoreBlueP1.textContent = "";
    minusBlueP1.textContent = "";
  }
});

minusBlueP1.addEventListener("click", function () {
  blueP1--;
  scoreBlueP1.textContent = blueP1;

  if (blueP1 < 5) {
    addBlueP1.classList.remove("hidden");
    minusBlueP1.textContent = "-";
  }
});

addOrangeP1.addEventListener("click", function () {
  orangeP1++;
  scoreOrangeP1.textContent = orangeP1;

  if (orangeP1 === 5) {
    addOrangeP1.classList.add("hidden");
    scoreOrangeP1.textContent = "";
    minusOrangeP1.textContent = "";
  }
});

minusOrangeP1.addEventListener("click", function () {
  orangeP1--;
  scoreOrangeP1.textContent = orangeP1;

  if (yellowP1 < 5) {
    addOrangeP1.classList.remove("hidden");
    minusOrangeP1.textContent = "-";
  }
});

addPinkP1.addEventListener("click", function () {
  pinkP1++;
  scorePinkP1.textContent = pinkP1;

  if (pinkP1 === 5) {
    addPinkP1.classList.add("hidden");
    scorePinkP1.textContent = "";
    minusPinkP1.textContent = "";
  }
});

minusPinkP1.addEventListener("click", function () {
  pinkP1--;
  scorePinkP1.textContent = pinkP1;

  if (pinkP1 < 5) {
    addPinkP1.classList.remove("hidden");
    minusPinkP1.textContent = "-";
  }
});

//PLAYER 2
addYellowP2.addEventListener("click", function () {
  yellowP2++;
  scoreYellowP2.textContent = yellowP2;

  if (yellowP2 === 5) {
    addYellowP2.classList.add("hidden");
    scoreYellowP2.textContent = "";
    minusYellowP2.textContent = "";
  }
});

minusYellowP2.addEventListener("click", function () {
  yellowP2--;
  scoreYellowP2.textContent = yellowP2;

  if (yellowP2 < 5) {
    addYellowP2.classList.remove("hidden");
    minusYellowP2.textContent = "-";
  }
});

addBrownP2.addEventListener("click", function () {
  brownP2++;
  scoreBrownP2.textContent = brownP2;

  if (brownP2 === 5) {
    addBrownP2.classList.add("hidden");
    scoreBrownP2.textContent = "";
    minusBrownP2.textContent = "";
  }
});

minusBrownP2.addEventListener("click", function () {
  brownP2--;
  scoreBrownP2.textContent = brownP2;

  if (brownP2 < 5) {
    addBrownP2.classList.remove("hidden");
    minusBrownP2.textContent = "-";
  }
});

addGreenP2.addEventListener("click", function () {
  greenP2++;
  scoreGreenP2.textContent = greenP2;

  if (greenP2 === 5) {
    addGreenP2.classList.add("hidden");
    scoreGreenP2.textContent = "";
    minusGreenP2.textContent = "";
  }
});

minusGreenP2.addEventListener("click", function () {
  greenP2--;
  scoreGreenP2.textContent = greenP2;

  if (greenP2 < 5) {
    addGreenP2.classList.remove("hidden");
    minusGreenP2.textContent = "-";
  }
});

addBlueP2.addEventListener("click", function () {
  blueP2++;
  scoreBlueP2.textContent = blueP2;

  if (blueP2 === 5) {
    addBlueP2.classList.add("hidden");
    scoreBlueP2.textContent = "";
    minusBlueP2.textContent = "";
  }
});

minusBlueP2.addEventListener("click", function () {
  blueP2--;
  scoreBlueP2.textContent = blueP2;

  if (blueP2 < 5) {
    addBlueP2.classList.remove("hidden");
    minusBlueP2.textContent = "-";
  }
});

addOrangeP2.addEventListener("click", function () {
  orangeP2++;
  scoreOrangeP2.textContent = orangeP2;

  if (orangeP2 === 5) {
    addOrangeP2.classList.add("hidden");
    scoreOrangeP2.textContent = "";
    minusOrangeP2.textContent = "";
  }
});

minusOrangeP2.addEventListener("click", function () {
  orangeP2--;
  scoreOrangeP2.textContent = orangeP2;

  if (yellowP2 < 5) {
    addOrangeP2.classList.remove("hidden");
    minusOrangeP2.textContent = "-";
  }
});

addPinkP2.addEventListener("click", function () {
  pinkP2++;
  scorePinkP2.textContent = pinkP2;

  if (pinkP2 === 5) {
    addPinkP2.classList.add("hidden");
    scorePinkP2.textContent = "";
    minusPinkP2.textContent = "";
  }
});

minusPinkP2.addEventListener("click", function () {
  pinkP2--;
  scorePinkP2.textContent = pinkP2;

  if (pinkP2 < 5) {
    addPinkP2.classList.remove("hidden");
    minusPinkP2.textContent = "-";
  }
});

//PLAYER 3
addYellowP3.addEventListener("click", function () {
  yellowP3++;
  scoreYellowP3.textContent = yellowP3;

  if (yellowP3 === 5) {
    addYellowP3.classList.add("hidden");
    scoreYellowP3.textContent = "";
    minusYellowP3.textContent = "";
  }
});

minusYellowP3.addEventListener("click", function () {
  yellowP3--;
  scoreYellowP3.textContent = yellowP3;

  if (yellowP3 < 5) {
    addYellowP3.classList.remove("hidden");
    minusYellowP3.textContent = "-";
  }
});

addBrownP3.addEventListener("click", function () {
  brownP3++;
  scoreBrownP3.textContent = brownP3;

  if (brownP3 === 5) {
    addBrownP3.classList.add("hidden");
    scoreBrownP3.textContent = "";
    minusBrownP3.textContent = "";
  }
});

minusBrownP3.addEventListener("click", function () {
  brownP3--;
  scoreBrownP3.textContent = brownP3;

  if (brownP3 < 5) {
    addBrownP3.classList.remove("hidden");
    minusBrownP3.textContent = "-";
  }
});

addGreenP3.addEventListener("click", function () {
  greenP3++;
  scoreGreenP3.textContent = greenP3;

  if (greenP3 === 5) {
    addGreenP3.classList.add("hidden");
    scoreGreenP3.textContent = "";
    minusGreenP3.textContent = "";
  }
});

minusGreenP3.addEventListener("click", function () {
  greenP3--;
  scoreGreenP3.textContent = greenP3;

  if (greenP3 < 5) {
    addGreenP3.classList.remove("hidden");
    minusGreenP3.textContent = "-";
  }
});

addBlueP3.addEventListener("click", function () {
  blueP3++;
  scoreBlueP3.textContent = blueP3;

  if (blueP3 === 5) {
    addBlueP3.classList.add("hidden");
    scoreBlueP3.textContent = "";
    minusBlueP3.textContent = "";
  }
});

minusBlueP3.addEventListener("click", function () {
  blueP3--;
  scoreBlueP3.textContent = blueP3;

  if (blueP3 < 5) {
    addBlueP3.classList.remove("hidden");
    minusBlueP3.textContent = "-";
  }
});

addOrangeP3.addEventListener("click", function () {
  orangeP3++;
  scoreOrangeP3.textContent = orangeP3;

  if (orangeP3 === 5) {
    addOrangeP3.classList.add("hidden");
    scoreOrangeP3.textContent = "";
    minusOrangeP3.textContent = "";
  }
});

minusOrangeP3.addEventListener("click", function () {
  orangeP3--;
  scoreOrangeP3.textContent = orangeP3;

  if (yellowP3 < 5) {
    addOrangeP3.classList.remove("hidden");
    minusOrangeP3.textContent = "-";
  }
});

addPinkP3.addEventListener("click", function () {
  pinkP3++;
  scorePinkP3.textContent = pinkP3;

  if (pinkP3 === 5) {
    addPinkP3.classList.add("hidden");
    scorePinkP3.textContent = "";
    minusPinkP3.textContent = "";
  }
});

minusPinkP3.addEventListener("click", function () {
  pinkP3--;
  scorePinkP3.textContent = pinkP3;

  if (pinkP3 < 5) {
    addPinkP3.classList.remove("hidden");
    minusPinkP3.textContent = "-";
  }
});

//PLAYER 4
addYellowP4.addEventListener("click", function () {
  yellowP4++;
  scoreYellowP4.textContent = yellowP4;

  if (yellowP4 === 5) {
    addYellowP4.classList.add("hidden");
    scoreYellowP4.textContent = "";
    minusYellowP4.textContent = "";
  }
});

minusYellowP4.addEventListener("click", function () {
  yellowP4--;
  scoreYellowP4.textContent = yellowP4;

  if (yellowP4 < 5) {
    addYellowP4.classList.remove("hidden");
    minusYellowP4.textContent = "-";
  }
});

addBrownP4.addEventListener("click", function () {
  brownP4++;
  scoreBrownP4.textContent = brownP4;

  if (brownP4 === 5) {
    addBrownP4.classList.add("hidden");
    scoreBrownP4.textContent = "";
    minusBrownP4.textContent = "";
  }
});

minusBrownP4.addEventListener("click", function () {
  brownP4--;
  scoreBrownP4.textContent = brownP4;

  if (brownP4 < 5) {
    addBrownP4.classList.remove("hidden");
    minusBrownP4.textContent = "-";
  }
});

addGreenP4.addEventListener("click", function () {
  greenP4++;
  scoreGreenP4.textContent = greenP4;

  if (greenP4 === 5) {
    addGreenP4.classList.add("hidden");
    scoreGreenP4.textContent = "";
    minusGreenP4.textContent = "";
  }
});

minusGreenP4.addEventListener("click", function () {
  greenP4--;
  scoreGreenP4.textContent = greenP4;

  if (greenP4 < 5) {
    addGreenP4.classList.remove("hidden");
    minusGreenP4.textContent = "-";
  }
});

addBlueP4.addEventListener("click", function () {
  blueP4++;
  scoreBlueP4.textContent = blueP4;

  if (blueP4 === 5) {
    addBlueP4.classList.add("hidden");
    scoreBlueP4.textContent = "";
    minusBlueP4.textContent = "";
  }
});

minusBlueP4.addEventListener("click", function () {
  blueP4--;
  scoreBlueP4.textContent = blueP4;

  if (blueP4 < 5) {
    addBlueP4.classList.remove("hidden");
    minusBlueP4.textContent = "-";
  }
});

addOrangeP4.addEventListener("click", function () {
  orangeP4++;
  scoreOrangeP4.textContent = orangeP4;

  if (orangeP4 === 5) {
    addOrangeP4.classList.add("hidden");
    scoreOrangeP4.textContent = "";
    minusOrangeP4.textContent = "";
  }
});

minusOrangeP4.addEventListener("click", function () {
  orangeP4--;
  scoreOrangeP4.textContent = orangeP4;

  if (yellowP4 < 5) {
    addOrangeP4.classList.remove("hidden");
    minusOrangeP4.textContent = "-";
  }
});

addPinkP4.addEventListener("click", function () {
  pinkP4++;
  scorePinkP4.textContent = pinkP4;

  if (pinkP4 === 5) {
    addPinkP4.classList.add("hidden");
    scorePinkP4.textContent = "";
    minusPinkP4.textContent = "";
  }
});

minusPinkP4.addEventListener("click", function () {
  pinkP4--;
  scorePinkP4.textContent = pinkP4;

  if (pinkP4 < 5) {
    addPinkP4.classList.remove("hidden");
    minusPinkP4.textContent = "-";
  }
});

//PLAYER 5
addYellowP5.addEventListener("click", function () {
  yellowP5++;
  scoreYellowP5.textContent = yellowP5;

  if (yellowP5 === 5) {
    addYellowP5.classList.add("hidden");
    scoreYellowP5.textContent = "";
    minusYellowP5.textContent = "";
  }
});

minusYellowP5.addEventListener("click", function () {
  yellowP5--;
  scoreYellowP5.textContent = yellowP5;

  if (yellowP5 < 5) {
    addYellowP5.classList.remove("hidden");
    minusYellowP5.textContent = "-";
  }
});

addBrownP5.addEventListener("click", function () {
  brownP5++;
  scoreBrownP5.textContent = brownP5;

  if (brownP5 === 5) {
    addBrownP5.classList.add("hidden");
    scoreBrownP5.textContent = "";
    minusBrownP5.textContent = "";
  }
});

minusBrownP5.addEventListener("click", function () {
  brownP5--;
  scoreBrownP5.textContent = brownP5;

  if (brownP5 < 5) {
    addBrownP5.classList.remove("hidden");
    minusBrownP5.textContent = "-";
  }
});

addGreenP5.addEventListener("click", function () {
  greenP5++;
  scoreGreenP5.textContent = greenP5;

  if (greenP5 === 5) {
    addGreenP5.classList.add("hidden");
    scoreGreenP5.textContent = "";
    minusGreenP5.textContent = "";
  }
});

minusGreenP5.addEventListener("click", function () {
  greenP5--;
  scoreGreenP5.textContent = greenP5;

  if (greenP5 < 5) {
    addGreenP5.classList.remove("hidden");
    minusGreenP5.textContent = "-";
  }
});

addBlueP5.addEventListener("click", function () {
  blueP5++;
  scoreBlueP5.textContent = blueP5;

  if (blueP5 === 5) {
    addBlueP5.classList.add("hidden");
    scoreBlueP5.textContent = "";
    minusBlueP5.textContent = "";
  }
});

minusBlueP5.addEventListener("click", function () {
  blueP5--;
  scoreBlueP5.textContent = blueP5;

  if (blueP5 < 5) {
    addBlueP5.classList.remove("hidden");
    minusBlueP5.textContent = "-";
  }
});

addOrangeP5.addEventListener("click", function () {
  orangeP5++;
  scoreOrangeP5.textContent = orangeP5;

  if (orangeP5 === 5) {
    addOrangeP5.classList.add("hidden");
    scoreOrangeP5.textContent = "";
    minusOrangeP5.textContent = "";
  }
});

minusOrangeP5.addEventListener("click", function () {
  orangeP5--;
  scoreOrangeP5.textContent = orangeP5;

  if (yellowP5 < 5) {
    addOrangeP5.classList.remove("hidden");
    minusOrangeP5.textContent = "-";
  }
});

addPinkP5.addEventListener("click", function () {
  pinkP5++;
  scorePinkP5.textContent = pinkP5;

  if (pinkP5 === 5) {
    addPinkP5.classList.add("hidden");
    scorePinkP5.textContent = "";
    minusPinkP5.textContent = "";
  }
});

minusPinkP5.addEventListener("click", function () {
  pinkP5--;
  scorePinkP5.textContent = pinkP5;

  if (pinkP5 < 5) {
    addPinkP5.classList.remove("hidden");
    minusPinkP5.textContent = "-";
  }
});

//PLAYER 6
addYellowP6.addEventListener("click", function () {
  yellowP6++;
  scoreYellowP6.textContent = yellowP6;

  if (yellowP6 === 5) {
    addYellowP6.classList.add("hidden");
    scoreYellowP6.textContent = "";
    minusYellowP6.textContent = "";
  }
});

minusYellowP6.addEventListener("click", function () {
  yellowP6--;
  scoreYellowP6.textContent = yellowP6;

  if (yellowP6 < 5) {
    addYellowP6.classList.remove("hidden");
    minusYellowP6.textContent = "-";
  }
});

addBrownP6.addEventListener("click", function () {
  brownP6++;
  scoreBrownP6.textContent = brownP6;

  if (brownP6 === 5) {
    addBrownP6.classList.add("hidden");
    scoreBrownP6.textContent = "";
    minusBrownP6.textContent = "";
  }
});

minusBrownP6.addEventListener("click", function () {
  brownP6--;
  scoreBrownP6.textContent = brownP6;

  if (brownP6 < 5) {
    addBrownP6.classList.remove("hidden");
    minusBrownP6.textContent = "-";
  }
});

addGreenP6.addEventListener("click", function () {
  greenP6++;
  scoreGreenP6.textContent = greenP6;

  if (greenP6 === 5) {
    addGreenP6.classList.add("hidden");
    scoreGreenP6.textContent = "";
    minusGreenP6.textContent = "";
  }
});

minusGreenP6.addEventListener("click", function () {
  greenP6--;
  scoreGreenP6.textContent = greenP6;

  if (greenP6 < 5) {
    addGreenP6.classList.remove("hidden");
    minusGreenP6.textContent = "-";
  }
});

addBlueP6.addEventListener("click", function () {
  blueP6++;
  scoreBlueP6.textContent = blueP6;

  if (blueP6 === 5) {
    addBlueP6.classList.add("hidden");
    scoreBlueP6.textContent = "";
    minusBlueP6.textContent = "";
  }
});

minusBlueP6.addEventListener("click", function () {
  blueP6--;
  scoreBlueP6.textContent = blueP6;

  if (blueP6 < 5) {
    addBlueP6.classList.remove("hidden");
    minusBlueP6.textContent = "-";
  }
});

addOrangeP6.addEventListener("click", function () {
  orangeP6++;
  scoreOrangeP6.textContent = orangeP6;

  if (orangeP6 === 5) {
    addOrangeP6.classList.add("hidden");
    scoreOrangeP6.textContent = "";
    minusOrangeP6.textContent = "";
  }
});

minusOrangeP6.addEventListener("click", function () {
  orangeP6--;
  scoreOrangeP6.textContent = orangeP6;

  if (yellowP6 < 5) {
    addOrangeP6.classList.remove("hidden");
    minusOrangeP6.textContent = "-";
  }
});

addPinkP6.addEventListener("click", function () {
  pinkP6++;
  scorePinkP6.textContent = pinkP6;

  if (pinkP6 === 5) {
    addPinkP6.classList.add("hidden");
    scorePinkP6.textContent = "";
    minusPinkP6.textContent = "";
  }
});

minusPinkP6.addEventListener("click", function () {
  pinkP6--;
  scorePinkP6.textContent = pinkP6;

  if (pinkP6 < 5) {
    addPinkP6.classList.remove("hidden");
    minusPinkP6.textContent = "-";
  }
});
