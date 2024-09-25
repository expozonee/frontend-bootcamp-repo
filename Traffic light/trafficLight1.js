const colorPicker = document.querySelector("#colorPicker");

function highlight(element) {
  const color = colorPicker.value;
  element.style.background = color;
}
