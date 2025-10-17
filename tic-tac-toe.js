document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.querySelector('.btn');
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    
    // Winning combinations
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    // Layout the board
    squares.forEach(function(square) {
        square.classList.add('square');
    });
    
    // Check for winner
    function checkWinner() {
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                gameActive = false;
                statusDiv.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                statusDiv.classList.add('you-won');
                return true;
            }
        }
        return false;
    }
    
    // Add click event to each square
    squares.forEach(function(square, index) {
        square.addEventListener('click', function() {
            if (gameState[index] === '' && gameActive) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;
                
                if (!checkWinner()) {
                    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
                }
            }
        });
        
        // Add hover effect
        square.addEventListener('mouseover', function() {
            if (gameState[index] === '') {
                square.classList.add('hover');
            }
        });
        
        square.addEventListener('mouseleave', function() {
            square.classList.remove('hover');
        });
    });
    
    // Restart game
    newGameButton.addEventListener('click', function() {
        gameState = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
        
        squares.forEach(function(square) {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
    });
});