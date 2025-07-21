document.addEventListener('DOMContentLoaded', function () {
  // scroll to top
  var btn = document.querySelector('[data-js=scroll-top]');

  if (btn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
