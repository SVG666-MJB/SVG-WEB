// Scroll to Top Button
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block"; // Show button when scrolling down
  } else {
    scrollToTopButton.style.display = "none"; // Hide button when at the top
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to top
});

// Custom Cursor Effect
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Smooth Scroll for Cards and Links
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    const targetLink = e.target.closest("a");
    if (targetLink && targetLink.href) {
      window.open(targetLink.href, "_blank"); // Open link in new tab
    }
  });
});

// Dark Mode Toggle
const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    // Toggle the light-mode class on the body
    document.body.classList.toggle("light-mode");

    // Update the button text dynamically
    toggleButton.textContent = document.body.classList.contains("light-mode")
      ? "Switch to Dark Mode"
      : "Switch to Light Mode";
  });
}
