class Trip {
  #destination;
  #duration;
  #distance;
  #activites;

  constructor(destination, duration, distance) {
    this.#destination = destination;
    this.#duration = duration;
    this.#distance = distance;
    this.#activites = [];
  }

  get destination() {
    return this.#destination;
  }

  get duration() {
    return this.#duration;
  }

  get distance() {
    return this.#distance;
  }

  get totalCost() {
    return this.#calculateCost();
  }

  get activites() {
    return this.#activites;
  }

  set destination(des) {
    if (typeof des !== "string") {
      console.error("Destination must be string!");
      return;
    }

    if (des.length === 0) {
      console.error("Destination must not be empty!");
      return;
    }

    this.#destination = des;
    console.log(`The new destination is: ${this.#destination}`);
  }

  set duration(dur) {
    if (!Number.isInteger(dur) && dur <= 0) {
      console.error("Duration must be positive number only");
    }

    this.#duration = dur;
    console.log(`The new duration is: ${this.#duration}`);
  }

  set distance(dis) {
    if (!Number.isInteger(dur) && dur <= 0) {
      console.error("Distance must be positive number only");
    }

    this.#distance = dis;
    console.log(`The new distance is: ${this.#distance}`);
  }

  #calculateCost = function () {
    return this.#duration * 85 + this.#distance * 10;
  };

  addActivity = function (activity) {
    if (typeof activity !== "string") {
      console.error("Destination must be string!");
      return;
    }

    if (activity.length === 0) {
      console.error("Destination must not be empty!");
      return;
    }

    this.#activites.push(activity);
  };

  displayDetails = function () {
    return `Destination Trip is: ${this.destination}\nDuration is: ${
      this.duration
    } days\nDistance is: ${this.distance} miles\ntotal cost is: $${
      this.totalCost
    }\nPlanned activites: ${
      this.activites.length > 0
        ? this.activites.join(", ")
        : "No planned activites yet!"
    }`;
  };
}

const hello = new Trip("New York", 5, 100);
// console.log(hello.displayDetails());

// 2

class AdventureTrip extends Trip {
  #diffcultyLevel;
  #gearList;

  constructor(destination, duration, distance, diffcultyLevel, gearList) {
    super(destination, duration, distance);
    this.#diffcultyLevel = diffcultyLevel;
    this.#gearList = gearList;
  }

  get diffcultyLevel() {
    return this.#diffcultyLevel;
  }

  get gearList() {
    return this.#gearList;
  }

  set diffcultyLevel(level) {
    const acceptedValues = ["easy", "moderate", "hard"];
    if (!acceptedValues.includes(level)) {
      console.error(
        `Diffculty level must be one of these values only: ${acceptedValues.join(
          ", "
        )}`
      );
      return;
    }
    this.#diffcultyLevel = level;
  }

  set gearList(list) {
    if (!Array.isArray(list)) {
      console.error("The list must be an array.");
      return;
    }

    if (list.every((item) => typeof item === "string")) {
      console.error("It must be an array of strings");
      return;
    }

    this.#gearList = list;
  }

  displayDetails = function () {
    return `Destination Trip is: ${this.destination}\nDuration is: ${
      this.duration
    } days\nDistance is: ${this.distance} miles\ntotal cost is: $${
      this.totalCost
    }\nPlanned activites: ${
      this.activites.length > 0
        ? this.activites.join(", ")
        : "No planned activites yet!"
    }\nAdventure diffculty: ${
      this.diffcultyLevel
    }\nGear list: ${this.gearList.join(", ")}`;
  };
}

const world = new AdventureTrip("Los Angeles", 5, 100, "easy", ["hat"]);
// console.log(world.displayDetails());

class CulturalTrip extends Trip {
  #language;
  #historicalSites;

  constructor(destination, duration, distance, language, historicalSites) {
    super(destination, duration, distance);
    this.#language = language;
    this.#historicalSites = historicalSites;
  }

  get language() {
    return this.#language;
  }

  get historicalSites() {
    return this.#historicalSites;
  }

