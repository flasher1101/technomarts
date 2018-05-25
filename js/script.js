var open_modal_map = document.querySelector(".company-contacts__open-modal-map");
var modal_map = document.querySelector(".modal-map");
var map_close = document.querySelector(".modal-map-close");
var contact_modal = document.querySelector(".company-contacts__btn");
var contact_form = document.querySelector(".contact-form");
var contact_form_close = document.querySelector(".contact-form__close");

open_modal_map.addEventListener("click", function() {
	modal_map.classList.add("modal-show");
})

map_close.addEventListener("click", function() {
	modal_map.classList.remove("modal-show");
})

contact_modal.addEventListener("click", function(event) {
	event.preventDefault("");
	contact_form.classList.add("modal-show");
})

contact_form_close.addEventListener("click", function() {
	contact_form.classList.remove("modal-show");
})


