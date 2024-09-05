if (movieRating >= 7) {
  console.log("This movie is worth watching.");
} else {
  console.log("This movie is not worth watching.");
}

if (movieBudget >= 1000000 && movieBudget <= 100000000) {
  console.log("Big-budget movie.");
} else {
  console.log("Indie movie.");
}

if (movieGenre === "Horror" && audienceAge >= 18) {
  console.log("Suitable for the audience.");
} else if (movieGenre === "Horror" && audienceAge < 18) {
  console.log("Not suitable for the audience.");
} else {
  console.log("Suitable for all audience.");
}

if (firstMovieDuration === secondMovieDuration) {
  console.log("Movies have the same duration.");
} else if (firstMovieDuration > secondMovieDuration) {
  console.log("The first movie is longer.");
} else {
  console.log("The second movie is longer.");
}

if (viewerAge >= 13 && viewerAge <= 18) {
  console.log("Suitable for teens");
} else if (viewerAge > 18) {
  console.log("Suitable for adults");
} else {
  console.log("Suitable for kids");
}

popularityScore
  ? console.log("Popular movie.")
  : console.log("Less known movie.");

numOfAwards % 2 === 0
  ? console.log("Even number of awards.")
  : console.log("Odd number of awards.");

actorAge <= 14
  ? console.log("Child actor.")
  : actorAge > 14 && actorAge <= 24
  ? console.log("Young actor.")
  : console.log("Adult actor.");

hasInvitation
  ? console.log("Welcome to the premiere")
  : console.log("Please check your invitation");

if (screeningDuration < 40) {
  console.log("Short film");
} else if (screeningDuration >= 40 && screeningDuration <= 120) {
  console.log("Feature film");
} else {
  console.log("Epic length movie");
}

if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
  console.log("Special screening event !");
} else {
  console.log("Regular movie showtimes");
}

if (releaseYear >= 2001 && releaseYear <= 2100) {
  console.log("21st century movie");
} else {
  console.log("20th century movie");
}
// Example input: releaseYear = 2005 // Output: 21st century movie
// Example input: releaseYear = 1995 // Output: 20th century movie

if (movieGenre === "Action" && movieRating >= 7) {
  console.log("Must Watch");
} else {
  console.log("Check reviews before watching");
}
// Example inputs: movieGenre = "Action", movieRating = 8 // Output: Must Watch

if (ticketPrice <= 10) {
  console.log("Discounted ticket");
} else {
  console.log("Regular ticket price");
}
// Example input: ticketPrice = 12 // Output: Regular ticket price

if (age > 18 || !isAdult) {
  console.log("Allowed to watch");
} else {
  console.log("Age-restricted content");
}
// Example inputs: age = 22, isAdult = true // Output: Allowed to watch

if (movieTitle.includes("2") || movieTitle.includes("part")) {
  console.log("This movie is a sequel");
} else {
  console.log("This movie is not a sequel");
}
//Example input:  movieTitle = Spider-Man 2  // Output: This movie is a sequel
