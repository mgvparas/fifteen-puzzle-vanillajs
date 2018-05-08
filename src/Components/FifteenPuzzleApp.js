class FifteenPuzzleApp {
    constructor() {
        const board = new Board();
        board.shuffle();

        this.boards = [board];
    }

    render(parentNode) {
        const appDiv = document.createElement('div');
        appDiv.classList.add('app');
        
        const configFormComponent = new ConfigurationFormComponent();
        configFormComponent.render(appDiv);

        const boardsHeader = document.createElement('h3');
        boardsHeader.appendChild(document.createTextNode('Puzzles'));
        appDiv.appendChild(boardsHeader);

        for(const board of this.boards) {
            const boardComponent = new BoardComponent(board);
            boardComponent.render(appDiv);
        }

        parentNode.appendChild(appDiv);
    }
}