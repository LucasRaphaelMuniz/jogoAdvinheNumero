//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const textTentativas = document.querySelector(".textTentativas")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// função
function handleTryClick(event) {
  event.preventDefault() // não faça o padrao

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativas`
    
  } else {
    textTentativas.classList.remove("hide")
    document.querySelector(".screen1 h3").innerText = `Tentativa ${xAttempts}, número errado, tente novamente.`
  }
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  textTentativas.classList.add("hide")
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

