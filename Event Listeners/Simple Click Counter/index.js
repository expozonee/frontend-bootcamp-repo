const button = document.querySelector("#clickButton");
const counter = document.querySelector("#counter");

button.addEventListener("click", () => {
  let currentCount = parseInt(counter.textContent);
  currentCount += 1;
  counter.innerHTML = currentCount;
});
