



document.getElementById("img_1").addEventListener("mouseover", img1);
document.getElementById("img_1").addEventListener("mouseout", img2);

function img1() {
    let img = document.getElementById("img_1");
    img.style.transform = "scale(1.1)"; 
    img.style.transition = "transform 0.3s ease"; 
}

function img2() {
    document.getElementById("img_1").style.transform = "scale(1)";
}



const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');


let currentIndex = 0;

function showItem(index) {
 
  carouselItems.forEach((item) => {
    item.style.display = 'none';
  });
  

  carouselItems[index].style.display = 'block';
}


function nextItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
}


function prevItem() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);
}

// Agrega botones de navegación
const prevButton = document.createElement('button');
prevButton.textContent = '<';
prevButton.classList.add('control', 'anterior');
carousel.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.textContent = '>';
nextButton.classList.add('control', 'siguiente');
carousel.appendChild(nextButton);


prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);

let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  if (endX < startX) {
    nextItem();
  } else if (endX > startX) {
    prevItem();
  }
});

carousel.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});

carousel.addEventListener('mouseup', (e) => {
  endX = e.clientX;
  if (endX < startX) {
    nextItem();
  } else if (endX > startX) {
    prevItem();
  }
});


showItem(currentIndex);


setInterval(nextItem, 4000);