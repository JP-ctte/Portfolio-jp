
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');
  const sections = document.querySelectorAll('main, section');

  // Toggle mobile nav menu
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Smooth scroll and active link handler
  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const headerOffset = 80;
        const targetPosition = targetEl.offsetTop - headerOffset;
        smoothScrollTo(targetPosition, 700);
      }

      navItems.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      navLinks.classList.remove('show');
    });
  });

  // Smooth scroll animation
  function smoothScrollTo(targetY, duration = 600) {
    const startY = window.pageYOffset;
    const distanceY = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const ease = t => t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t;

      const run = ease(timeElapsed / duration) * distanceY + startY;
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetY);
      }
    }

    requestAnimationFrame(animation);
  }

  // ScrollSpy: detect current section on scroll
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 100; // Adjust for header

    sections.forEach(section => {
      const id = section.getAttribute('id');
      if (!id) return;

      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });


 // header blur //
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.remove('transparent');
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      header.classList.add('transparent');
    }
  });

  // Initial check on page load
  window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (window.scrollY <= 10) {
      header.classList.add('transparent');
    }
  });




// trigger and one by one animation //
  document.addEventListener("DOMContentLoaded", () => {
    const heroTexts = document.querySelectorAll('.hero-text');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate'); // Remove when out of view
        }
      });
    }, {
      threshold: 0.5
    });

    heroTexts.forEach(el => observer.observe(el));
  });


// glass toggle //

const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a nav link (optional)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
    }
  });
});
