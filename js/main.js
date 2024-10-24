const generateButton = document.getElementById("generateButton");
const timerDisplay = document.getElementById("timer");
let timer;
let timeLeft = 5;

generateButton.addEventListener("click", function () {
  const randomNumbers = [];

  while (randomNumbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * 99) + 1;

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  const numberList = document.getElementById("randomNumbers");
  numberList.innerHTML = "";

  randomNumbers.forEach((num) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = num;
    numberList.appendChild(listItem);
  });
});

function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = `Tempo rimanente: ${timeLeft} secondi`;
  }, 1000);
}

startTimer();
