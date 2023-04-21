const carousel = document.querySelector('#carouselExampleIndicators');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const carouselIndicators = carousel.querySelectorAll('.carousel-indicators button');
let currentIndex = 0;

function showItem(index) {
  // Remove the "active" class from all carousel items and indicators
  carouselItems.forEach(item => {
    item.classList.remove('active');
  });
  carouselIndicators.forEach(indicator => {
    indicator.classList.remove('active');
  });
  // Add the "active" class to the specified carousel item and indicator
  carouselItems[index].classList.add('active');
  carouselIndicators[index].classList.add('active');
  // Update the current index
  currentIndex = index;
}

// Set up the event listener for the indicators
carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showItem(index);
  });
});

// Set up the auto-sliding interval
const interval = 2000; // change this value to adjust the interval
setInterval(() => {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= carouselItems.length) {
    nextIndex = 0;
  }
  showItem(nextIndex);
}, interval)