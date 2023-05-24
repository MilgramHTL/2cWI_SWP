document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    let currentPlayer = "X";
    let isGameOver = false;

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (!isGameOver && cell.innerHTML === "") {
                cell.innerHTML = currentPlayer;
                cell.style.color = currentPlayer === "X" ? "red" : "blue";
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                checkWinner();
            }
        });
    });
});