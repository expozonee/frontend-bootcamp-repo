const triggerInput = document.getElementById("triggerRejection");
const triggerBtn = document.getElementById("triggerPromise");
const message = document.getElementById("message");

function promise() {
  const isChecked = triggerInput.checked;
  return new Promise((res, rej) => {
    if (isChecked) {
      setTimeout(() => {
        rej("The Promise has been rejected!");
      }, 1000);
    } else {
      setTimeout(() => {
        res("The Promise has been resolved!");
      }, 1000);
    }
  });
}

triggerBtn.addEventListener("click", () => {
  message.innerHTML = "";
  promise()
    .then((msg) => {
      message.classList.remove("rejected");
      message.classList.add("resolved");
      message.innerText = msg;
    })
    .catch((msg) => {
      message.classList.remove("resolved");
      message.classList.add("rejected");
      message.innerText = msg;
    });
});
