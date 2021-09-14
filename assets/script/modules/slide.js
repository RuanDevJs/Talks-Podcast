export default function Slider(){
  let i = 0;

  const slides = document.querySelectorAll('[data-slide]');

  function slideCount(){
    i++;

    slides.forEach(el => el.classList.remove('activeSlide'));

    if(i > (slides.length - 1)){
      i = 0;
    }

    slides[i].classList.add("activeSlide")
    setTimeout(slideCount, 5000)
  }slideCount()

  
}