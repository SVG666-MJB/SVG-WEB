/************************************
 * 1. LINK CARDS OPEN IN NEW TAB
 ************************************/
document.querySelectorAll('.link-card').forEach((card) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const link = e.currentTarget;
    if (link && link.href) {
      window.open(link.href, '_blank');
    }
  });
});

/************************************
 * 2. SCROLL TO TOP FUNCTIONALITY
 ************************************/
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  // Show the button after scrolling 300px
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/************************************
 * 3. DARK MODE TOGGLE (OPTIONAL)
 ************************************/
const toggleButton = document.getElementById('theme-toggle');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleButton.textContent = document.body.classList.contains('light-mode')
      ? 'Switch to Dark Mode'
      : 'Switch to Light Mode';
  });
}
