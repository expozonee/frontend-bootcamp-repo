// 1. Calculate Total Travel Time
const destinations1 = [
  { name: "Paris", distance: 500, speed: 50 },
  { name: "London", distance: 200, speed: 70 },
  {
    name: "New York",
    distance: 3000,
    speed: 500,
  },
];

const totalTravelTime = destinations1.reduce((total, destination) => {
  return total + destination.distance / destination.speed;
}, 0);
console.log(totalTravelTime);

let total1 = 0;
for (let i = 0; i < destinations1.length; i++) {
  total1 += destinations1[i].distance / destinations1[i].speed;
}
console.log(total1);

let total2 = 0;
destinations1.forEach((destination) => {
  total2 += destination.distance / destination.speed;
});
console.log(total2);

// 2. Find Longest Travel Route
const destinations2 = [
  {
    name: "Paris",
    routes: [
      { name: "Route 1", distance: 300 },
      { name: "Route 2", distance: 250 },
    ],
  },
  {
    name: "London",
    routes: [
      { name: "Route 1", distance: 200 },
      { name: "Route 2", distance: 280 },
    ],
  },
];

// use nested loops
let longestRoute = [];
let longestRouteDistance = 0;
for (let i = 0; i < destinations2.length; i++) {
  for (let j = 0; j < destinations2[i].routes.length; j++) {
    if (destinations2[i].routes[j].distance > longestRouteDistance) {
      longestRoute = destinations2[i].routes[j];
      longestRouteDistance = destinations2[i].routes[j].distance;
    }
  }
}

console.log(longestRoute);

// 3. Sort Destinations by Distance
const destinations3 = [
  {
    name: "Paris",
    routes: [{ distance: 300 }, { distance: 250 }],
  },
  {
    name: "London",
    routes: [{ distance: 200 }, { distance: 280 }],
  },
];

const sortedDestinations = destinations3.sort((a, b) => {
  const totalDistanceA = a.routes.reduce((total, route) => {
    return total + route.distance;
  }, 0);
  const totalDistanceB = b.routes.reduce((total, route) => {
    return total + route.distance;
  }, 0);
  return totalDistanceA - totalDistanceB;
});
console.log(sortedDestinations);

// 4. Travel Itinerary
const destinations4 = [
  { name: "Paris", connections: ["London"] },
  { name: "London", connections: ["New York"] },
  { name: "New York", connections: [] },
];
const start4 = "Paris";
let itinerary = [start4];
let currentDestination = start4;

while (true) {
  const nextDestination = destinations4.find(
    (destination) => destination.name === currentDestination
  ).connections[0];
  if (nextDestination) {
    itinerary.push(nextDestination);
    currentDestination = nextDestination;
  } else {
    break;
  }
}
console.log(itinerary);

// 5. Least Number of Connections
const destinations5 = [
  {
    name: "Paris",
    connections: ["London", "New York"],
  },
  { name: "London", connections: ["New York"] },
  { name: "New York", connections: [] },
];

function leastConnections(destinations) {
  let leastConnections = destinations[0].connections.length;
  let destinationWithLeastConnections = destinations[0].name;
  for (let i = 1; i < destinations.length; i++) {
    if (destinations[i].connections.length < leastConnections) {
      leastConnections = destinations[i].connections.length;
      destinationWithLeastConnections = destinations[i].name;
    }
  }
  return destinationWithLeastConnections;
}
console.log(leastConnections(destinations5));
