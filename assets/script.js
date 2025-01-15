const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlideIndex = 0;
const bannerEl = document.getElementById('banner')


function createFirstSlide() {
  const img = document.createElement('img');
  img.src = "assets/images/slideshow/" + slides[0].image;
  img.alt = slides[0].tagLine;
  img.classList.add('banner-img');

  const tagLine = document.createElement('p');
  tagLine.setAttribute('id','tagLine');
  tagLine.innerHTML = slides[0].tagLine;
  
  bannerEl.appendChild(img);
  bannerEl.appendChild(tagLine);
}

function updateSlide() {
  const tagLineEl = document.getElementById('tagLine')
  const img = document.querySelector('.banner-img');
  if (img) {
    img.src = `assets/images/slideshow/${slides[currentSlideIndex].image}`; 
    const imagePath = `assets/images/slideshow/${slides[currentSlideIndex].image}`;
    console.log(`Setting img.src to: ${imagePath}`);  // Log to confirm the image path
    img.src = imagePath;  // Set the image source
  } else {
    console.log('Image element not found!');
  }
  tagLineEl.innerHTML = slides[currentSlideIndex].tagLine; 
  generateDots()
}

function addEventArrowLeft(){
let leftArrowClick = document.getElementById("leftArrow");
leftArrowClick.addEventListener("click", function () {
  if (currentSlideIndex== 0) {
    currentSlideIndex = slides.length -1; 
  }
  else { 
    currentSlideIndex -= 1;
  }
  updateSlide();
})
}

function addEventArrowRight(){
let rightArrowClick = document.getElementById("rightArrow");
rightArrowClick.addEventListener("click", function () {
    if (currentSlideIndex === slides.length -1) {
      currentSlideIndex = 0; 
    }
    else { 
      currentSlideIndex += 1;
    }
    updateSlide();
  })
}

let totalDots = 4; 
function generateDots() {
  const dotsContainer = document.querySelector('.dots');
  dotsContainer.innerHTML = ''; 
  for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === currentSlideIndex) {
          dot.classList.add('dot_selected');
      }
      dotsContainer.appendChild(dot);
  }
}

function init() {
  createFirstSlide();
  generateDots();
  addEventArrowLeft();
  addEventArrowRight();
}
init();