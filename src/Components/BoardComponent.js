class BoardComponent {
    constructor(board, configuration) {
        this.board = board;
        this.configuration = configuration;
    }

    render(parentNode) {
        const { tileHeight, tileWidth } = this.configuration;

        const boardDiv = document.createElement('div');
        boardDiv.classList.add('board-component');

        this._renderTileComponents(boardDiv);

        //Board width and height are computed based on the tile size
        const computedHeight = ((tileHeight * this.board.rowCount) + (this.board.rowCount * 2)) + 'px';
        const computedWidth = ((tileWidth * this.board.columnCount) + (this.board.columnCount * 2)) + 'px';
        
        boardDiv.style.height = computedHeight;
        boardDiv.style.width = computedWidth;
        boardDiv.style.maxHeight = computedHeight;
        boardDiv.style.maxWidth = computedWidth;

        parentNode.appendChild(boardDiv);
    }

    _renderTileComponents(boardDiv) {
        const { tileHeight, tileWidth } = this.configuration;

        boardDiv.innerHTML = '';

        const defaultTileColor = 'blue';
        let styles = { height: tileHeight, width: tileWidth, backgroundColor: defaultTileColor };
        
        for(const tile of this.board.tiles) {
            let text;
            
            // Render empty white tile for final tile
            if (tile.number === this.board.tileCount) {
                styles.backgroundColor = 'white';
                text = '\xa0';
            } else {
                styles.backgroundColor = defaultTileColor;
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