const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;
const itemsToShow = 3;

nextBtn.addEventListener('click', () => {
  if (index < track.children.length - itemsToShow) {
    index++;
    track.style.transform = `translateX(-${index * (100 / itemsToShow)}%)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * (100 / itemsToShow)}%)`;
  }
});

