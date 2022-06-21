// inscrição

let select = document.getElementById(`chosen-plan`)
let plan = select.options[select.selectedIndex].value
console.log(select)
let selectCategory = document.getElementById(`category`)
let category = selectCategory.options[select.selectedIndex].value

let diariaSilver = localStorage.getItem(`dsilver`)
let diariaGold = localStorage.getItem(`dgold`)
let diariaPlatinum = localStorage.getItem(`dplatinum`)

let mensalSilver = localStorage.getItem(`msilver`)
let mensalGold = localStorage.getItem(`mgold`)
let mensalPlatinum = localStorage.getItem(`mplatinum`)

let bimestralSilver = localStorage.getItem(`bsilver`)
let bimestralGold = localStorage.getItem(`bgold`)
let bimestralPlatinum = localStorage.getItem(`bplatinum`)

let trimestralSilver = localStorage.getItem(`tsilver`)
let trimestralGold = localStorage.getItem(`tgold`)
let trimestralPlatinum = localStorage.getItem(`tplatinum`)

let semestralSilver = localStorage.getItem(`ssilver`)
let semestralGold = localStorage.getItem(`sgold`)
let semestralPlatinum = localStorage.getItem(`splatinum`)

let anualSilver = localStorage.getItem(`asilver`)
let anualGold = localStorage.getItem(`agold`)
let anualPlatinum = localStorage.getItem(`aplatinum`)

if (plan == 'diaria' && category == 'prata') {
  price.innerHTML = diariaSilver
}

select.onchange = function () {
  plan = this.value
  result()
}

selectCategory.onchange = function () {
  category = this.value
  result()
}

result = function () {
  if (plan == `diaria` && category == `prata`) {
    price.innerHTML = diariaSilver
  } else if (plan == `diaria` && category == `ouro`) {
    price.innerHTML = diariaGold
  } else if (plan == `diaria` && category == `platinum`) {
    price.innerHTML = diariaPlatinum
  }

  if (plan == `mensal` && category == `prata`) {
    price.innerHTML = mensalSilver
  } else if (plan == `mensal` && category == `ouro`) {
    price.innerHTML = mensalGold
  } else if (plan == `mensal` && category == `platinum`) {
    price.innerHTML = mensalPlatinum
  }

  if (plan == `bimestral` && category == `prata`) {
    price.innerHTML = bimestralSilver
  } else if (plan == `bimestral` && category == `ouro`) {
    price.innerHTML = bimestralGold
  } else if (plan == `bimestral` && category == `platinum`) {
    price.innerHTML = bimestralPlatinum
  }

  if (plan == `trimestral` && category == `prata`) {
    price.innerHTML = trimestralSilver
  } else if (plan == `trimestral` && category == `ouro`) {
    price.innerHTML = trimestralGold
  } else if (plan == `trimestral` && category == `platinum`) {
    price.innerHTML = trimestralPlatinum
  }

  if (plan == `semestral` && category == `prata`) {
    price.innerHTML = semestralSilver
  } else if (plan == `semestral` && category == `ouro`) {
    price.innerHTML = semestralGold
  } else if (plan == `semestral` && category == `platinum`) {
    price.innerHTML = semestralPlatinum
  }

  if (plan == `anual` && category == `prata`) {
    price.innerHTML = anualSilver
  } else if (plan == `anual` && category == `ouro`) {
    price.innerHTML = anualGold
  } else if (plan == `anual` && category == `platinum`) {
    price.innerHTML = anualPlatinum
  }
}
