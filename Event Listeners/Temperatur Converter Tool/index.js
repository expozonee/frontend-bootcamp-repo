const temp = document.querySelector("#temperature");
const celc = document.querySelector("#toCelsius");
const fah = document.querySelector("#toFahrenheit");
const output = document.querySelector("#output");

function calculateTemp(num, type) {
  return function () {
    if (type === "c") {
      const answer = ((num - 32) * 5) / 9;
      return [num, answer.toFixed(answer % 1 === 0 ? 0 : 2)];
    } else {
      let answer = num * (9 / 5) + 32;
      return [num, answer.toFixed(answer % 1 === 0 ? 0 : 2)];
    }
  };
}

celc.addEventListener("click", () => {
  output.innerHTML = "";
  const deg = temp.value;
  const tempC = calculateTemp(deg, "c");

  const originalT = document.createElement("h2");
  const convertedT = document.createElement("h2");

  originalT.textContent = `Original temperature is: ${tempC()[0]}F`;
  convertedT.textContent = `Converted temperature is: ${tempC()[1]}C`;
  output.appendChild(originalT);
  output.appendChild(convertedT);
});

fah.addEventListener("click", () => {
  output.innerHTML = "";

  const deg = temp.value;
  const tempC = calculateTemp(deg);

  const originalT = document.createElement("h2");
  const convertedT = document.createElement("h2");

  originalT.textContent = `Original temperature is: ${tempC()[0]}C`;
  convertedT.textContent = `Converted temperature is: ${tempC()[1]}F`;
  output.appendChild(originalT);
  output.appendChild(convertedT);
});
