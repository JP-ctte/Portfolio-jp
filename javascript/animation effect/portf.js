document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  function animateItems(tab) {
    const items = tab.querySelectorAll('.portfolio-item');
    items.forEach((item, index) => {
      item.classList.remove('show');
      setTimeout(() => {
        item.classList.add('show');
      }, index * 150);
    });
  }

  function showTab(targetTabId) {
    tabContents.forEach(tab => {
      if (tab.id === targetTabId) {
        tab.style.display = 'block';
        animateItems(tab);
      } else {
        tab.style.display = 'none';
      }
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-tab');
      showTab(targetTab);
    });
  });

  // Trigger first tab
  const activeButton = document.querySelector('.tab-btn.active') || tabButtons[0];
  if (activeButton) {
    activeButton.classList.add('active');
    const targetTab = activeButton.getAttribute('data-tab');
    showTab(targetTab);
  }

  // Intersection Observer for scroll trigger
  const portfolioSection = document.getElementById('portfolio');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeTabId = document.querySelector('.tab-btn.active').getAttribute('data-tab');
        const activeTab = document.getElementById(activeTabId);
        animateItems(activeTab);
      }
    });
  }, {
    threshold: 0.3
  });

  if (portfolioSection) {
    observer.observe(portfolioSection);
  }
});


//------ certicate pop-up animation ----------//


  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll(".portfolio-image").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

