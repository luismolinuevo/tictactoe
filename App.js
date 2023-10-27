function App() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let board;
  let gameOver = false;
  let turn = "X";
  let win;

  function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    idx = event.target.id
    if (gameOver == false) {
    board[idx] = turn
    turn = turn === 'X' ? 'O' : 'X'
    // win = getWinner()
    // render()
    }
    }

  return (
    <div>
      <h1>Tic-Toe-React</h1>
      <h1>Tic-Tac-Toe</h1>
      <h2>It's X's turn!</h2>
      <div class="flex-container flex-column">
      <div class="flex-container flex-wrap" id="board" onClick={handleTurn}>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
        <button id="reset-button">reset</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, root);
