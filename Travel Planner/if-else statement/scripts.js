let travelBudget = 1200;

if (travelBudget > 1000) {
  console.log("Luxury travel options available");
} else {
  console.log("Looking for budget travel");
}

let destinationTemp = 20;

if (destinationTemp >= 15 && destinationTemp <= 27) {
  console.log("Ideal weather for the trip");
} else {
  console.log("Consider another destination or time");
}

let flightBooked = true;
let hotelBooked = true;

if (flightBooked) {
  if (hotelBooked) {
    console.log("Your travel plan is set");
  } else {
    console.log("You need to book a hotel");
  }
} else {
  console.log("You need to book a flight");
}

let chosenPackagePrice = 500;
let alternativePackagePrice = 450;

if (chosenPackagePrice === alternativePackagePrice) {
  console.log("You've chosen the best priced package");
} else if (alternativePackagePrice < chosenPackagePrice) {
  console.log("Consider switching for a better price");
}

let travelerAge = 65;

if (travelerAge > 65) {
  console.log("Eligible for senior citizen discounts");
} else if (travelerAge <= 18) {
  console.log("Eligible for student discounts");
} else {
  console.log("Regular pricing applies");
}

let satisfactionScore = 85;

let message =
  satisfactionScore >= 80 ? "Highly satisfied traveler" : "Needs improvement";
console.log(message);

let groupSize = 7;

let groupMessage =
  groupSize % 2 === 0 ? "Even number of travelers" : "Odd number of travelers";
console.log(groupMessage);

let travelerAge2 = 14;

let ageGroup =
  travelerAge2 < 12
    ? "Child"
    : travelerAge2 >= 13 && travelerAge2 <= 19
    ? "Teen"
    : "Adult";
console.log(ageGroup);

let experienceLevel = 6;

let experienceMessage =
  experienceLevel > 5 ? "Experienced traveler" : "New traveler";
console.log(experienceMessage);

let tripDuration = 7;

if (tripDuration < 3) {
  console.log("Weekend getaway");
} else if (tripDuration >= 3 && tripDuration <= 14) {
  console.log("Standard vacation");
} else {
  console.log("Extended tour");
}

let travelerAge3 = 20;
const activityAgeRequirement = 18;

if (travelerAge >= activityAgeRequirement) {
  console.log("Traveler can participate in the activity.");
} else {
  console.log("Traveler is too young to participate in the activity.");
}

let dayOfTravel = "Saturday";

if (dayOfTravel === "Saturday" || dayOfTravel === "Sunday") {
  console.log("Special weekend offer available!");
} else {
  console.log("Regular pricing.");
}

let destinationOpeningYear = 2005;

if (destinationOpeningYear >= 2001 && destinationOpeningYear <= 2100) {
  console.log("21st century destination");
} else {
  console.log("20th century destination");
}

let destinationType = "Adventure";
let destinationRating = 9;

if (destinationType === "Adventure" && destinationRating >= 8) {
  console.log("Must Visit");
} else {
  console.log("Check reviews before planning your visit");
}

let packagePrice = 1200;

if (packagePrice <= 1000) {
  console.log("Discounted package");
} else {
  console.log("Regular package price");
}

let travelerAge4 = 22;
let isAdultActivity = true;

if (travelerAge4 > 18 || !isAdultActivity) {
  console.log("Allowed to participate");
} else {
  console.log("Age-restricted activity");
}

let destinationName = "Famous Beach Resort";

if (
  destinationName.includes("famous") ||
  destinationName.includes("top destination")
) {
  console.log("This destination is a hotspot");
} else {
  console.log("This destination is not a hotspot");
}
