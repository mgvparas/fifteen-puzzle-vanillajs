class FifteenPuzzleApp {
    constructor() {
        //default configurations
        this.boardComponentConfiguration = {
            tileHeight: 50,
            tileWidth: 50
        };
        this.boardConfiguration = {
            rowCount: 4,
            columnCount: 4
        };
        
        this.boards = [];
    }

    render(parentNode) {
        const appDiv = document.createElement('div');
        appDiv.classList.add('app');

        const puzzlesContainerDiv = document.createElement('div');
        puzzlesContainerDiv.classList.add('puzzles-container');
        
        const configFormComponent = new ConfigurationFormComponent(
            (e) => this._handleTileConfigFormChange(e),
            (e) => this._handleBoardConfigFormChange(e),
            () => this._handleGeneratePuzzleClick(puzzlesContainerDiv)
        );
        configFormComponent.render(appDiv);

        const puzzlesContainerHeader = document.createElement('h3');
        puzzlesContainerHeader.appendChild(document.createTextNode('Puzzles'));
        appDiv.appendChild(puzzlesContainerHeader);

        appDiv.appendChild(puzzlesContainerDiv);

        parentNode.appendChild(appDiv);
    }

    _renderBoard(puzzlesContainerDiv) {
        if (this.boards.length > 0) {
            const latestBoard = this.boards[this.boards.length - 1];
            const boardComponent = new BoardComponent(
                latestBoard, 
                Object.assign({}, this.boardComponentConfiguration));
            boardComponent.render(puzzlesContainerDiv);
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

    _handleGeneratePuzzleClick(puzzlesContainerDiv) {
        const board = new Board(Object.assign({}, this.boardConfiguration));
        board.shuffle();

        console.log('New puzzle generated.');

        this.boards.push(board);
        this._renderBoard(puzzlesContainerDiv);
    }
}