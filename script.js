// botao menu index
const btnMobile = document.getElementById(`btn-mobile`)

function toggleMenu(event) {
  if (event.type === `touchstart`) event.preventDefault()
  const nav = document.getElementById(`nav`)
  nav.classList.toggle(`active`)
  const active = nav.classList.contains(`active`)
  event.currentTarget.setAttribute(`aria-expanded`, active)
  if (active) {
    event.currentTarget.setAttribute(`aria-label`, `Fechar Menu`)
  } else {
    event.currentTarget.setAttribute(`aria-label`, `Abrir Menu`)
  }
}

btnMobile.addEventListener(`click`, toggleMenu)
btnMobile.addEventListener(`touchstart`, toggleMenu)

//pegar os preços

var diariaSilver = document.getElementById('dsilver').textContent
var diariaGold = document.getElementById('dgold').textContent
var diariaPlatinum = document.getElementById('dplatinum').textContent

var mensalSilver = document.getElementById('msilver').textContent
var mensalGold = document.getElementById('mgold').textContent
var mensalPlatinum = document.getElementById('mplatinum').textContent

var bimestralSilver = document.getElementById('bsilver').textContent
var bimestralGold = document.getElementById('bgold').textContent
var bimestralPlatinum = document.getElementById('bplatinum').textContent

var trimestralSilver = document.getElementById('tsilver').textContent
var trimestralGold = document.getElementById('tgold').textContent
var trimestralPlatinum = document.getElementById('tplatinum').textContent

var semestralSilver = document.getElementById('ssilver').textContent
var semestralGold = document.getElementById('sgold').textContent
var semestralPlatinum = document.getElementById('splatinum').textContent

var anualSilver = document.getElementById('asilver').textContent
var anualGold = document.getElementById('agold').textContent
var anualPlatinum = document.getElementById('aplatinum').textContent

localStorage.setItem(`dsilver`, diariaSilver)
localStorage.setItem(`dgold`, diariaGold)
localStorage.setItem(`dplatinum`, diariaPlatinum)

localStorage.setItem(`msilver`, mensalSilver)
localStorage.setItem(`mgold`, mensalGold)
localStorage.setItem(`mplatinum`, mensalPlatinum)

localStorage.setItem(`bsilver`, bimestralSilver)
localStorage.setItem(`bgold`, bimestralGold)
localStorage.setItem(`bplatinum`, bimestralPlatinum)

localStorage.setItem(`tsilver`, trimestralSilver)
localStorage.setItem(`tgold`, trimestralGold)
localStorage.setItem(`tplatinum`, trimestralPlatinum)

localStorage.setItem(`ssilver`, semestralSilver)
localStorage.setItem(`sgold`, semestralGold)
localStorage.setItem(`splatinum`, semestralPlatinum)

localStorage.setItem(`asilver`, anualSilver)
localStorage.setItem(`agold`, anualGold)
localStorage.setItem(`aplatinum`, anualPlatinum)
