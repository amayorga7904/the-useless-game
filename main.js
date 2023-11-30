const BUTTON_ONE = 'button-one'
const BUTTON_TWO_ONE = 'button-two-one'
const BUTTON_TWO_TWO = 'button-two-two'
const BUTTON_THREE_ONE = 'button-three-one'
const BUTTON_THREE_TWO = 'button-three-two'
const BUTTON_THREE_THREE = 'button-three-three'
const BUTTON_FOUR_ONE = 'button-four-one'
const BUTTON_FOUR_TWO = 'button-four-two'
const BUTTON_FOUR_THREE = 'button-four-three'
const BUTTON_FOUR_FOUR = 'button-four-four'
const BUTTON_OVER = 'button-over'
const PROMPT_TEXT = 'prompt'
const HINT = 'hint'


const buttonOne = document.getElementById(BUTTON_ONE)
const buttonTwoOne = document.getElementById(BUTTON_TWO_ONE)
const buttonTwoTwo = document.getElementById(BUTTON_TWO_TWO)
const buttonThreeOne = document.getElementById(BUTTON_THREE_ONE)
const buttonThreeTwo = document.getElementById(BUTTON_THREE_TWO)
const buttonThreeThree = document.getElementById(BUTTON_THREE_THREE)
const buttonFourOne = document.getElementById(BUTTON_FOUR_ONE)
const buttonFourTwo = document.getElementById(BUTTON_FOUR_TWO)
const buttonFourThree = document.getElementById(BUTTON_FOUR_THREE)
const buttonFourFour = document.getElementById(BUTTON_FOUR_FOUR)
const buttonOver = document.getElementById(BUTTON_OVER)
const promptText = document.getElementById(PROMPT_TEXT)
const hint = document.getElementById(HINT)

buttonOne.addEventListener('click', startGame)
buttonTwoOne.addEventListener('click', stepTwo)
buttonTwoTwo.addEventListener('click', stepThree)
buttonThreeOne.addEventListener('click', stepFour)
buttonThreeTwo.addEventListener('click', stepFive)
buttonThreeThree.addEventListener('click', stepSix)
buttonFourOne.addEventListener('click', stepSeven)
buttonFourTwo.addEventListener('click', stepEight)
buttonFourThree.addEventListener('click', stepNine)
buttonFourFour.addEventListener('click', stepTen)
buttonOver.addEventListener('click', stepEleven)

// buttonTwoOne.disabled = true
buttonTwoOne.style.display = 'none'
buttonTwoTwo.style.display = 'none'
buttonThreeOne.style.display = 'none'
buttonThreeTwo.style.display = 'none'
buttonThreeThree.style.display = 'none'
buttonFourOne.style.display = 'none'
buttonFourTwo.style.display = 'none'
buttonFourThree.style.display = 'none'
buttonFourFour.style.display = 'none'
buttonOver.style.display = 'none'

promptText.innerText = 'Welcome!'

function startGame() {
    promptText.innerText = 'I Told You Not To Press It!'
    buttonTwoOne.style.display = 'block'
    buttonTwoTwo.style.display = 'block'
    buttonOne.style.display = 'none'
    buttonOver.style.display = 'none'
}

function stepTwo() {
    buttonTwoOne.innerText = 'NOT THIS ONE'
}

function stepThree() {
    promptText.innerText = 'Feeling Ballsy?'
    buttonTwoOne.style.display = 'none'
    buttonTwoTwo.style.display = 'none'
    buttonThreeOne.style.display = 'block'
    buttonThreeThree.style.display = 'block'
}

function stepFour() {
    myAudio.play()
    buttonThreeOne.innerText = 'HA! GOT EM'
}

function stepFive() {
    promptText.innerText = 'I\'m Surprised You\'re Still Here'
    buttonFourOne.style.display = 'block'
    buttonFourTwo.style.display = 'block'
    buttonFourThree.style.display = 'block'
    buttonFourFour.style.display = 'block'
    buttonThreeOne.style.display = 'none'
    buttonThreeTwo.style.display = 'none'
    buttonThreeThree.style.display = 'none'
    hint.innerText = '**hint hint**'
}

function stepSix() {
    startItUp()
    buttonThreeThree.disabled = true
}

function stepSeven() {
    buttonFourOne.innerText = 'AND IT AIN\'T THIS ONE'
}

function stepEight() {
    alert('Well this is awkward...')
    buttonFourOne.innerText = 'YOU HAVE A 50% CHANCE OF GETTING IT RIGHT'
    buttonFourThree.innerText = 'YOU HAVE A 50% CHANCE OF GETTING IT RIGHT'
}

function stepNine() {
    buttonFourOne.style.display = 'none'
    buttonFourTwo.style.display = 'none'
    buttonFourThree.style.display = 'none'
    buttonFourFour.style.display = 'none'
    buttonOver.style.display = 'block'
    hint.innerText = ''
}

function stepTen() {
    alert('Life is full of disappointments. People Lie. Just like my dad who left to get milk..')
    buttonFourTwo.innerText = 'IT\'S THIS ONE'
}

function stepEleven() {
    promptText.innerText = 'You Actually Want To Play Again?'
    buttonOne.style.display = 'block'
    buttonOver.style.display = 'none'
}

function startItUp() {
    buttonThreeThree.innerText = 'PRESS AGAIN'
    setTimeout(function() {
        firstText()
    }, 2000)
}

function firstText() {
    buttonThreeThree.innerText = 'TRY AGAIN'
    setTimeout(function() {
        nextText()
    }, 2000)
}

function firstText() {
    buttonThreeThree.innerText = 'PRESS HARDER!'
    setTimeout(function() {
        lastText()
    }, 2000)
}
function lastText() {
    buttonThreeThree.innerText = 'HARDER!!!'
    setTimeout(function() {
    buttonThreeTwo.style.display = 'block'
    }, 2000)
}