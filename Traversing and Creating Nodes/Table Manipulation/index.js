const input = document.querySelector("[name='columnNumber']");
const hideButton = document.querySelector("#hideButton");
const resetButton = document.querySelector("#resetButton");
const tableBody = document.querySelector("tbody");
const tableHeaderTr = document.querySelectorAll("thead tr");

const trArray = document.querySelectorAll("tbody tr");

console.log(tableHeaderTr);

function toggleColumn(id) {
  tableHeaderTr.forEach((tr) => {
    if (tr.children[id - 1].style.display === "none") {
      tr.children[id - 1].style.display = "table-cell";
    } else {
      tr.children[id - 1].style.display = "none";
    }
  });

  trArray.forEach((tr) => {
    if (tr.children[id - 1].style.display === "none") {
      tr.children[id - 1].style.display = "table-cell";
    } else {
      tr.children[id - 1].style.display = "none";
    }
  });
}

function resetTable() {
  tableHeaderTr.forEach((tr) => {
    Array.from(tr.children).forEach((th) => {
      th.style.display = "table-cell";
    });
  });

  trArray.forEach((tr) => {
    Array.from(tr.children).forEach((td) => {
      td.style.display = "table-cell";
    });
  });
}

hideButton.addEventListener("click", (e) => {
  toggleColumn(input.value);
});

resetButton.addEventListener("click", (e) => {
  resetTable();
});
