// Smooth Scrolling for Buttons
document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const link = e.target.closest('a');
    if (link && link.href) {
      window.open(link.href, '_blank'); // Open in a new tab
    }
  });
});

// Scroll to Top Button (Optional)
const scrollToTopButton = document.getElementById("scroll-to-top");

if (scrollToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block"; // Show button when scrolling down
    } else {
      scrollToTopButton.style.display = "none"; // Hide button at the top
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  });
}

// Dark Mode Toggle (Optional for future use)
const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    toggleButton.textContent = document.body.classList.contains("light-mode")
      ? "Switch to Dark Mode"
      : "Switch to Light Mode";
  });
}
