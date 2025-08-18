
 document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.2
  };

  const animateOnScroll = (entries) => {
    entries.forEach(entry => {
      const children = [...entry.target.children];

      if (entry.isIntersecting) {
        children.forEach((el, index) => {
          if (el.classList.contains('animate-on-scroll')) {
            el.classList.remove('show'); // reset first
            setTimeout(() => {
              el.classList.add('show');
            }, index * 150);
          }
        });

        entry.target.classList.add('show');
      } else {
        // Remove animation class if leaving viewport
        children.forEach(el => el.classList.remove('show'));
        entry.target.classList.remove('show');
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, observerOptions);

  // Observe tab-content wrappers and services container
  document.querySelectorAll('.tab-content .portfolio-items, .services-container').forEach(el => {
    observer.observe(el);
  });
});


// blink scrolling up animation//
  const cards = document.querySelectorAll('.service-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Scroll to top of section
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });

      // Apply blink to all cards
      cards.forEach(c => {
        c.classList.add('blink');

        // Swap content with data-alt values
        const titleEl = c.querySelector('h2');
        const descEl = c.querySelector('.service-description');

        const currentTitle = titleEl.textContent;
        const currentDesc = descEl.textContent;

        const altTitle = c.dataset.altTitle;
        const altDesc = c.dataset.altDescription;

        titleEl.textContent = altTitle;
        descEl.textContent = altDesc;

        // Swap values for toggle
        c.dataset.altTitle = currentTitle;
        c.dataset.altDescription = currentDesc;

        // Remove blink after animation
        setTimeout(() => {
          c.classList.remove('blink');
        }, 400);
      });
    });
  });
