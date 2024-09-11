// 1. Check if a Destination is in the Itinerary
const travelItinerary1 = ["Paris", "Tokyo", "New York City"];
const destinationToCheck1 = "Tokyo";
console.log("question 1");
console.log(
  travelItinerary1.includes(destinationToCheck1)
    ? "Tokyo is in the itinerary"
    : "Tokyo is not in the itinerary"
);

// 2. Reverse Travel Dates Order
const travelDates2 = ["2023-07-01", "2023-07-15", "2023-08-01"];
console.log("question 2");
console.log(travelDates2.reverse());

// 3. Create a String of Travel Activities
const travelActivities3 = ["Sightseeing", "Hiking", "Dining"];
console.log("question 3");
console.log(travelActivities3.join(", "));

// 4. Check for a Specific Activity
const plannedActivities4 = ["Sightseeing", "Hiking", "Dining"];
const activityToCheck4 = "Hiking";
console.log("question 4");
console.log(
  plannedActivities4.includes(activityToCheck4)
    ? "Hiking is planned"
    : "Hiking is not planned"
);

// 5. Find Index of a Specific Destination
const destinationList5 = ["Paris", "Tokyo", "New York City"];
const specificDestination5 = "New York City";
console.log("question 5");
console.log(
  destinationList5.indexOf(specificDestination5)
    ? `New York City found at index ${destinationList5.indexOf(
        specificDestination5
      )}`
    : `Destination not found`
);

// 6. Remove the Last Destination
const upcomingTrips6 = ["Greece", "Iceland", "Japan"];
console.log("question 6");
upcomingTrips6.pop();
console.log(upcomingTrips6);

// 7. Insert a Destination at the Beginning
const bucketListDestinations7 = ["Machu Picchu", "Great Wall of China"];
const newDestination7 = "Aurora Australis in Antarctica";
bucketListDestinations7.unshift(newDestination7);
console.log("question 7");
console.log(bucketListDestinations7);

// 8. Remove First Destination and Log It
const europeanCapitals8 = ["Paris", "Berlin", "Madrid"];
console.log("question 8");
europeanCapitals8.shift();
console.log(europeanCapitals8);

// 9. Concatenate Two Arrays of Destinations
const beachDestinations9 = ["Maldives", "Bora Bora"];
const cityDestinations9 = ["New York", "Tokyo"];
console.log("question 9");
console.log(beachDestinations9.concat(cityDestinations9));

// 10. Sort Destinations Alphabetically
const destinationList10 = ["Paris", "Tokyo", "New York City"];
console.log("question 10");
console.log(destinationList10.sort());

// 11. Create Array from Packing List Items
const packingListString11 = "Passport,Sunscreen,Camera";
console.log("question 11");
console.log(packingListString11.split(","));

// 12. Slice Array to Get First Few Days of Trip Itinerary
const tripItinerary12 = ["Visit Louvre", "Eiffel Tower", "Seine River Cruise"];
const n12 = 2;
console.log("question 12");
console.log(tripItinerary12.slice(0, n12));

// 13. Empty the Wishlist
const travelWishlist13 = [
  "Northern Lights in Norway",
  "Safari in Kenya",
  "Great Barrier Reef",
];
console.log("question 13");
travelWishlist13.splice(0, travelWishlist13.length);
console.log(travelWishlist13);

// 14. Add a New Destination
const destinations14 = ["Paris", "Tokyo"];
const newDestination14 = "New York City";
destinations14.push(newDestination14);
console.log("question 14");
console.log(destinations14);

// 15. Remove the Last Destination
const destinations15 = ["Paris", "Tokyo", "New York City"];
destinations15.pop();
console.log("question 15");
console.log(destinations15);

// 16. Create a String of Destinations
const destinations16 = ["Paris", "Tokyo", "New York City"];
const joinedNames = destinations16.join(", ");
console.log("question 16");
console.log(joinedNames);

// 17. Find Index of a Specific Destination
const destinations17 = ["Paris", "Tokyo", "New York City"];
const destinationToFind17 = "Tokyo";
console.log("question 17");
console.log(destinations17.indexOf(destinationToFind17));

// 18. Sort Destinations Alphabetically
const destinations18 = ["Paris", "Tokyo", "New York City"];
console.log("question 18");
console.log(destinations18.sort());

// 19. Sort Distances Numerically
const distances19 = [500, 150, 300, 200];
console.log("question 19");
console.log(distances19.sort((a, b) => b - a));
