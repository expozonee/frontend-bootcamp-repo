let travelData = {
  destinations: ["Paris", "London", "New York", "Tokyo", "Sydney"],
  flights: [
    { flightNumber: "AA123", destination: "New York", duration: "8h 15m" },
    { flightNumber: "BA456", destination: "London", duration: "7h 30m" },
    { flightNumber: "AF789", destination: "Paris", duration: "9h 20m" },
    { flightNumber: "JL012", destination: "Tokyo", duration: "13h 45m" },
    { flightNumber: "QF345", destination: "Sydney", duration: "22h 35m" },
  ],
};

// 1

const destinations = travelData.destinations;
console.log(destinations);

// 2

function findFlightByDestination(arr, destination) {
  return arr.flights.filter((flight) => flight.destination === destination);
}
console.log(findFlightByDestination(travelData, "Paris"));

// 3

function totalDuarationOfAllFlights(arr) {
  return arr.flights.reduce((acc, flight) => {
    const [hours, minutes] = flight.duration.split("h ");
    return (
      acc + parseInt(hours * 3600 + minutes.slice(0, minutes.length - 1) * 60)
    );
  }, 0);
}

console.log(totalDuarationOfAllFlights(travelData));

// 4

function flightNumbersAndDestinations(arr) {
  return arr.flights.map(
    (flight) => `${flight.flightNumber} - ${flight.destination}`
  );
}

console.log(flightNumbersAndDestinations(travelData));

// 5

function seddfgd(arr, flightNumber, newDuration) {
  return arr.flights.map((flight) => {
    if (flight.flightNumber === flightNumber) {
      return { ...flight, duration: newDuration };
    }
    return flight;
  });
}

console.log(seddfgd(travelData, "AA123", "10h 30m"));
