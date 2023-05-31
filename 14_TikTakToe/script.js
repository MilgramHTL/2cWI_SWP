let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  
  let currentPlayer = 1;
  let isGameOver = false;
  
  function checkWinner(board) {
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] !== 0 &&
        board[row][0] === board[row][1] &&
        board[row][1] === board[row][2]
      ) {
        return board[row][0];
      }
    }
  
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] !== 0 &&
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col]
      ) {
        return board[0][col];
      }
    }
  
    if (
      board[0][0] !== 0 &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return board[0][0];
    }
  
    if (
      board[0][2] !== 0 &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return board[0][2];
    }
  
    return null;
  }
  
  function printField() {
    for (let row = 0; row < field.length; row++) {
      let actualRow = field[row];
      let output = "";
      for (let col = 0; col < actualRow.length; col++) {
        let sign = " ";
        if (actualRow[col] === 1) {
          sign = "O";
        } else if (actualRow[col] === 2) {
          sign = "X";
        }
  
        output += sign + " | ";
      }
      console.log(output);
    }
  }
  
  function announceWinner(player) {
    console.log(`Spieler ${player} hat gewonnen!`);
  }
  
  function announceDraw() {
    console.log("Unentschieden!");
  }
  
  while (checkWinner(field) !== 1 && checkWinner(field) !== 2) {
    printField();
    console.log("Player", currentPlayer, "Reihe:  ");
    let input_row = prompt();
    console.log("Player", currentPlayer, "Spalte:  ");
    let input_column = prompt();
    field[input_row][input_column] = currentPlayer;
    console.log("");
  
    if (checkWinner(field) === 1) {
      console.log("Player 1 hat gewonnen!");
      printField();
      break;
    }
  
    if (checkWinner(field) === 2) {
      console.log("Player 2 hat gewonnen!");
      printField();
      break;
    }
  
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }
  
  if (checkWinner(field) === null) {
    console.log("Unentschieden!");
  }