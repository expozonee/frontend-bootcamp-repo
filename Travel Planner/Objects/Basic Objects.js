//  1

const destination = {
  name: "Tokyo",
  country: "Japan",
  yearVisited: 2019,
  activities: ["sightseeing", "shopping", "eating"],
  ratings: [9, 8.5, 9.5],
  getAverageRating: function () {
    return this.ratings.reduce((a, r) => a + r) / this.ratings.length;
  },
};

console.log(destination.getAverageRating()); // 9

// 2

destination.landmarks = [
  { name: "Tokyo Tower", decription: "Landmark" },
  { name: "Shibuya Crossing", decsription: "Busiest Crossing" },
];
console.log(destination.activities[1]); // shopping
console.log(destination["activities"][1]); // shopping

console.log(destination.landmarks[0].name); // Tokyo Tower
console.log(destination["landmarks"][0]["name"]); // Tokyo Tower

// 3

destination.yearVisited = 2020;
console.log(destination.yearVisited); // 2020
destination.ratings.push(9.5);
console.log(destination.ratings); // [9, 8.5, 9.5, 9.5]
console.log(destination.getAverageRating()); // 9.125
delete destination.country;
console.log(destination); // {name: "Tokyo", yearVisited: 2020, activities: Array(3), ratings: Array(4), getAverageRating: ƒ}
destination.landmarks[0].description = "Iconic Landmark";
console.log(destination.landmarks[0].description); // Iconic Landmark
destination["landmarks"][1]["description"] = "Busiest Intersection";
console.log(destination.landmarks[1].description); // Busiest Intersection
console.log(Object.hasOwn(destination, "ratings")); // true

// 4
const destinations = [
  {
    name: "Eiffel Tower",
    details: { visitorsPerYear: 7000000, entryFee: "25 USD" },
  },
  {
    name: "Great Wall of China",
    details: { visitorsPerYear: 10000000, entryFee: "60 CNY" },
  },
];

console.log(destinations[0].details.visitorsPerYear); // 7000000

function averageVisitorsOfAllDestinations(arr) {
  return arr.reduce((a, d) => a + d.details.visitorsPerYear, 0) / arr.length;
}
console.log(averageVisitorsOfAllDestinations(destinations)); // 8500000

// 5

const mergedDestinations = {
  ...destinations[0],
  ...destinations[1],
};
console.log(mergedDestinations); // {name: "Great Wall of China", details: {…}}

Object.freeze(destinations[0]);
destinations[0].name = "Colosseum";
console.log(destinations[0].name); // Eiffel Tower
Object.seal(destinations[1]);
destinations[1].name = "Machu Picchu";
console.log(destinations[1].name); // Machu Picchu

Object.isFrozen(destinations[0]) && console.log("Frozen"); // Frozen
Object.isSealed(destinations[1]) && console.log("Sealed"); // Sealed

// 6
const destinationDetails = {
  name: "Machu Picchu",
  country: "Peru",
  yearVisited: 2019,
  ratings: [9, 8.5, 9, 9.5],
};

function printDestinationKeysAndValues(obj) {
  return [{ proprties: Object.keys(obj), values: Object.values(obj) }];
}

console.log(printDestinationKeysAndValues(destinationDetails));

// 7
const destinationRatings = {
  "Machu Picchu": 9,
  "Great Wall of China": 8.5,
  "Eiffel Tower": 7.5,
  Colosseum: 6.5,
};

// 8
const destinations2 = {
  1: { name: "Machu Picchu", yearVisited: 2019, rating: 9 },
  2: { name: "Stonehenge", yearVisited: 2010, rating: 8.5 },
  3: { name: "Great Wall of China", yearVisited: 2018, rating: 8.6 },
};

// 9
const activityRatings = {
  hiking: [9, 8, 10, 7, 8.5],
  sightseeing: [8.5, 8, 9, 9.5, 7.5],
  snorkeling: [7, 7.5, 8, 8.5, 9],
};

// 10
const destinationAwards = {
  "Machu Picchu": "Most Visited",
  "Great Wall of China": "Most Visited",
  "Eiffel Tower": "Most Photographed",
  Colosseum: "Most Iconic",
};
