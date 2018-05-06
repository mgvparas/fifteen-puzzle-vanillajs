class BoardComponent {
    constructor(board) {
        this.board = board;
    }

    render(parentNode) {
        const boardDiv = document.createElement('div');
        boardDiv.classList.add('board-component');
        
        for(const tile of this.board.tiles) {
            let text;
            let styles = { height: 50, width: 50, backgroundColor: 'blue' };

            if (tile.number === this.board.tileCount) {
                styles.backgroundColor = 'white';
            } else {
                text = tile.number;
            };

            const tileComponent = new TileComponent(
                tile,
                text,
                styles,
                () => this._handleTileClick(tile, parentNode)
            );

            tileComponent.render(boardDiv);
        }

        parentNode.appendChild(boardDiv);
    }
    
    _handleTileClick(tile, parentNode) {
        console.log(`Tile ${tile.number} clicked!`);
    
        this.board.swapWithEmpty(tile)
    
        parentNode.innerHTML = "";
        this.render(parentNode);
    
        if (this.board.isSolved) {
            alert('Puzzle Solved! :)');
        }
    }
}