class FifteenPuzzleApp {
    constructor() {
        //default configurations
        this.boardComponentConfiguration = {
            tileHeight: 50,
            tileWidth: 50
        };
        this.boardConfiguration = {
            rowCount: 5,
            columnCount: 5
        };
        
        this.boards = [];
    }

    render(parentNode) {
        const appDiv = document.createElement('div');
        appDiv.classList.add('app');
        
        const configFormComponent = new ConfigurationFormComponent(
            (e) => this._handleTileConfigFormChange(e),
            (e) => this._handleBoardConfigFormChange(e),
            () => this._handleGeneratePuzzleClick(appDiv)
        );
        configFormComponent.render(appDiv);

        const boardsHeader = document.createElement('h3');
        boardsHeader.appendChild(document.createTextNode('Puzzles'));
        appDiv.appendChild(boardsHeader);

        this._renderBoards(appDiv);

        parentNode.appendChild(appDiv);
    }

    _renderBoards(appDiv) {;
        for(const board of this.boards) {
            const boardComponent = new BoardComponent(board, this.boardComponentConfiguration);
            boardComponent.render(appDiv);
        }
    }

    _handleTileConfigFormChange(e) {
        console.log(`${e.target.name} field changed. Value: ${e.target.value}`);
        
        this.boardComponentConfiguration[e.target.name] = +e.target.value;
    }

    _handleBoardConfigFormChange(e) {
        console.log(`${e.target.name} field changed. Value: ${e.target.value}`);
        
        this.boardConfiguration[e.target.name] = +e.target.value;
    }

    _handleGeneratePuzzleClick(appDiv) {
        const board = new Board(this.boardConfiguration);
        board.shuffle();

        console.log('New puzzle generated.');

        this.boards.push(board);
        this._renderBoards(appDiv);
    }
}