export default function moreButton(){
  const button = document.querySelector("[data-more]");
  const podcasts = document.querySelectorAll("[data-podcasts]");
  const span = document.querySelector("[data-warning]");

  let i = 0;

  button.addEventListener('click', e => {
    i++;

    if(i > (podcasts.length - 1)){
      span.classList.add("activeAdvice");
      span.innerHTML = "Não se preocupe, em breve teremos mais podcasts!";
      return;
    }

    setTimeout(() => {
      span.classList.add("activeAdvice");
      span.innerHTML = "Carregando...";
      setTimeout(() => {
      podcasts[i].classList.add("activePodcasts");
      span.innerHTML = " ";
      span.classList.remove("activeAdvice");
      }, 700)
    }, 100);

  })
}