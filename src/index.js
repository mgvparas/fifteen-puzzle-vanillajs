const main = document.getElementsByClassName("main")[0];

const board = new Board();
board.shuffle();
const boardComponent = new BoardComponent(board);
boardComponent.render(main);

// const secondBoard = new Board();
// secondBoard.shuffle();
// const secondBoardComponent = new BoardComponent(secondBoard);
// secondBoardComponent.render(main);