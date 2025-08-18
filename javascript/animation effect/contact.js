
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.2
  };

  const animateOnScroll = (entries) => {
    entries.forEach(entry => {
      const children = entry.target.querySelectorAll('.animate-on-scroll');
      if (entry.isIntersecting) {
        children.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('show');
          }, index * 150);
        });
      } else {
        children.forEach(el => el.classList.remove('show'));
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, observerOptions);

  const contactSection = document.querySelector('#contact .contact-container');
  if (contactSection) {
    observer.observe(contactSection);
  }
});

