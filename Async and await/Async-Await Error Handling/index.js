const BASE_URL = "https://jsonplaceholder.typicode.com";
const usersContainer = document.getElementById("users");
const errorElement = document.getElementById("error");

const fetchUsers = async () => {
  try {
    const usersResponse = await fetch(`${BASE_URL}/user`);
    // const usersResponse = await fetch(`${BASE_URL}/users`);  this is the correct one
    if (!usersResponse.ok) {
      throw new Error("Network response was not ok.");
    }

    try {
      const users = await usersResponse.json();
      users.forEach((user) => {
        const userContainer = document.createElement("div");
        userContainer.classList.add("user");
        userContainer.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        `;
        usersContainer.appendChild(userContainer);
      });
    } catch (error) {
      errorElement.innerText = error;
    }
  } catch (error) {
    errorElement.innerText = error;
  }
};

fetchUsers();
