const filter = document.querySelector('#filter')
const cards = document.querySelectorAll('.cards li')
filter.addEventListener('input', inputFilter)
function inputFilter(){
  if(filter != ""){cards.forEach(card => {
    let cardmin = card.querySelector('h2').textContent.toLowerCase()
    let filtermin = filter.value.toLowerCase()
    if(!cardmin.includes(filtermin)){
      card.setAttribute('Style', "display:none")
    }
    else{
      card.removeAttribute('Style')
    }
  });
  }}
