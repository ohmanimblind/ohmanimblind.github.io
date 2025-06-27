
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
      title: "Course: CS10A-C",
    description: "UCR's intro to programming course series, consisting of understanding essential programming concepts. Topics such as pointers, memory allocation, Object-Oriented programming, and abstract data structures.",
    imageURL: "images/project2.jpg",
    linkURL: "https://github.com/yourrepo2"
  },
  // Add more projects here...
  {
     title: "Course: MATH 147",
     description: "Intro to Fourier Analysis the most difficult class I've ever taken. The course focused on a proof based approach establishing the fundamentals of Fourier Analysis. Our final project was a paper, where I focused on the importance of the Short Time Fourier Transform for Audio Preproccesing.",
    imageURL: "pending",
    linkURL: "https://drive.google.com/file/d/1CN79SwkrvZmQVpsmyIGZJn95aBvKUpYU/view?usp=sharing"
  },
  {
 	title: "Course: MATH 131, 132",
	description: "The Linear Alebra Series. The orginal reason why I pursued a math minor, 131 focused on fundamental concepts such as Fields, Vector Spaces, Mappings, etc. 132 revolved around Eigentheory, Inner-Product theory, and Spectral Theory.",
  	imageURL: "N/A",
	linkURL: "N/A",
  },
  {
	title: "Course: CS147",
	description: "GPU Programming was a fantastic, practical course that I enjoyed taking. Four projects focusing on key GPU concepts, and a final project of our choosing. Using my knowledge from Fourier Analysis, my final project was Audio Preproccesing for Classification models",
	imageURL: "N/A",
  	linkURL: "https://github.com/ohmanimblind/CS147-FinalProject", 
  },
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
