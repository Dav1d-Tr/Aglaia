let main_title = document.title;

window.addEventListener("blur", () => {
  main_title = document.title;
  document.title = "¡No te vayas! ¡Vuelve! 😣";
});

window.addEventListener("focus", () => {
  document.title = main_title;
});

function add() {
  Open_Form();
}

function Open_Form() {
  htmlModal = document.getElementById("modal");
  htmlModal.setAttribute("class", "card open");
}

function Close_Modal() {
  htmlModal = document.getElementById("modal");
  htmlModal.setAttribute("class", "card");
}
