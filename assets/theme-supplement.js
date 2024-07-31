document.addEventListener('DOMContentLoaded', function () {
  // Sliders
  const featuredSlider = (function () {

    const CUSTOM_PARAMS =  {
      items: 1,
      gutter: 10,
      responsive: {
        768: { items: 3 },
        992: { items: 4 },
        1700: { items: 5 }
      },
      nav: false,
      swipeAngle: false,
      speed: 400
    }

    let customsliders = [];
    // Check if the page has Custom Carousels before intialising them
    $(() => {
      if (document.querySelectorAll('[data-featured-slider]')) {
        [...document.querySelectorAll('[data-featured-slider]')].map(slider => {
          featuredSlider.init('[data-featured-slider=' + slider.getAttribute('data-featured-slider') + ']');
        });
      }
    })

    return {
      init: (selector, params) => {
        const container = {
          container: selector,
        },

        slider = tns({ ...CUSTOM_PARAMS, ...params, ...container });

        customsliders.push(slider);
      }
    }
  })();

  // const headerElement = document.querySelector("#sc-header");
  const headerElement = document.querySelector('[data-header]');
  const headerHeight = headerElement.getBoundingClientRect().height / 2;
  const navElement = document.querySelector('[data-navbar]');

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navElement.classList.remove("sticky");
      } else {
        navElement.classList.add("sticky");
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.5, 
    rootMargin: `${headerHeight}px`
  });

  observer.observe(headerElement);

  // scroll to top

  var btn = document.querySelector('[data-js=scroll-top]');

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
});

const titleGenerator = () => {
  const categoryTitle = document.querySelector('.SC-CategorySubcategories');

  if (categoryTitle != null) {
    const createElement = () => {
      let heading = document.createElement('h4');
      heading.classList.add('SC-CategorySubcategories_title', 'sc-pe-small', 'sc-uppercase', 'sc-text-center');
      heading.innerHTML = 'Categories';

      categoryTitle.insertAdjacentElement("afterbegin", heading);
    }
    createElement();
  }
}
titleGenerator();