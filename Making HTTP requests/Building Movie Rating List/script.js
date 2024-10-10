const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.API_KEY;

class Movie {
  #title;
  #releaseDate;
  #picture;
  #rating;
  constructor(title, releaseDate, picture, rating) {
    this.#title = title;
    this.#releaseDate = releaseDate;
    this.#picture = picture;
    this.#rating = rating;
  }

  getTitle() {
    return this.#title;
  }

  getReleaseDate() {
    return this.#releaseDate;
  }

  getPicture() {
    return getImage(this.#picture);
  }

  getRating() {
    return this.#rating.toFixed(1);
  }
}

const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getImage = (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`;

const fetchMovies = () => {
  const response = fetch(
    `${API_BASE_URL}movie/popular?language=en-US&page=1`,
    getHttpOptions()
  ).then((res) => res.json());

  response
    .then((moviesData) => {
      moviesData.results.forEach((res) => {
        const movie = new Movie(
          res.title,
          res.release_date,
          res.poster_path,
          res.vote_average
        );

        createMovieCard(movie);
        updateItemCount();
      });
    })
    .catch((err) => console.error(err));
};

fetchMovies();

const updateItemCount = () => {
  const countP = document.querySelector(".sort-bar > p");
  const numberOfMovies = document.querySelectorAll(".movie").length;
  countP.textContent = `${numberOfMovies} ${
    numberOfMovies > 1 ? "items" : "item"
  }`;
};

const createMovieCard = (movie) => {
  let target = document.querySelector(".movies-list");

  target.innerHTML =
    target.innerHTML +
    `
    <div class="movie">
    <img class="vector-img" src="./images/Vector.svg">
    <a href="#">
    <img class="poster-img" src="./images/tabler-icon-plus.svg">
    </a>
    <img class="poster" src="${movie.getPicture()}">
    <div class="flex-container movie-info">
      <a href="#" class="title normal-link">${movie.getTitle()}</a>
      <p class="release-date"><strong>Release Date:</strong> ${movie.getReleaseDate()}</p>
      <div class="flex-container rate-trailer">
        <div class="flex-container trailer">
          <img src="./images/play.svg">
          <a href="#">Trailer</a>
        </div>
        <div class="flex-container rating">
          <img src="./images/star.svg">
          <p>${movie.getRating()}</p>
        </div>
      </div>
    </div>
  </div>
      `;
};
