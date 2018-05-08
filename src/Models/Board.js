class Board {
    constructor(params) {
        const { rowCount = 4, columnCount = 4 } = params;

        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.tileCount = rowCount * columnCount;
        this.isSolved = true;
        this.tiles = this._createTiles(rowCount, columnCount);
    }

    swapWithEmpty(tile) {
        const adjacentTiles = this._getAdjacentTiles(tile);
        const adjacentEmptyTile = adjacentTiles.find(x => x.number === this.tileCount);
        
        if (!adjacentEmptyTile) { 
            console.log("Adjacent empty tile not found. Can't swap.")
            return;
        }

        adjacentEmptyTile.number = tile.number;
        tile.number = this.tileCount;

        console.log(this.tiles);
        
        this._checkIfSolved();
        console.log(`Puzzle is solved = ${this.isSolved}`);
    }

    /**
     * Get empty tile, then swap with any of its adjacent tiles, then repeat for x number of times
     */
    shuffle() {
        for(let x = 0; x < this.tileCount * 2; x++) {
            const emptyTile = this.tiles.find(x => x.number === this.tileCount);
            const adjacentTiles = this._getAdjacentTiles(emptyTile);
            const randomAdjacentTile = adjacentTiles[randomize(0, adjacentTiles.length-1)];
    
            this.swapWithEmpty(randomAdjacentTile);
            console.log(`shuffle step ${x + 1}`);
        }
    }

    _createTiles(rowCount, columnCount) {
        let tileNumber = 1;
        let tiles = [];

        for(let x = 0; x < rowCount; x++) {
            for(let y = 0; y < columnCount; y++) {
                tiles.push(new Tile(x, y, tileNumber++));
            }
        }
        
        return tiles;
    }

    _getAdjacentTiles(tile) {
        let adjacentTiles = [];
        
        adjacentTiles = this.tiles.filter(x => {
            if ((x.rowIndex === tile.rowIndex - 1 && x.columnIndex === tile.columnIndex) || //top adjacent tile
                (x.columnIndex === tile.columnIndex - 1 && x.rowIndex === tile.rowIndex) || //left adjacent tile
                (x.columnIndex === tile.columnIndex + 1 && x.rowIndex === tile.rowIndex) || //right adjacent tile
                (x.rowIndex === tile.rowIndex + 1 && x.columnIndex === tile.columnIndex)) { //bottom adjacent tile
                if (x) { //only return tiles on sides which are within the puzzle
                    console.log(x);
                    return x;
                }
            }
        });

        return adjacentTiles;
    }

    /**
     * Iterate through tiles and check if numbers are in order
     */
    _checkIfSolved() {
        let number = 1;
        for (let x = 0; x < this.tileCount; x++) {
            if (this.tiles[x].number !== number) {
                this.isSolved = false;
                return;
            }
            number++;
        }

        this.isSolved = true;
    }
}

//Math Functions
function randomize(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}