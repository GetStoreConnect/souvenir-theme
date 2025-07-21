document.addEventListener('DOMContentLoaded', function () {
  // Sticky header
  const headerEl = document.querySelector('[data-header]');
  const footerEl = document.querySelector('#SC-Footer');
  headerEl.style = "relative";

  if (headerEl) {
    const headerHeight = headerEl.getBoundingClientRect().height;
    const footerHeight = footerEl.getBoundingClientRect().height;
    const headerHeightCalc = headerHeight / 2;
    const navEl = document.querySelector('[data-navbar]');
    const canScroll = document.body.scrollHeight > window.innerHeight + headerHeight + footerHeight;
    
    if (!canScroll) {
      return;
    }

    const stickyNav = (entries) => {
      entries.forEach(entry => {
        const target = entry.target;
        if (!entry.isIntersecting) {
          headerEl.style.position = "unset";
          navEl.classList.add('sticky');
        } else {
          headerEl.style.position = "relative";
          navEl.classList.remove('sticky');
        }
      });
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0.5,
      rootMargin: `${headerHeightCalc}px`,
    });

    headerObserver.observe(headerEl);
  }
});
