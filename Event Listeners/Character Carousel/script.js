const chars = document.querySelectorAll(".character");
let pos = [0, 1, 2];
let charData = [];
changePos();

function updatePos() {
  //   debugger;
  charData = [];
  chars.forEach((char, index) => {
    charData.push({
      char,
      pos: pos[index],
    });
  });
  changePos();
}

updatePos();

function updateCarousel() {
  updatePos();

  pos = pos.forEach((p, i) => {
    if (i === pos.length - 1) {
      pos[0] = p;
    } else {
      pos[i + 1] = p;
    }
  });
}

chars.forEach((char) => {
  char.addEventListener("click", () => {
    // debugger;
    updateCarousel();
    changePos();
  });
});

function changePos() {
  charData.forEach((c) => {
    const currentTransform = c.char.style.transform;
    console.log(currentTransform);

    const newTransform = `translateX(${(c.pos - 1) * 180}px)`;
    c.char.style.transform = currentTransform
      ? `${currentTransform} ${newTransform}`
      : newTransform;
  });
}
