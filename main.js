const counterElement = document.getElementById("counter");
const startElement = document.getElementById("start");
const pauseElement = document.getElementById("pause");
const resetElement = document.getElementById("reset");

let counter = 0;
let timerId;

// startElement.addEventListener("click", function () {
//   timerId = setInterval(() => {
//     counter++;
//     counterElement.innerText = counter;
//   }, 1000);
// });

// pauseElement.addEventListener("click", () => clearInterval(timerId));
// resetElement.addEventListener("click", () => {
//   counter = 0;
//   counterElement.innerText = counter;
//   clearInterval(timerId);
// });

startElement.onclick = function () {
  timerId = setInterval(() => {
    counter++;
    counterElement.innerText = counter;
  }, 1000);
};

pauseElement.onclick = () => clearInterval(timerId);
resetElement.onclick = () => {
  counter = 0;
  counterElement.innerText = counter;
  clearInterval(timerId);
};
