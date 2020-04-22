const swal= require('sweetalert2')
const h1= document.createElement('a');
h1.innerHTML= "795647613"
h1.href="tel: +48795647613";
console.log(h1.href)
const tel= document.querySelector('.fa-phone');
console.log(tel)
tel.addEventListener('click', ()=> {
    swal.fire({
        html: 'click above to call',
        title: h1,
        width: "300px",
        background: '#FF4500',
        showConfirmButton: false,
        showCloseButton: "true"
        
    })
})

const sidenav = document.querySelector('.sidebarnav')
const el = document.querySelector('.hamburger');

const addClass = () => {
    el.classList.toggle('hamburger--active');
    sidenav.classList.toggle('sidebarnav--active')
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

// let slideIndex = 1;

// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// prev.addEventListener('click', ()=> {
//     plusSlides(-1)
// });
// next.addEventListener('click', ()=> {
//     plusSlides(1)
// });


// showSlides();
// // Next/previous controls

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// // Thumbnail image controls

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }





// super smooth scrool on IE!!!!

const navlinks= document.querySelectorAll('.navlinks')

navlinks.forEach(e => e.addEventListener('click', navLinkClick));


// jesli jest napisana jako arrow funct to nie dziala :(
function navLinkClick() {
    smoothScroll(event)
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
    
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      // window.scrollTo(0, distance*(progress/duration) + startPosition);
      window.scrollTo(0, linear(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  }
  
  // Easing Functions
  
  function linear(t, b, c, d) {
      return c*t/d + b;
  };
  
  function easeInOutQuad(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
  };
  
  function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
  };










//   <div id="gallery" class="gallery">
//   <div class="slideshow-container">

//       <!-- Full-width images with number and caption text -->
//       <div class="mySlides fade">
//           <img src="img/auto-2-002-compressor.jpg">
//       </div>

//       <div class="mySlides fade">
//           <img src="img/auto-2-004-compressor.jpg">
//       </div>

//       <div class="mySlides fade">
//           <img src="img/auto-012-compressor.jpg">
//       </div>
//       <div class="mySlides fade">
//           <img src="img/auto-017-compressor.jpg">
//       </div>
//       <div class="mySlides fade">
//           <img src="img/auto-012-compressor.jpg">
//       </div>
//       <div class="mySlides fade">
//           <img src="img/auto-010-compressor.jpg">
//       </div>

//       <!-- Next and previous buttons -->
//       <a class="prev">&#10094;</a>
//       <a class="next">&#10095;</a>
//   </div>
//   <br>
// </div>