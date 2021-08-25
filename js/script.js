let contentVue = document.querySelector('.appointment-form');
let button = document.querySelector('.search-button');


button.addEventListener("click", function (evt) {
   evt.preventDefault();
   contentVue.classList.toggle("element-hidden");
});