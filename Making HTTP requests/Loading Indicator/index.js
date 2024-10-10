const loader = document.getElementById("loading-indicator");
const usersContainer = document.getElementById("users");
const usersURL = "https://jsonplaceholder.typicode.com/users";

loader.style.display = "block";
usersContainer.style.display = "none";

const response = fetch(usersURL).then((res) => {
  return res.json();
});

response.then((users) => {
  loader.style.removeProperty("display");
  usersContainer.style.display = "block";

  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("item");
    userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
    usersContainer.appendChild(userDiv);
  });
});
