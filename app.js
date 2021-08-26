// Game values
let min = 1,
    max = 10,
    winingNum = 2
    guessesLeft = 3

// Ui elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message')


// assign Ui min and max
minNum.textContent = min;
maxNum.textContent = max

// Listen for guess

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value)
    console.log(guess)

    
    // Validate Input
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    // check if won

    if(guess === winingNum){
        // dissable input
        guessInput.disabled = true
        // change border color
        guessInput.style.borderColor = 'green'
        // set message
        setMessage(`${winingNum} is correct, YOU WIN !`, 'green')

    }else{

    }
})

// set Message
function setMessage(msg, color) {
    message.style.color = color
    message.textContent = msg
}