  set language(lang) {
    if (typeof lang !== "string") {
      console.error("Language must be only text!");
      return;
    }

    if (lang.length === 0) {
      console.error("Language must not be empty!");
      return;
    }

    this.#language = lang;
  }

  set historicalSites(sites) {
    if (!Array.isArray(sites)) {
      console.error("The list must be an array.");
      return;
    }

    if (sites.every((site) => typeof site === "string")) {
      console.error("It must be an array of strings");
      return;
    }

    this.#historicalSites = sites;
  }

  displayDetails = function () {
    return `Destination Trip is: ${this.destination}\nDuration is: ${
      this.duration
    } days\nDistance is: ${this.distance} miles\ntotal cost is: $${
      this.totalCost
    }\nPlanned activites: ${
      this.activites.length > 0
        ? this.activites.join(", ")
        : "No planned activites yet!"
    }\nLanguage: ${
      this.language
    }\nHistorical Sites: ${this.historicalSites.join(", ")}`;
  };
}

const test = new CulturalTrip("Mountian", 10, 1000, "japanese", [
  "mountain",
  "lakes",
]);
// console.log(test.displayDetails());

// 3

class Traveler {
  #name;
  #plannedTrips = [];

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    if (typeof name !== "string") {
      console.error("Name must be text only.");
      return;
    }

    if (name.length === 0) {
      console.error("Name length must be at least 1 char.");
    }

    this.#name = name;
  }

  addTrip = function (trip) {
    if (
      !trip instanceof Trip &&
      !trip instanceof AdventureTrip &&
      !trip instanceof CulturalTrip
    ) {
      console.log(
        "Trip must be either an object Trip or AdventureTrip or CulturalTrip"
      );
      return;
    }

    this.#plannedTrips.push(trip);
  };

  planActivity = function (trip, activity) {
    if (
      !trip instanceof Trip &&
      !trip instanceof AdventureTrip &&
      !trip instanceof CulturalTrip
    ) {
      console.log("Traveler can only plan activties for planned trips.");
      return;
    }

    if (!this.#plannedTrips.includes(trip)) {
      console.error("The trip is not in the planned trips.");
      return;
    }

    trip.addActivity(activity);
  };

  displayInfoForEachTrip = function () {
    this.#plannedTrips.forEach((trip, index) => {
      console.log("---------------------");
      console.log(`Trip ${index + 1}`);
      console.log(
        `${
          trip instanceof Trip
            ? `Destination Trip is: ${trip.destination}\nDuration is: ${
                trip.duration
              } days\nDistance is: ${trip.distance} miles\ntotal cost is: $${
                trip.totalCost
              }\nPlanned activites: ${
                trip.activites.length > 0
                  ? trip.activites.join(", ")
                  : "No planned activites yet!"
              }`
            : `${
                trip instanceof AdventureTrip
                  ? `Destination Trip is: ${trip.destination}\nDuration is: ${
                      trip.duration
                    } days\nDistance is: ${
                      trip.distance
                    } miles\ntotal cost is: $${
                      trip.totalCost
                    }\nPlanned activites: ${
                      trip.activites.length > 0
                        ? trip.activites.join(", ")
                        : "No planned activites yet!"
                    }\nAdventure diffculty: ${
                      trip.diffcultyLevel
                    }\nGear list: ${trip.gearList.join(", ")}`
                  : `Destination Trip is: ${trip.destination}\nDuration is: ${
                      trip.duration
                    } days\nDistance is: ${
                      trip.distance
                    } miles\ntotal cost is: $${
                      trip.totalCost
                    }\nPlanned activites: ${
                      trip.activites.length > 0
                        ? trip.activites.join(", ")
                        : "No planned activites yet!"
                    }\nLanguage: ${
                      trip.language
                    }\nHistorical Sites: ${trip.historicalSites.join(", ")}`
              }`
        }`
      );
      console.log("---------------------");
    });
  };
}

const abc = new Traveler("Ibrahem");
abc.addTrip(hello);
abc.addTrip(world);
abc.planActivity(hello, "driving");
abc.planActivity(world, "swimming");
abc.displayInfoForEachTrip();
