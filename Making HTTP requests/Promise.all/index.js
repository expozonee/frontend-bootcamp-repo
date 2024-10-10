const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";
const usersContainer = document.getElementById("users");
const postsContainer = document.getElementById("posts");
const errorContainer = document.getElementById("error");
const loaderText = document.createElement("p");
loaderText.innerHTML = "Loading...";

const loaders = {};

[usersContainer, postsContainer].forEach((container, index) => {
  const loader = loaderText.cloneNode(true);
  container.appendChild(loader);
  loaders[index] = loader;
});

const usersPromise = fetch(usersURL)
  .then((res) => {
    return res.json();
  })
  .catch((e) => {
    errorContainer.innerHTML = `
    <p>Error in fetching the users data</p>
    `;
  });

const postsPromise = fetch(postsURL)
  .then((res) => {
    return res.json();
  })
  .catch((e) => {
    errorContainer.innerHTML = `
    <p>Error in fetching the posts data</p>
    `;
  });

Promise.all([usersPromise, postsPromise])
  .then(([users, posts]) => {
    [usersContainer, postsContainer].forEach((container, index) => {
      container.removeChild(loaders[index]);
    });

    users.forEach((user) => {
      const userDiv = createDiv("user", user);
      usersContainer.appendChild(userDiv);
    });

    posts.forEach((post) => {
      const postDiv = createDiv("post", post);
      postsContainer.appendChild(postDiv);
    });
  })
  .catch((e) => {
    errorContainer.innerHTML = `
    <p>Error in fetching the data</p>
    `;
  });

function createDiv(type, data) {
  const div = document.createElement("div");
  div.classList.add("item");
  if (type === "user") {
    div.innerHTML = `<strong>${data.name}</strong><br>${data.email}`;
    return div;
  } else {
    div.innerHTML = `<strong>${data.title}</strong><br>${data.body}`;
    return div;
  }
}
