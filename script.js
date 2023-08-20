const grid = document.querySelector('.grid');
const gridItems = Array.from(grid.querySelectorAll('.grid-item'));
const expandButton = document.getElementById('expand-button');
const realizationSection = document.querySelector('.realizacje');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const realizacje = document.getElementById('realizacje');
const searchIcon = document.getElementById('search-icon');
const searchPlace = document.getElementById('search-place');

let expanded = false;

  function toggleExpand() {
    if (expanded) {
        realizationSection.style.height = '150vh';
        expandButton.innerHTML = 'Rozwiń <i class="fas fa-arrow-down"></i>';
        realizacje.classList.remove('gradient-hidden');
        expandButton.style.backgroundColor = 'transparent'
        expandButton.style.color = 'black'
    } else {
        visibleItems = gridItems.length;
        realizationSection.style.height = 'auto';
        expandButton.innerHTML = 'Zwiń <i class="fas fa-arrow-up"></i>';
        expandButton.style.backgroundColor = 'black'
        expandButton.style.color = 'white'
        realizacje.classList.add('gradient-hidden');
    }
        expanded = !expanded;
        msnry.layout();
    }

    expandButton.addEventListener('click', toggleExpand);

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
    itemSelector: '.grid-item',
    columnWidth: 500,
    gutter: 30,
    fitWidth: true
});


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

  let searchnumber = 0
  searchIcon.addEventListener('click', function(){
    searchPlace.style.position = "relative"
    searchPlace.style.opacity = "1";
    searchPlace.style.zIndex = "1";

    searchnumber += 1
    if(searchnumber > 1){
      searchEngine()
    }
  });

  function searchEngine(){
    console.log("nothing fancy there")
  }

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

let droppeddown = false

  function dropdown(){
    if(droppeddown){
      dropdownMenu.style.display = 'none';
    }else{
      dropdownMenu.style.display = 'block';
    }
    droppeddown = !droppeddown;
  }
  dropdownToggle.addEventListener('click', dropdown);


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
