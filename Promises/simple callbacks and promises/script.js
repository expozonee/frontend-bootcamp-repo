const heading = document.getElementById("heading");
const btn = document.getElementById("button");

function change(bgcolor, color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      heading.style.color = color;
      heading.style.backgroundColor = bgcolor;
      resolve();
    }, 5000);
  });
}

btn.addEventListener("click", () => {
  heading.style.removeProperty("background-color");
  heading.style.removeProperty("color");

  change("red", "white")
    .then(() => {
      return change("green", "white");
    })
    .then(() => {
      return change("white", "black");
    })
    .then(() => {
      return change("blue", "white");
    })
    .then(() => {
      return change("purple", "white");
    })
    .then(() => {
      return change("yellow", "black");
    });
});
