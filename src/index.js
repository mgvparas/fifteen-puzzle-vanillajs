const main = document.getElementsByClassName("main")[0];

const app = new FifteenPuzzleApp();
app.render(main);

main.appendChild(document.createElement('hr'));

const board = new Board();
board.shuffle();
const boardComponent = new BoardComponent(board);
boardComponent.render(main);

// const secondBoard = new Board();
// secondBoard.shuffle();
// const secondBoardComponent = new BoardComponent(secondBoard);
// secondBoardComponent.render(main);