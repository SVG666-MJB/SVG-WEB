// Dark Mode Toggle
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  // Toggle the light-mode class on the body
  document.body.classList.toggle("light-mode");

  // Update the button text based on the mode
  toggleButton.textContent = document.body.classList.contains("light-mode")
    ? "Switch to Dark Mode"
    : "Switch to Light Mode";
});

// Card Clicks
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    const targetLink = e.target.closest("a");
    if (targetLink) {
      window.open(targetLink.href, "_blank");
    }
  });
});
