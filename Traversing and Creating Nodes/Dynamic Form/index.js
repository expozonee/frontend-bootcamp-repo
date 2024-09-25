const form = document.querySelector("#dynamicForm");
const addFieldButton = document.querySelector(".add-field");
const submitFormButton = document.querySelector(".submit-form");

function addField() {
  const label = document.createElement("label");
  label.textContent = "New Input";
  const input = document.createElement("input");

  form.appendChild(label);
  form.appendChild(input);
}

function submitForm() {
  const formMessage = document.querySelector("#formMessage");
  if (formMessage) {
    document.body.removeChild(formMessage);
  }

  let allFilled = true;
  let m = [];
  let message = "";
  const allInputFields = document.querySelectorAll("#dynamicForm input");
  allInputFields.forEach((input) => {
    if (!input.value) {
      allFilled = false;
      return;
    }

    m.push(input.value);
  });

  message = m.join(", ");

  if (allFilled) {
    const pMessage = document.createElement("p");
    pMessage.id = "formMessage";
    pMessage.textContent = message;
    document.body.appendChild(pMessage);
  } else {
    alert("All inputs are mandatory");
  }
}

addFieldButton.addEventListener("click", (e) => {
  addField();
});

submitFormButton.addEventListener("click", (e) => {
  submitForm();
});
