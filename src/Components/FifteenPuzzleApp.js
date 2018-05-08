class FifteenPuzzleApp {
    constructor() {
        this.configuration = {};
        this.boards = [];
    }

    render(parentNode) {
        const appDiv = document.createElement('div');
        appDiv.classList.add('app');
        
        const configFormComponent = new ConfigurationFormComponent(
            (e) => this._handleFormChange(e),
            () => this._handleGeneratePuzzleClick(appDiv)
        );
        configFormComponent.render(appDiv);

        const boardsHeader = document.createElement('h3');
        boardsHeader.appendChild(document.createTextNode('Puzzles'));
        appDiv.appendChild(boardsHeader);

        this._renderBoards(appDiv);

        parentNode.appendChild(appDiv);
    }

    _renderBoards(appDiv) {
        for(const board of this.boards) {
            const boardComponent = new BoardComponent(board);
            boardComponent.render(appDiv);
        }
    }

    _handleFormChange(e) {
        console.log('change event fired');
        console.log(e);
    }

    _handleGeneratePuzzleClick(appDiv) {
        const board = new Board();
        board.shuffle();

        console.log('New puzzle generated.');

        this.boards.push(board);
        this._renderBoards(appDiv);
    }
}