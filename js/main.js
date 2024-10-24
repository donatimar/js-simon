const generateButton = document.getElementById("generateButton");
const timerDisplay = document.getElementById("timer");
const numberList = document.getElementById("randomNumbers");
const inputContainer = document.getElementById("inputContainer");
const inputsDiv = document.getElementById("inputs");
const submitButton = document.getElementById("submitButton");
let timer;
let timeLeft = 30;
let randomNumbers = [];

generateButton.addEventListener("click", function () {
  // Genera numeri casuali
  randomNumbers = [];

  while (randomNumbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * 99) + 1;

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  numberList.innerHTML = "";

  randomNumbers.forEach((num) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = num;
    numberList.appendChild(listItem);
  });

  // Avvia il timer quando i numeri vengono generati
  timeLeft = 30;
  timerDisplay.textContent = `Tempo rimanente: ${timeLeft} secondi`;
  startTimer();
});

// Funzione per avviare il timer
function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = `Tempo rimanente: ${timeLeft} secondi`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      generateButton.disabled = true;
      timerDisplay.textContent = "Tempo scaduto!";
      numberList.style.display = "none";
      showInputFields();
    }
  }, 1000);
}

// Funzione per mostrare gli input
function showInputFields() {
  inputContainer.style.display = "block";

  // Crea gli input per i numeri
  for (let i = 0; i < 5; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.className = "form-control form-control-sm mb-2 mx-1";
    input.placeholder = "Numero " + (i + 1);
    inputsDiv.appendChild(input);
  }
}

// Funzione per gestire l'invio degli input
submitButton.addEventListener("click", function () {
  const userNumbers = Array.from(inputsDiv.querySelectorAll("input"))
    .map((input) => Number(input.value))
    .filter((num) => !isNaN(num));

  // Confronta i numeri indovinati
  const correctGuesses = userNumbers.filter((num) =>
    randomNumbers.includes(num)
  );
  alert(`Hai indovinato ${correctGuesses.length} numeri`);
});
