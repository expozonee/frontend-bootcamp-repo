const usersContainer = document.getElementById("users");
const errorMsg = document.getElementById("error");

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        errorMsg.innerHTML = `
            <h2>Failed to fetch the users!</h2>
            `;
        return;
      }

      res
        .json()
        .then((users) => {
          users.forEach((user) => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user");
            userDiv.innerHTML = `<h2>${user.name}</h2><p><strong>Email:
                                </strong>${user.email}</p>`;
            usersContainer.appendChild(userDiv);
          });
        })
        .catch((e) => {
          errorMsg.innerHTML = `An error occurred: ${e.message}. Please try again later.`;
          console.error(
            `An error occurred: ${e.message}. Please try again later.`
          );
        });
    })
    .catch((e) => {
      errorMsg.innerHTML = `An error occurred: ${e.message}. Please try again later.`;
      console.error(`An error occurred: ${e.message}. Please try again later.`);
    });
}

fetchUsers();
