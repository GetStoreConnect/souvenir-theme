const CUSTOM_PARAMS =  {
  items: 1,
  gutter: 20,
  responsive: {
    768: { items: 3 },
    992: { items: 4 },
    1700: { items: 5 }
  },
  touch: true,
  mouseDrag: true,
  nav: false,
  swipeAngle: 20,
  speed: 400
}

let sliders = [];

function sliderInit() {
  ;[...document.querySelectorAll('[data-featured-slider]:not([data-initialized])')].forEach((sliderEl) => {
    sliderEl.setAttribute('data-initialized', true)
    const container = {
      container: '[data-featured-slider=' + sliderEl.getAttribute('data-featured-slider') + ']',
    }
    const slideshow = tns({ ...CUSTOM_PARAMS, ...container })

    let resizeId

    sliders.push(sliderEl)
    window.addEventListener('resize', () => {
      clearTimeout(resizeId)
      resizeId = setTimeout(() => slideshow.updateSliderHeight(), 300)
    })
  })
}

document.addEventListener('DOMContentLoaded', sliderInit);

document.addEventListener('DOMContentLoaded', function () {
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
