// Pure Functions

// 1. Determine the Average Rating of Trips
// Input: [8.5, 7.9, 6.3, 9.2, 8.1]

function Average(ratings) {
  return (
    ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
  ).toFixed(1);
}
console.log("Average Rating of Trips ==> ", Average([8.5, 7.9, 6.3, 9.2, 8.1]));

// 2. Extract Organizer Names from Trip Names
// Input Example: ['Europe Exploration (2020) - Organized by Wanderlust Travel', 'Asian Adventure (2019) - Organized by Globe Trotters', 'Caribbean Cruise (2022) - Organized by Cruise Experts']
function extractOrganizer(trips) {
  return trips.map((trip) => {
    return trip.split(" - ")[1].split("Organized by ")[1];
  });
}

console.log(
  "Organizer Names from Trip Names ==> ",
  extractOrganizer([
    "Europe Exploration (2020) - Organized by Wanderlust Travel",
    "Asian Adventure (2019) - Organized by Globe Trotters",
    "Caribbean Cruise (2022) - Organized by Cruise Experts",
  ])
);

// 3. Check if a Trip Title Contains a Specific Word
// Input: ('European Adventure', 'Europe')

function checkWord(title, word) {
  return title.includes(word);
}

console.log(
  "Trip Title Contains a Specific Word ==> ",
  checkWord("European Adventure", "Europe")
);

// 4. Check if All Trip Titles Start with the Same Letter
// Input: ['Paris Getaway', 'Prairie Expedition', 'Portugal Experience']

function checkFirstLetter(titles) {
  return titles.every((title) => title[0] === titles[0][0]);
}

console.log(
  "All Trip Titles Start with the Same Letter ==> ",
  checkFirstLetter([
    "Paris Getaway",
    "Prairie Expedition",
    "Portugal Experience",
  ])
);

// 5. Concatenate All Trip Types into a Single String
// Input: ['City', 'Beach', 'Mountain', 'Cruise']

const arr = ["City", "Beach", "Mountain", "Cruise"];

function concatenateStrings(arr) {
  return arr.join(", ");
}

console.log(
  "Concatenate All Trip Types into a Single String ==> ",
  concatenateStrings(arr)
);

// 6. Check if Any Trip Title is Longer Than 15 Characters
// Input: ['European Adventure', 'Exploring Asia', 'African Safari']

const titles = ["European Adventure", "Exploring Asia", "African Safari"];
function anyTitleLongerThanFifteenChars(titles) {
  return titles.some((title) => title.length > 15);
}

console.log(
  "Any Trip Title is Longer Than 15 Characters ==> ",
  anyTitleLongerThanFifteenChars(titles)
);

// 7. Find Trips Organized by a Specific Organizer
// Input Example: ['European Adventure', 'Asian Expedition', 'Caribbean Cruise'], ['Wanderlust Travel', 'Globe Trotters', 'Cruise Experts'], 'Wanderlust Travel'

const trips = ["European Adventure", "Asian Expedition", "Caribbean Cruise"];
const organizers = ["Wanderlust Travel", "Globe Trotters", "Cruise Experts"];

function findTripByOrganizer(trips, organizers, organizer) {
  return trips.filter((_, index) => {
    return organizers[index] === organizer;
  });
}

console.log(
  "Trips Organized by a Specific Organizer ==> ",
  findTripByOrganizer(trips, organizers, "Wanderlust Travel")
);

// 8. Capitalize the First Letter of Each Trip Title
// Input: ['european adventure', 'asian expedition', 'caribbean cruise']

const tripTitles = [
  "european adventure",
  "asian expedition",
  "caribbean cruise",
];
function capitalizeFirstLetter(titles) {
  return titles.map((title) => title[0].toUpperCase() + title.slice(1));
}
console.log(
  "Capitalize the First Letter of Each Trip Title ==> ",
  capitalizeFirstLetter(tripTitles)
);

// Bonus Exercises

// 1. Sort Destination Ratings
// Input: [4, 2, 5, 3, 1]

function sortDestinationRatings(ratings) {
  return ratings.sort((a, b) => a - b);
}

console.log(
  "Sort Destination Ratings ==> ",
  sortDestinationRatings([4, 2, 5, 3, 1])
);

// 2. Average Rating of Top N Destinations
// Input: ([2, 3, 5, 4, 1], 3)

const ratings = [2, 3, 5, 4, 1];
const n = 3;

