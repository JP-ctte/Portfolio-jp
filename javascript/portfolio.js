  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      contents.forEach(c => c.style.display = 'none');

      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).style.display = 'block';
    });
  });


  const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove("active"));
    // Hide all tab contents
    tabContents.forEach(content => content.style.display = "none");

    // Add active to clicked
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).style.display = "block";
  });
});


