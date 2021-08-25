let contentVue = document.querySelector('.appointment-form');
let button = document.querySelector('.search-button');

const btns = document.querySelectorAll('.button-counter');

button.addEventListener('click', function (evt) {
   evt.preventDefault();
   contentVue.classList.toggle("element-hidden");
});

btns.forEach(btn => {
   btn.addEventListener('click',
      function (evt) {
         evt.preventDefault();
         const direction = this.dataset.direction;
         const inp = this.parentElement.querySelector('.button-counter__input');
         const currentValue = +inp.value;
         let newValue;
         if (direction === 'plus') {
            newValue = currentValue + 1;
         } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
         }
         inp.value = newValue;
      });
});
