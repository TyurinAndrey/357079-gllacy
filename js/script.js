var feedback = document.querySelector(".contacts-feedback");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close");

var login = popup.querySelector("[name=feedback-login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=feedback-email]");
var message = popup.querySelector("textarea");

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-closing");
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  popup.classList.add("modal-closing");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } 
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      popup.classList.add("modal-closing");
      overlay.classList.remove("overlay-show");
    }
  }
});

