const counterElement = document.getElementById("counter");
const startElement = document.getElementById("start");
const pauseElement = document.getElementById("pause");
const resetElement = document.getElementById("reset");

let counter = 0;
let timerId;
let isStartClicked = false;

  // startElement.addEventListener('click', () => {
  //   if (isStartClicked === false) {
  //     timerId = setInterval(() => {
  //       counter++;
  //       counterElement.innerText = counter;
  //     }, 1000);

  //     isStartClicked = true;
  //   }
  // });

  // pauseElement.addEventListener('click', () => {
  //   isStartClicked = false;
  //   clearInterval(timerId);
  // });

  // resetElement.addEventListener('click', () => {
  //   isStartClicked = false;
  //   counter = 0;
  //   counterElement.innerText = counter;
  //   clearInterval(timerId);
  // });

  startElement.onclick = () => {
    if (isStartClicked === false) {
      timerId = setInterval(() => {
        counter++;
        counterElement.innerText = counter;
      }, 1000);

      isStartClicked = true;
    }
  };

  pauseElement.onclick = () => {
    isStartClicked = false;
    clearInterval(timerId);
  };

  resetElement.onclick = () => {
    isStartClicked = false;
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerId);
  };
