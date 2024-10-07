const categories = document.getElementById("categories");
const itemsContainer = document.getElementById("items");

const data = {
  fruits: ["Apple", "Banana", "Cherry"],
  vegetables: ["Carrot", "Broccoli", "Lettuce"],
  dairy: ["Milk", "Cheese", "Yogurt"],
};

categories.addEventListener("click", (e) => {
  if (e.target.classList.contains("category")) {
    itemsContainer.innerHTML = "";
    const category = e.target.getAttribute("data-category");
    const selectedData = data[category];

    for (let i = 0; i < selectedData.length; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerText = selectedData[i];
      itemsContainer.appendChild(item);
    }
  }
});
