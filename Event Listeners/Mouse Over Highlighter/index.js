const p = document.querySelectorAll("p");

p.forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    e.target.classList.add("highlighted");
  });
});

p.forEach((element) => {
  element.addEventListener("mouseleave", (e) => {
    e.target.classList.remove("highlighted");
  });
});
