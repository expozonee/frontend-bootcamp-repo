const chars = document.querySelectorAll(".character");
let pos = [0, 1, 2];
let clickItem;

function initPos() {
  updateCarousel();
}

initPos();

function updateCarousel() {
  chars.forEach((c, index) => {
    c.style.transform = `translateX(${
      (pos.findIndex((p) => p === index) - 1) * 250
    }px) ${pos.findIndex((p) => p === index) === 1 ? "scale(1.2)" : ""}`;
  });
}

chars.forEach((char, index) => {
  char.addEventListener("click", (e) => {
    clickItem = e.target.parentElement;
    const currentPos = pos.findIndex((p) => p === index);
    if (currentPos === 1) return;

    chars.forEach((c) => {
      if (c.id === clickItem.id) {
        c.classList.add("character-center");
      } else {
        c.classList.remove("character-center");
      }
    });

    chars.forEach((c, index) => {
      c.style.removeProperty("z-index");
      if (c.id === clickItem.id) return;
      if (currentPos > 1) {
        c.style.zIndex = pos.findIndex((p) => p === index) === 1 ? 1 : 0;
      } else {
        c.style.zIndex = pos.findIndex((p) => p === index) === 1 ? 1 : 0;
      }
    });

    if (currentPos > 1) {
      pos.push(pos.shift());
    } else {
      pos.unshift(pos.pop());
    }

    updateCarousel();
  });
});
