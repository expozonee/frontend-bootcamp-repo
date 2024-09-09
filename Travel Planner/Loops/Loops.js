// 1. Sum of All Activities' Durations
const activityDurations1 = [2, 3, 1];

let sum = 0;
for (let i = 0; i < activityDurations1.length; i++) {
  sum += activityDurations1[i];
}
console.log(sum);

// 2. Activity with the Longest Duration
const activityDurations2 = [2, 3, 1];

let longestDuration = 0;
for (let i = 0; i < activityDurations2.length; i++) {
  if (activityDurations2[i] > longestDuration) {
    longestDuration = activityDurations2[i];
  }
}
console.log(longestDuration);

// 3. Most Frequent Activity
const activityNames3 = ["Sightseeing", "Hiking", "Sightseeing"];

// another way to find the most frequent activity
let activityCount = {};
let maxCount = 0;
let mostFrequentActivity = "";

for (let i = 0; i < activityNames3.length; i++) {
  const activity = activityNames3[i];
  activityCount[activity] = (activityCount[activity] || 0) + 1;
  if (activityCount[activity] > maxCount) {
    maxCount = activityCount[activity];
    mostFrequentActivity = activity;
  }
}
console.log(mostFrequentActivity);

// 4. Shortest Activity Duration
const activityDurations4 = [2, 3, 1];

let shortestDuration = activityDurations4[0];
for (let i = 1; i < activityDurations4.length; i++) {
  if (activityDurations4[i] < shortestDuration) {
    shortestDuration = activityDurations4[i];
  }
}
console.log(shortestDuration);

// 5. Count Travel Segments by Transportation Type
const transportationTypes5 = ["Car", "Train", "Car", "Flight"];

let carCount = 0;
let trainCount = 0;
let flightCount = 0;

for (let i = 0; i < transportationTypes5.length; i++) {
  switch (transportationTypes5[i]) {
    case "Car":
      carCount++;
      break;
    case "Train":
      trainCount++;
      break;
    case "Flight":
      flightCount++;
      break;
  }
}
console.log(carCount, trainCount, flightCount);

// 6. Average Travel Expense
const travelExpenses6 = [50, 100, 75, 125, 200];

let total = 0;
for (let i = 0; i < travelExpenses6.length; i++) {
  total += travelExpenses6[i];
}

let average = total / travelExpenses6.length;
console.log(average);

// 7. Highest Single Travel Expense
const travelExpenses7 = [50, 100, 75, 125, 200];

let highestExpense = travelExpenses7[0];
for (let i = 0; i < travelExpenses7.length; i++) {
  if (travelExpenses7[i] > highestExpense) {
    highestExpense = travelExpenses7[i];
  }
}
console.log(highestExpense);

// 8. Expenses Under Budget
const travelExpenses8 = [50, 100, 75, 125, 200];

const budget = 150;
let expensesUnderBudget = [];
for (let i = 0; i < travelExpenses8.length; i++) {
  if (travelExpenses8[i] < budget) {
    expensesUnderBudget.push(travelExpenses8[i]);
  }
}
console.log(expensesUnderBudget);

// 9. Calculate Total Expenses for Each Category
const categoryExpenses9 = [
  [100, 200],
  [150, 175],
  [120, 250],
];

let total2 = [];
for (let i = 0; i < categoryExpenses9.length; i++) {
  let sum = 0;
  for (let j = 0; j < categoryExpenses9[i].length; j++) {
    sum += categoryExpenses9[i][j];
  }
  total2.push(sum);
}

// 10. Shortest Route in Each Travel Plan
const routeDistances10 = [
  [120, 300],
  [150, 175],
  [100, 250],
];

let shortestRoutes = [];
for (let i = 0; i < routeDistances10.length; i++) {
  let shortestRoute = routeDistances10[i][0];
  for (let j = 1; j < routeDistances10[i].length; j++) {
    if (routeDistances10[i][j] < shortestRoute) {
      shortestRoute = routeDistances10[i][j];
    }
  }
  shortestRoutes.push(shortestRoute);
}
console.log(shortestRoutes);

// 11. Average Duration per Activity Type
const activityDurationsMatrix11 = [
  [2, 3],
  [1, 4],
  [3, 2],
];

let averageDurations = [];
for (let i = 0; i < activityDurationsMatrix11.length; i++) {
  let total = 0;
  for (let j = 0; j < activityDurationsMatrix11[i].length; j++) {
    total += activityDurationsMatrix11[i][j];
  }
  averageDurations.push(total / activityDurationsMatrix11[i].length);
}
console.log(averageDurations);

// 12. Find the Destination with the Highest Rating in Each Category
const destinationRatingMatrix12 = [
  [4.5, 4.7],
  [4.8, 4.6],
  [4.9, 5.0],
];

let highestRatings = [];
for (let i = 0; i < destinationRatingMatrix12.length; i++) {
  let highestRating = destinationRatingMatrix12[i][0];
  for (let j = 1; j < destinationRatingMatrix12[i].length; j++) {
    if (destinationRatingMatrix12[i][j] > highestRating) {
      highestRating = destinationRatingMatrix12[i][j];
    }
  }
  highestRatings.push(highestRating);
}
console.log(highestRatings);

// 13. Count Highly Recommended Destinations in Each Region
const regionRecommendationMatrix13 = [
  [5, 7],
  [8, 6],
  [9, 7],
];

const minimumRecommendationCount = 7;
let highlyRecommendedCount = [];

for (let i = 0; i < regionRecommendationMatrix13.length; i++) {
  let count = 0;
  for (let j = 0; j < regionRecommendationMatrix13[i].length; j++) {
    if (regionRecommendationMatrix13[i][j] >= minimumRecommendationCount) {
      count++;
    }
  }
  highlyRecommendedCount.push(count);
}
console.log(highlyRecommendedCount);

// 14. Sum of Ratings for Must-Visit Destinations by Region
const mustVisitRatingMatrix14 = [
  [4.5, 4.7],
  [4.9, 5.0],
  [4.8, 4.9],
];

const minimumRating = 4.8;
let totalRatings = [];

for (let i = 0; i < mustVisitRatingMatrix14.length; i++) {
  let sum = 0;
  for (let j = 0; j < mustVisitRatingMatrix14[i].length; j++) {
    if (mustVisitRatingMatrix14[i][j] >= minimumRating) {
      sum += mustVisitRatingMatrix14[i][j];
    }
  }
  totalRatings.push(sum);
}
console.log(totalRatings);
