function TravelPlanner() {
  this.destinations = [];
  this.flights = [];
  this.accommodations = [];

  this.addDestination = function (destination) {
    this.destinations.push(destination);
  };
  this.addFlight = function (flight) {
    this.flights.push(flight);
  };
  this.addAccommodation = function (accommodation) {
    this.accommodations.push(accommodation);
  };
  this.calculateTotalCost = function () {
    const totalCost = this.destinations.reduce(
      (total, destination) => total + destination.calculateCost(),
      0
    );
    const flightCost = this.flights.reduce(
      (total, flight) => total + flight.calculateCost(),
      0
    );
    const accommodationCost = this.accommodations.reduce(
      (total, accommodation) => total + accommodation.calculateCost(),
      0
    );
    return totalCost + flightCost + accommodationCost;
  };
  this.listDestinations = function () {
    return this.destinations.map((destination) => destination.getInfo());
  };
  this.calculateTotalRevenue = function () {
    const totalCost = this.calculateTotalCost();
    return totalCost * 1.5;
  };
  this.getDestinationByName = function (name) {
    return this.destinations.find((destination) => destination.city === name);
  };
  this.Destination = function (country, city, baseCost) {
    this.country = country;
    this.city = city;
    this.baseCost = baseCost;
    this.getInfo = function () {
      return `${this.city}, ${this.country} - $${this.baseCost}`;
    };
    this.calculateCost = function () {
      return this.baseCost;
    };
    this.updateBaseCost = function (newCost) {
      this.baseCost = newCost;
    };
    this.getDiscountedCost = function (discountPercent) {
      const discountedAmount = this.baseCost * (discountPercent / 100);
      return baseCost - discountedAmount;
    };
  };
  this.Flight = function (departure, arrivalCities, distance, pricePerMile) {
    this.departure = departure;
    this.arrivalCities = arrivalCities;
    this.distance = distance;
    this.pricePerMile = pricePerMile;
    this.calculateCost = function () {
      return this.distance * this.pricePerMile;
    };
    this.updatePricePerMile = function (newPrice) {
      this.pricePerMile = newPrice;
    };
    this.updateFlightPrice = function (newDistance) {
      this.distance = newDistance;
      return this.calculateCost();
    };
  };
  this.Accommodation = function (HotelName, CostPerNight, numberOfNights) {
    this.HotelName = HotelName;
    this.CostPerNight = CostPerNight;
    this.numberOfNights = numberOfNights;
    this.calculateCost = function () {
      return this.CostPerNight * this.numberOfNights;
    };
    this.applySeasonalDiscount = function (discount) {
      this.CostPerNight *= discount;
    };
    this.calculateTotalCostWithExtraFees = function (fees) {
      return this.calculateCost() + fees;
    };
  };
  this.findDestinationByHighestCost = function () {
    return this.destinations.reduce((acc, destination) =>
      acc.baseCost > destination.baseCost ? acc : destination
    );
  };
}

const travelPlanner = new TravelPlanner();
const destination1 = new travelPlanner.Destination("USA", "New York", 500);
const destination2 = new travelPlanner.Destination("USA", "Los Angeles", 700);
const flight1 = new travelPlanner.Flight(
  "New York",
  ["Los Angeles"],
  2500,
  0.1
);
const flight2 = new travelPlanner.Flight(
  "Los Angeles",
  ["New York"],
  2500,
  0.1
);
const accommodation1 = new travelPlanner.Accommodation("Hotel1", 100, 5);
const accommodation2 = new travelPlanner.Accommodation("Hotel2", 200, 5);
travelPlanner.addDestination(destination1);
travelPlanner.addDestination(destination2);
travelPlanner.addFlight(flight1);
travelPlanner.addFlight(flight2);
travelPlanner.addAccommodation(accommodation1);
travelPlanner.addAccommodation(accommodation2);
console.log(travelPlanner.calculateTotalCost());
console.log(travelPlanner.listDestinations());
console.log(travelPlanner.calculateTotalRevenue());
console.log(travelPlanner.getDestinationByName("New York"));
console.log(travelPlanner.findDestinationByHighestCost());
console.log(destination1.getDiscountedCost(10));
console.log(flight1.calculateCost());
console.log(flight1.updateFlightPrice(3500));
console.log(accommodation1.calculateTotalCostWithExtraFees(200));
