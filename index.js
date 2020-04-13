const closenav = document.querySelector('.closenav')
const sidenav = document.querySelector('.sidebarnav')
const el = document.querySelector('.hamburger');

const addClass = () => {
    el.classList.toggle('hamburger--active');
    sidenav.classList.toggle('sidebarnav--active')
    nav.classList.toggle('nav--actv')
}
el.addEventListener('click', addClass)
sidenav.addEventListener('click', addClass)



function debounce(func, wait = 30, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }



//our side  bar
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(event) {
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.clientHeight / 2
        // daje nam ilosc px (w polowie obrazka)przy ktorej mamy uruchomic slide in obrazka
        const imageBottom = sliderImage.offsetTop + sliderImage.clientHeight //bottom of the image
        const isHalfShown = slideInAt > sliderImage.offsetTop
        const isNotScrolledPast = window.scrollY < imageBottom
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active')
        } else {
            sliderImage.classList.remove("active")
        }
    })
}
window.addEventListener('scroll', checkSlide) // loguje event scroll




//carousel gallery

let slideIndex = 1;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', ()=> {
    plusSlides(-1)
});
next.addEventListener('click', ()=> {
    plusSlides(1)
});


showSlides();
// Next/previous controls

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls

function currentSlide(n) {
    showSlides(slideIndex = n);
}
