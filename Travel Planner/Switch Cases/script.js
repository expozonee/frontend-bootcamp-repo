switch (dayOfWeek) {
  case 1:
    console.log("It's Sunday!");
    break;
  case 2:
    console.log("It's Monday!");
    break;
  case 3:
    console.log("It's Tuesday!");
    break;
  case 4:
    console.log("It's Wednesday!");
    break;
  case 5:
    console.log("It's Thursday!");
    break;
  case 6:
    console.log("It's Friday!");
    break;
  case 7:
    console.log("It's Saturday!");
    break;

  default:
    console.log("Invalid day of the week");
    break;
}

switch (themeColor) {
  case "light":
    UIThemeSettings = "light-theme.css";
    break;

  case "dark":
    UIThemeSettings = "dark-theme.css";
    break;

  case "night":
    UIThemeSettings = "night-theme.css";
    break;

  default:
    UIThemeSettings = "light-theme.css";
    break;
}

let notificationStatus = "new";

switch (notificationStatus) {
  case "new":
  case "unread":
  case "unopened":
    console.log("You have new travel notifications!");
    break;
  default:
    console.log("No new notifications.");
}

let packageRating = "Premium";

switch (packageRating) {
  case "Basic":
    console.log("Basic package: Affordable and simple travel option.");
    break;
  case "Standard":
    console.log("Standard package: A good balance of cost and comfort.");
    break;
  case "Premium":
    console.log("Premium package: Enjoy more luxuries on your trip.");
    break;
  case "Luxury":
    console.log("Luxury package: Top-tier experience with all amenities.");
    break;
  default:
    console.log("Invalid package rating.");
}

let mealPlan = "Lunch";

switch (mealPlan) {
  case "Breakfast":
    console.log("Meal plan selected: Breakfast");
    break;
  case "Lunch":
    console.log("Meal plan selected: Lunch");
    break;
  case "Dinner":
    console.log("Meal plan selected: Dinner");
    break;
  default:
    console.log("Invalid meal plan selection.");
}

let satisfactionScore = 85;

switch (true) {
  case satisfactionScore >= 90:
    console.log("Highly Satisfied");
    break;
  case satisfactionScore >= 70 && satisfactionScore < 90:
    console.log("Satisfied");
    break;
  case satisfactionScore >= 50 && satisfactionScore < 70:
    console.log("Neutral");
    break;
  default:
    console.log("Dissatisfied");
}

let travelMonth = 5;

switch (travelMonth) {
  case 12:
  case 1:
  case 2:
    console.log("Winter Travel");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring Travel");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer Travel");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall Travel");
    break;
  default:
    console.log("Invalid month");
}

let travelSeason = 3;

switch (travelSeason) {
  case 12:
  case 1:
  case 2:
    console.log("Winter Advisory");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring Advisory");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer Advisory");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall Advisory");
    break;
  default:
    console.log("Invalid season");
}
