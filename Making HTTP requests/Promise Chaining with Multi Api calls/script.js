const usersContainer = document.getElementById("users");

function getPostsByUserId(id, userDiv) {
  const postsContainer = userDiv.querySelector(".posts");
  postsContainer.innerHTML = "Loading...";
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((res) => {
      res.json().then((posts) => {
        postsContainer.innerHTML = "";
        posts.forEach((post) => {
          const postDiv = document.createElement("div");
          postDiv.classList.add("post");
          postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
          postsContainer.appendChild(postDiv);
        });
      });
    })
    .catch(() => {
      postsContainer.innerHTML = "Error loading posts";
    });
}

function fetchUsers() {
  usersContainer.innerHTML = "Loading...";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      res.json().then((users) => {
        usersContainer.innerHTML = "";

        users.forEach((user) => {
          const userDiv = document.createElement("div");
          userDiv.classList.add("user");
          userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <div class="posts"></div>
          `;
          usersContainer.appendChild(userDiv);

          getPostsByUserId(user.id, userDiv);
        });
      });
    })
    .catch(() => {
      usersContainer.innerHTML = "Error loading users";
    });
}

fetchUsers();
