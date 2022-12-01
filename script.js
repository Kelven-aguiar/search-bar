// get filter element
const filter = document.querySelector('#filter')
// get cards elements
const cards = document.querySelectorAll('.cards li')
console.log(cards)
// add input event for the filter element
filter.addEventListener('input', inputFilter)
// filter function
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

}

  // if the filter is not empty

    // for each card of cards

      // get card heading (title)

      // tranform to lower case

      // transform filter text to lower case
      
      // if card title does not include the filter text
        // hide the card element
      // else
        // unhide the card element
  // else
    // for each card of cards
      // unhide the card element