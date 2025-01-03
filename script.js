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

// Custom Cursor Effect (Optional, add if needed)
const cursor = document.querySelector(".custom-cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
}

// Scroll to Top Button (Optional, add if required)
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
