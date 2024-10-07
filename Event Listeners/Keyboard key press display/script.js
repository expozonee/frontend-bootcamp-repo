const keyDisplay = document.querySelector("#keyDisplay");

document.addEventListener("keypress", (e) => {
  console.log(e);
  keyDisplay.innerHTML = e.code === "Space" ? e.code : `${e.key}`;
});
