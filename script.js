
// Carousel.js

// 1. Your carousel data
const carouselItems = [
  {
    title: "Embedded Systems project",
    description: "Project for embedded systems class",
    imageURL: "images/project1.jpg",
    linkURL: "https://github.com/yourrepo1"
  },
  {
    title: "Web App project",
    description: "A JavaScript-based single-page app",
    imageURL: "images/project2.jpg",
    linkURL: "https://github.com/yourrepo2"
  },
  // Add more projects here...
];

// 2. Reusable init function
function initCarousel(items) {
  let currentIndex = 0;

  // Get elements from the DOM
  const titleEl = document.querySelector('.card .title');
  const descEl = document.querySelector('.card .description');
  const imgEl = document.querySelector('.card .image');
  const linkEl = document.querySelector('.card .link');
  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');

  // Render a card based on index
  function showCard(index) {
    const item = items[index];
    titleEl.textContent = item.title;
    descEl.textContent = item.description;
    imgEl.src = item.imageURL;
    linkEl.href = item.linkURL;
    linkEl.textContent = "View Project";
  }

  // Initial render
  showCard(currentIndex);

  // Event listeners
  leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showCard(currentIndex);
  });

  rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showCard(currentIndex);
  });
}

// 3. Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initCarousel(carouselItems);
});
