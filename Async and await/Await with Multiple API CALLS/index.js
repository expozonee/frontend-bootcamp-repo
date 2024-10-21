const BASE_URL = "https://jsonplaceholder.typicode.com";
const usersContainer = document.getElementById("users");

async function fetchUsers() {
  const usersResponse = await fetch(`${BASE_URL}/users`);
  const users = await usersResponse.json();

  return users;
}

async function fetchPosts(id) {
  if (typeof id !== "number" || id < 0) {
    throw new Error("Id must be a valid number");
  }

  const postsResponse = await fetch(`${BASE_URL}/posts`);
  const posts = await postsResponse.json();
  const userPosts = posts.filter((post) => post.userId === id);

  return userPosts;
}

async function displayUserAndPosts() {
  try {
    const users = await fetchUsers();

    users.forEach(async (user) => {
      const userContainerTemplate = document.getElementById("user-container");
      const userContainer = userContainerTemplate.content.cloneNode(true);
      const userNameElement = userContainer.querySelector(".user-name");
      const userEmailElement = userContainer.querySelector(".user-email");
      const postsContainer = userContainer.querySelector(".posts");
      userNameElement.innerText = `Name: ${user.name}`;
      userEmailElement.innerText = `Email: ${user.email}`;
      try {
        const userPosts = await fetchPosts(user.id);

        userPosts.forEach((post) => {
          const postContainer = document.createElement("div");
          postContainer.classList.add("post");
          const postTitle = document.createElement("h4");
          const postBody = document.createElement("p");
          postTitle.innerHTML = `<strong>Title:</strong> ${post.title}`;
          postBody.innerHTML = `<strong>Description:</strong>\n ${post.body}`;
          postContainer.appendChild(postTitle);
          postContainer.appendChild(postBody);
          postsContainer.appendChild(postContainer);
        });
        usersContainer.appendChild(userContainer);
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

displayUserAndPosts();
