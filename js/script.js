var form = document.querySelector(".form");
var inv = form.querySelector(".tel-error");
var phone = form.querySelector("[name=phone]");

form.addEventListener("submit", function (evt) {
  if (!phone.value) {
    evt.preventDefault();
    inv.classList.add("js-show");
    }                            
  });