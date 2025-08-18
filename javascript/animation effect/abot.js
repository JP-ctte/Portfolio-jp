document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.2
  };

  const animateOnScroll = (entries) => {
    entries.forEach(entry => {
      const children = [...entry.target.querySelectorAll('.animate-on-scroll')];

      if (entry.isIntersecting) {
        children.forEach((el, index) => {
          el.classList.remove('show'); // reset
          setTimeout(() => {
            el.classList.add('show');
          }, index * 150);
        });

        entry.target.classList.add('show');
      } else {
        children.forEach(el => el.classList.remove('show'));
        entry.target.classList.remove('show');
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, observerOptions);

  // Observe multiple sections (add more if needed)
  document.querySelectorAll('.about, .services-container, .tab-content .portfolio-items').forEach(el => {
    observer.observe(el);
  });
});


//------ typer animation ----------///


  const textArray = ["Web Developer", "UI/UX Designer"];
  const typedText = document.getElementById("typed-text");
  let arrayIndex = 0;
  let charIndex = 0;
  let typing = true;

  function type() {
    if (typing) {
      if (charIndex < textArray[arrayIndex].length) {
        typedText.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        typing = false;
        setTimeout(type, 2000); // pause before deleting
      }
    } else {
      if (charIndex > 0) {
        typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 50);
      } else {
        typing = true;
        arrayIndex = (arrayIndex + 1) % textArray.length;
        setTimeout(type, 300); // pause before typing next
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    type();
  });
