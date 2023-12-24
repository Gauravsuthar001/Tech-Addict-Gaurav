// Get all cards
const cards = document.querySelectorAll('.anim');

// Function to check if an element is in the viewport
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to handle card animation
const showCardsOnScroll = () => {
  cards.forEach((card) => {
    if (isInViewport(card)) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
};

// Initial check when the page loads
showCardsOnScroll();

// Event listener for scroll
window.addEventListener('scroll', showCardsOnScroll);
