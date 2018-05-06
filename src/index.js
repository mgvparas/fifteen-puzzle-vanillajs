const board = new Board();
board.shuffle();

const boardComponent = new BoardComponent(board);
const main = document.getElementsByClassName("main")[0];
boardComponent.render(main);