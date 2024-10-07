const list = document.getElementById("navList");
const message = document.getElementById("message");
let timeout;

list.addEventListener("click", (e) => {
  e.preventDefault();

  if (timeout) {
    clearTimeout(timeout);
  }

  const link = e.target.getAttribute("data-link");
  message.innerText = `${link} was clicked!`;
  message.style.display = "block";
  timeout = setTimeout(() => {
    message.style.display = "none";
  }, 2000);
});
