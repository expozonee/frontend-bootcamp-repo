const showModalBtn = document.getElementById("showModalBtn");
const modal = document.getElementById("overlay");

showModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

modal.addEventListener("click", (e) => {
  if (e.target.id === "overlay" || e.target.id === "closeBtn") {
    modal.style.display = "none";
  }
});
