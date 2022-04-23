const dice = document.querySelector("#dice");
const button = document.querySelector(".roll");
const scoreP1 = document.querySelector("#score--p1");
const buttonP1 = document.querySelector("#add--p1");
const scoreP2 = document.querySelector("#score--p2");
const buttonP2 = document.querySelector("#add--p2");
const scoreP3 = document.querySelector("#score--p3");
const buttonP3 = document.querySelector("#add--p3");
const scoreP4 = document.querySelector("#score--p4");
const buttonP4 = document.querySelector("#add--p4");
const scoreP5 = document.querySelector("#score--p5");
const buttonP5 = document.querySelector("#add--p5");
const scoreP6 = document.querySelector("#score--p6");
const buttonP6 = document.querySelector("#add--p6");

const colors = ["yellow", "pink", "orange", "blue", "brown", "green"];
const chooseRandom = () => Math.trunc(Math.random() * 6);
const animations = ["animate", "animate2"];
let active = 0;

/* Players */
const scores = [0, 0, 0, 0, 0, 0];

buttonP1.addEventListener("click", function () {
  scores[0]++;
  scoreP1.textContent = scores[0];
});

buttonP2.addEventListener("click", function () {
  scores[1]++;
  scoreP2.textContent = scores[1];
});

buttonP3.addEventListener("click", function () {
  scores[2]++;
  scoreP3.textContent = scores[2];
});

buttonP4.addEventListener("click", function () {
  scores[3]++;
  scoreP4.textContent = scores[3];
});

buttonP5.addEventListener("click", function () {
  scores[4]++;
  scoreP5.textContent = scores[4];
});

buttonP6.addEventListener("click", function () {
  scores[5]++;
  scoreP6.textContent = scores[5];
});

button.addEventListener("click", function () {
  dice.className = `${animations[active]} ${colors[chooseRandom()]}`;
  active = active == 0 ? 1 : 0;
});
