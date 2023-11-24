// Generate a random number between 1 and 10
let correctNumber = Math.floor(Math.random() * 10) + 1;

let chances = 3;
let gameOver = false;

function checkGuess() {
  if (gameOver) {
    return;
  }

  const userGuessInput = document.getElementById('guess');
  const userGuess = parseInt(userGuessInput.value);

  // Validate user input
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert('Please enter a valid number between 1 and 10.');
    return;
  }

  // Check if the guess is correct
  if (userGuess === correctNumber) {
    displayResult('Congratulations! You guessed the correct number.', true);
  } else {
    // Provide feedback on the guess
    chances--;
    if (chances === 0) {
      displayResult(`Sorry, you ran out of chances. The correct number was ${correctNumber}.`, false);
      gameOver = true;
      document.getElementById('retryButton').disabled = false;
    } else {
      const hint = userGuess < correctNumber ? 'higher' : 'lower';
      displayResult(`Wrong guess! Try again. Hint: The correct number is ${hint}. Chances left: ${chances}`, false);
    }
  }
}

function displayResult(message, success) {
  const resultElement = document.getElementById('result');
  resultElement.style.color = success ? 'green' : 'red';
  resultElement.textContent = message;
}

function retryGame() {
  chances = 3;
  gameOver = false;
  document.getElementById('result').textContent = '';
  document.getElementById('retryButton').disabled = true;
  document.getElementById('guess').value = '';
  correctNumber = Math.floor(Math.random() * 10) + 1;
}
