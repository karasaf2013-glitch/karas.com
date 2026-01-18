let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");

    let guess = Number(guessInput.value);
    attempts++;

    if (!guess || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    if (guess < numberToGuess) {
        feedback.textContent = "Too low! Try again.";
    } else if (guess > numberToGuess) {
        feedback.textContent = "Too high! Try again.";
    } else {
        feedback.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts!`;
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
    guessInput.focus();
}

function resetGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("feedback").textContent = '';
    document.getElementById("attempts").textContent = 'Attempts: 0';
    document.getElementById("guessInput").value = '';
}

