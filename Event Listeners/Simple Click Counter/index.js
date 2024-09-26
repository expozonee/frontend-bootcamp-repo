const button = document.querySelector("#clickButton");
const counter = document.querySelector("#counter");
const container = document.querySelector(".container");

let currentCount;

button.addEventListener("click", () => {
  currentCount = parseInt(counter.textContent) + 1;
  counter.innerHTML = currentCount;
  if (currentCount > 0) {
    container.appendChild(newButton);
  }
});

const newButton = document.createElement("button");
newButton.innerHTML = "Reset";
newButton.addEventListener("click", () => {
  currentCount = 0;
  counter.innerHTML = currentCount;
  container.removeChild(newButton);
});
