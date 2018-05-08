class BoardComponent {
    constructor(board, configuration) {
        this.board = board;
        this.configuration = {
            tileHeight: configuration.tileHeight,
            tileWidth: 50,
            tileDefaultColor: 'blue'
        }
    }

    render(parentNode) {
        const { tileHeight, tileWidth } = this.configuration;

        const boardDiv = document.createElement('div');
        boardDiv.classList.add('board-component');

        this._renderTileComponents(boardDiv);

        boardDiv.style.height = ((tileHeight * this.board.rowCount) + (this.board.rowCount * 2)) + 'px';
        boardDiv.style.width = ((tileWidth * this.board.columnCount) + (this.board.columnCount * 2)) + 'px';

        parentNode.appendChild(boardDiv);
    }

    _renderTileComponents(boardDiv) {
        const { tileHeight, tileWidth, tileDefaultColor } = this.configuration;

        boardDiv.innerHTML = '';

        let styles = { height: tileHeight, width: tileWidth, backgroundColor: tileDefaultColor };
        
        for(const tile of this.board.tiles) {
            let text;

            if (tile.number === this.board.tileCount) {
                styles.backgroundColor = 'white';
                text = '\xa0';
            } else {
                styles.backgroundColor = tileDefaultColor;
                text = tile.number;
            }

            const tileComponent = new TileComponent(
                tile,
                text,
                styles,
                () => this._handleTileClick(tile, boardDiv)
            );

            tileComponent.render(boardDiv);
        }
    }
    
    _handleTileClick(tile, boardDiv) {
        console.log(`Tile ${tile.number} clicked!`);
    
        this.board.swapWithEmpty(tile)
    
        this._renderTileComponents(boardDiv);
    
        if (this.board.isSolved) {
            alert('Puzzle Solved! :)');
        }
    }
}