function averageRatingOfTopN(ratings, n) {
  const sortdecending = ratings.sort((a, b) => b - a);
  const topN = sortdecending.slice(0, n);
  const average = topN.reduce((acc, rating) => acc + rating, 0) / n;
  return `${average} (The top ${n} ratings are ${topN.slice(0, n - 1)} and ${
    topN[n - 1]
  })`;
}

console.log(
  `Average Rating of Top ${n} Destinations ==> `,
  averageRatingOfTopN(ratings, n)
);

// 3. Create Rating Frequency Map for Destinations
// Input: [3, 4, 3, 5, 4, 5, 5]

const ratings2 = [3, 4, 3, 5, 4, 5, 5];

function destinationRatingFrequency(ratings) {
  const freq = ratings.reduce((acc, rating) => {
    if (!acc[rating]) {
      acc[rating] = 0;
    }
    acc[rating]++;
    return acc;
  }, {});
  const freqArr = Object.entries(freq);
  return freqArr;
}

console.log(
  "Rating Frequency Map for Destinations ==> ",
  destinationRatingFrequency(ratings2)
);

// 4. Normalize Destination Ratings
// Input: ([1, 2, 3, 4, 5], 0, 100)

const ratings3 = [1, 2, 3, 4, 5];

function normalizeDestinationRatings(ratings, min, max) {
  const length = ratings.length - 1;
  const gap = (max - min) / length;
  return ratings.map((_, index) => {
    return index * gap;
  });
}

console.log(
  "Normalize Destination Ratings ==> ",
  normalizeDestinationRatings(ratings3, 0, 100)
);

// impure functions

let travelDestinations;

function intializeDestinations() {
  travelDestinations = [];
}
intializeDestinations();

function addDestination(destinationName, travelDate) {
  if (typeof destinationName === "string" && typeof travelDate === "string") {
    const destination = [destinationName, travelDate];
    travelDestinations.push(destination);
    console.log(travelDestinations);
    return travelDestinations;
  }
  console.log("Only strings are allowed");
}

// addDestination("Paris", "2024-06-15");

function findTravelDate(destinationName) {
  const destination = travelDestinations.find(
    (destination) => destination[0] === destinationName
  );
  if (destination) {
    return destination[1];
  }
  return "Destination was not found";
}

// console.log(findTravelDate("Paris"));

function updateTravelDate(destinationName, newTravelDate) {
  const destination = travelDestinations.find(
    (destination) => destination[0] === destinationName
  );
  if (destination) {
    destination[1] = newTravelDate;
    return destination;
  }
  return "Destination was not found";
}

// console.log(updateTravelDate("Paris", "2024-07-15"));

function removeDestination(destinationName) {
  const destinationIndex = travelDestinations.findIndex(
    (destination) => destination[0] === destinationName
  );
  if (destinationIndex !== -1) {
    travelDestinations.splice(destinationIndex, 1);
    return travelDestinations;
  }
  return "Destination was not found";
}

// console.log(removeDestination("Paris"));

function listDestinations() {
  travelDestinations.forEach((destination) => {
    console.log(`${destination[0]} - ${destination[1]}`);
  });
}

travelDestinations = [];
addDestination("Paris", "2024-06-15");
addDestination("London", "2024-07-15");
addDestination("Tokyo", "2024-09-15");

listDestinations();

function findNextDistination() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  const tripsDates = travelDestinations.reduce((acc, destination) => {
    const destinationYear = new Date(destination[1]).getFullYear();
    const destinationMonth = new Date(destination[1]).getMonth() + 1;
    const destinationDay = new Date(destination[1]).getDate();

    if (!acc[destinationYear]) {
      acc[destinationYear] = {};
    }
    if (!acc[destinationYear][destinationMonth]) {
      acc[destinationYear][destinationMonth] = {};
    }
    if (!acc[destinationYear][destinationMonth][destinationDay]) {
      acc[destinationYear][destinationMonth][destinationDay] = {};
    }
    acc[destinationYear][destinationMonth][destinationDay] = destination[0];
    return acc;
  }, {});

  const destinationsCurrentYear = tripsDates[currentYear];

  if (destinationsCurrentYear) {
    const destinationsCurrentMonth = destinationsCurrentYear[currentMonth];

    if (destinationsCurrentMonth) {
      const closestDestination = Object.keys(destinationsCurrentMonth).find(
        (day) => day >= currentDay
      );

      console.log(
        "Next Destination: ",
        destinationsCurrentMonth[closestDestination]
      );
    } else {
      console.log("No upcoming trips this year");
    }
  }
}

findNextDistination();
