const grid = document.querySelector('.grid');
const gridItems = Array.from(grid.querySelectorAll('.grid-item'));
const expandButton = document.getElementById('expand-button');
const realizationSection = document.querySelector('.realizacje');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const realizacje = document.getElementById('realizacje');
const searchIcon = document.getElementById('search-icon');
const searchPlace = document.getElementById('search-place');

var currentSlide = 0;
        var slides = document.querySelectorAll('.my-carousel-item');
        var carouselSlide = document.querySelector('.my-carousel-slide');
        var slideWidth = slides[0].clientWidth; // Assuming all slides have the same width

        function showSlide(slideIndex) {
            if (slideIndex < 0) {
                currentSlide = slides.length - 1;
            } else if (slideIndex >= slides.length) {
                currentSlide = 0;
            } else {
                currentSlide = slideIndex;
            }

            var translateXValue = -currentSlide * slideWidth;
            carouselSlide.style.transform = `translateX(${translateXValue}px)`;

            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('my-active');
            }
            slides[currentSlide].classList.add('my-active');
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        // Show the initial slide
        showSlide(currentSlide);

let expanded = false;

  function toggleExpand() {
    if (expanded) {
        realizationSection.style.maxHeight = '150vh';
        expandButton.innerHTML = 'Rozwiń <i class="fas fa-arrow-down"></i>';
        realizacje.classList.remove('gradient-hidden');
        expandButton.style.backgroundColor = 'transparent'
        expandButton.style.color = 'black'
    } else {
        realizationSection.style.maxHeight = '100%';
        expandButton.innerHTML = 'Zwiń <i class="fas fa-arrow-up"></i>';
        expandButton.style.backgroundColor = 'black'
        expandButton.style.color = 'white'
        realizacje.classList.add('gradient-hidden');
    }
        expanded = !expanded;
        msnry.layout();
    }

    expandButton.addEventListener('click', toggleExpand);

    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
          itemSelector: '.grid-item',
          gutter: 30,
          fitWidth: true
        });
      }
    };



var popup = document.getElementById('popup');
var popupImage = document.getElementById('popup-image');
var closePopup = document.querySelector('.close-popup');
var currentImageIndex = 0;


  function showImage(index) {
      popupImage.src = gridItems[index].querySelector('img').src;
      currentImageIndex = index;
  }

  gridItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
          showImage(index);
          popup.style.display = 'flex';
      });
  });

  closePopup.addEventListener('click', function() {
      popup.style.display = 'none';
  });

  prevButton.addEventListener('click', function() {
      if (currentImageIndex > 0) {
          showImage(currentImageIndex - 1);
      }
  });

  nextButton.addEventListener('click', function() {
      if (currentImageIndex < gridItems.length - 1) {
          showImage(currentImageIndex + 1);
      }
  });

  searchIcon.addEventListener('click', function(){
    searchPlace.classList.toggle('show-search')
  });



const navbarToggler = document.querySelector('.navbar-toggler-icon');
const collapse = document.querySelector('.collapse')

let navbarToggled = false

  function navbarToggle(){
    if(navbarToggled){
      collapse.style.display = 'none';
    }else{
      collapse.style.display = 'block';
    }

    navbarToggled = !navbarToggled
  }

  navbarToggler.addEventListener('click', navbarToggle);


  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu')

  let dropdownToggled = false

  function dropdown(){
    if(dropdownToggled){
      dropdownMenu.style.display = 'none';
    }else{
      dropdownMenu.style.display = 'block';
    }

    dropdownToggled = !dropdownToggled
  }

  dropdownToggle.addEventListener('click', dropdown);



  // Select all sections with the "section" class
const sections = document.querySelectorAll('.section');

// Configuration for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3 // Adjust this threshold as needed
};

// Callback function for the Intersection Observer
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // When a section becomes visible in the viewport, add the "visible" class
      entry.target.classList.add('visible');
    }
  });
}

// Create the Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, options);

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});