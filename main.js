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
    promptText.innerText = 'I told you not to press it!'
    buttonTwoOne.style.display = 'block'
    buttonTwoTwo.style.display = 'block'
    buttonOne.style.display = 'none'
}

function stepTwo() {
    
}

function stepThree() {

}

function stepFour() {

}

function stepFive() {

}

function stepSix() {

}

function stepSeven() {

}

function stepEight() {

}

function stepNine() {

}

function stepTen() {

}

function stepEleven() {

}