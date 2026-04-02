function sendWhatsApp(){
  let name=document.getElementById("name").value;
  let idea=document.getElementById("idea").value;
  let budget=document.getElementById("budget").value;

  let msg=`Name: ${name}%0AIdea: ${idea}%0ABudget: ${budget}`;
  window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`,'_blank');
}

/* SCROLL FADE ANIMATION */
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});