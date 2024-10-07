const texts = document.querySelectorAll(".text");

function handleElementAppearnce(element) {
  const spaceFromTop = element.getBoundingClientRect().top;
  const vh = window.innerHeight;
  if (spaceFromTop >= vh || spaceFromTop <= 100) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  texts.forEach((text) => {
    handleElementAppearnce(text);
  });
});

window.addEventListener("scroll", () => {
  texts.forEach((text) => {
    handleElementAppearnce(text);
  });
});
