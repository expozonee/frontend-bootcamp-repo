const destinations = [
  { name: "Paris", status: "Visited", budget: 1500 },
  { name: "London", status: "Upcoming", budget: 1800 },
  { name: "Tokyo", status: "Wishlist", budget: 2000 },
  { name: "Sydney", status: "Visited", budget: 1600 },
  { name: "New York", status: "Upcoming", budget: 1700 },
];

// 1. Simple Arrow Function Conversion
function getDestinationName(destination) {
  return destination.name;
}

const getDestinationName = (destination) => destination.name;

// 2. Control Flow in Arrow Functions
function getTravelStatus(status) {
  if (status === "Visited") {
    return "You have visited this place";
  } else if (status === "Upcoming") {
    return "You are planning to visit this place";
  } else {
    return "This place is in your wishlist";
  }
}

const getTravelStatus = (status) => {
  if (status === "Visited") {
    return "You have visited this place";
  } else if (status === "Upcoming") {
    return "You are planning to visit this place";
  } else {
    return "This place is in your wishlist";
  }
};

// 3. Arrow Functions with Multiple Operations
function getTotalBudget(destinations) {
  let totalBudget = 0;
  for (let i = 0; i < destinations.length; i++) {
    totalBudget += destinations[i].budget;
  }
  return "Total travel budget is " + totalBudget;
}

const getTotalBudget = (destinations) => {
  let totalBudget = 0;
  for (let i = 0; i < destinations.length; i++) {
    totalBudget += destinations[i].budget;
  }
  return "Total travel budget is " + totalBudget;
};

// 4. Arrow Functions as Callbacks
const sortedDestinations = destinations.sort(function (a, b) {
  return b.budget - a.budget;
});

const sortedDestinationsArrowFunction = destinations.sort(
  (a, b) => b.budget - a.budget
);

// 5. Implicit Return with Arrow Functions
function getDestinationNames(destinations) {
  return destinations.map(function (destination) {
    return destination.name;
  });
}

const getDestinationNames = (destinations) =>
  destinations.map((destination) => destination.name);
