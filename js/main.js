const generateButton = document.getElementById("generateButton");

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
