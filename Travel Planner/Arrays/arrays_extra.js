const trips = [
  { id: 1, traveler: "John Doe", destination: "Paris", days: 5, cost: 1200 },
  { id: 2, traveler: "Jane Doe", destination: "Paris", days: 7, cost: 1400 },
  { id: 3, traveler: "John Doe", destination: "London", days: 3, cost: 900 },
];

function groupByDestiation(trips) {
  return trips.reduce((acc, trip) => {
    if (!acc[trip.destination]) {
      acc[trip.destination] = [];
    }
    acc[trip.destination].push(trip);
    return acc;
  }, {});
}

groupByDestiation(trips);
console.log("==============");
console.log(groupByDestiation(trips));
console.log("==============");

function LongestTrip(trips) {
  return trips.reduce(
    (acc, trip) => {
      if (trip.days > acc.days) {
        return trip;
      }
      return acc;
    },
    { days: 0 }
  );
}

console.log("==============");
console.log(LongestTrip(trips));
console.log("==============");

function mostExpensive(trips) {
  return trips.reduce(
    (acc, trip) => {
      if (trip.cost > acc.cost) {
        return trip;
      }
      return acc;
    },
    { cost: 0 }
  );
}

console.log("==============");
console.log(mostExpensive(trips));
console.log("==============");

function travelerTripCount(trips) {
  return trips.reduce((acc, trip) => {
    if (!acc[trip.traveler]) {
      acc[trip.traveler] = 0;
    }
    acc[trip.traveler]++;
    return acc;
  }, {});
}

console.log("==============");
console.log(travelerTripCount(trips));
console.log("==============");

function uniqueLocations(trips) {
  return trips.reduce((acc, trip) => {
    if (acc.includes(trip.destination)) {
      return acc;
    }
    acc.push(trip.destination);
    return acc;
  }, []);
}
console.log("==============");
console.log(uniqueLocations(trips));
console.log("==============");
