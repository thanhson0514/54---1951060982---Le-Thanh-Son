// Example starter JavaScript for disabling form submissions if there are invalid fields
'use strict';

var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
});

(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

const a = () => {
  console.log('a');
};
