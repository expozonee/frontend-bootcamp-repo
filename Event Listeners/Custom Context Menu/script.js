const contextMenu = document.getElementById("contextMenu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log(e.pageX);
  console.log(e.pageY);

  contextMenu.style.display = "block";
  contextMenu.style.top = `${e.pageY}px`;
  contextMenu.style.left = `${e.pageX}px`;
});

document.addEventListener("click", () => {
  contextMenu.style.display = "none";
});

contextMenu.addEventListener("click", (e) => {
  alert(`${e.target.innerText} was Clicked!`);
});
