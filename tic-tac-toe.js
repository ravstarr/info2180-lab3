document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    const gameState = ['', '', '', '', '', '', '', '', ''];
    
    // Layout the board
    squares.forEach(function(square) {
        square.classList.add('square');
    });
    
    // Add click event to each square
    squares.forEach(function(square, index) {
        square.addEventListener('click', function() {
            if (gameState[index] === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
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
});