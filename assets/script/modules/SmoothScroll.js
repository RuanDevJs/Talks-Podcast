export default function SmoothScroll(){
  const elements = document.querySelectorAll('[data-scroll]');

  window.addEventListener('scroll', e => {
    elements.forEach(el => {
      const distance = el.offsetTop;
      
      if(window.pageYOffset > (distance - 300)){
        el.classList.add("activeScroll")
      }
    }) 
  })
}