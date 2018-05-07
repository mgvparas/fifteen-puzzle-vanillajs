class BoardComponent {
    constructor(board) {
        this.board = board;
    }

    render(parentNode) {
        const boardDiv = document.createElement('div');
        boardDiv.classList.add('board-component');
        
        let styles = { height: 50, width: 50, backgroundColor: 'blue' };
        for(const tile of this.board.tiles) {
            let text;

            if (tile.number === this.board.tileCount) {
                styles.backgroundColor = 'white';
                text = '\xa0';
            } else {
                styles.backgroundColor = 'blue';
                text = tile.number;
            }

            const tileComponent = new TileComponent(
                tile,
                text,
                styles,
                () => this._handleTileClick(tile, parentNode)
            );

            tileComponent.render(boardDiv);
        }

        boardDiv.style.height = ((styles.height * this.board.rowCount) + (this.board.rowCount * 2)) + 'px';
        boardDiv.style.width = ((styles.width * this.board.columnCount) + (this.board.columnCount * 2)) + 'px';

        parentNode.appendChild(boardDiv);
    }
    
    _handleTileClick(tile, parentNode) {
        console.log(`Tile ${tile.number} clicked!`);
    
        this.board.swapWithEmpty(tile)
    
        parentNode.innerHTML = '';
        this.render(parentNode);
    
        if (this.board.isSolved) {
            alert('Puzzle Solved! :)');
        }
    }
}