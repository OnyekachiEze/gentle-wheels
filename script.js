// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('far-times');
//     navbar.classList.toggle('active');
// }

// document.querySelector('#login-btn').onclick = () => {
//     document.querySelector('.login-form-container').classList.toggle('active');
// }

// document.querySelector('#lclose-login-form').onclick = () => {
//     document.querySelector('.login-form-container').classList.remove('active');
// }


let slidE = document.querySelector('.navbar');
 function toggle1(){
    slidE.classList.toggle('navbar-slide');
 }


// window.onscroll = () => {

//     if (window.scrollY > 0) {
//         document.querySelector(.header).classList.add('active');
//     } else {
//         document.querySelector(.header).classList.remove('active');
//     }
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }


// window.onload = () => {

//     if (window.scrollY > 0) {
//         document.querySelector(.header).classList.add('active');
//     }
//     else {
//         document.querySelector(.header).classList.remove('active');
//     }

// }

// document.querySelector('.home').onmousemove = (e) =>{

//     document.querySelectorALL('.home-parallax').forEach(elm => {

//         let speed = elm.getAttribute('data-speed');

//         let x = (window.innerWidth - e.pageX * speed) / 90;
//         let y = (window.innerHeight - e.pageY * speed) / 90;

//         elm.style.transform = 'translateX(${y}px) translateY(${x}px)';


//     });
// };


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
