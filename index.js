class Tile {
    constructor(rowIndex, columnIndex, number) {
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.number = number;
    }
}

class Board {
    constructor(rowCount = 4, columnCount = 4) {
        this.tiles = [];

        let tileIndex = 0;
        for(let x = 0; x < rowCount; x++) {
            for(let y = 0; y < columnCount; y++) {
                this.tiles.push(new Tile(x, y, tileIndex++));
            }
        }
    }

    swapWithEmpty(tile) {
        const adjacentTiles = this._getAdjacentTiles(tile);
        const adjacentEmptyTile = adjacentTiles.find(x => x.number === 15);
        
        if (!adjacentEmptyTile) { 
            console.log("Adjacent empty tile not found. Can't swap.")
            return;
        }

        adjacentEmptyTile.number = tile.number;
        tile.number = 15;
        
        console.log(this.tiles);
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
}

class BoardComponent {
    constructor(board) {
        this.board = board;
    }

    render(parentNode) {
        const boardDiv = document.createElement("div");
        
        for(const tile of this.board.tiles) {
            const tileDiv = document.createElement("div");
            tileDiv.style.height = "50px";
            tileDiv.style.width = "50px";
            tileDiv.style.display = "inline-block";
            tileDiv.style.position = "absolute";
            tileDiv.style.left = (tile.columnIndex * 55) + "px";
            tileDiv.style.top = (tile.rowIndex * 55) + "px";
            // tileDiv.style.transition = "0.15s top ease-in-out, 0.15s left ease-in-out";
            
            if (tile.number === 15) {
                tileDiv.style.backgroundColor = "white";
            } else {
                tileDiv.style.backgroundColor = "blue";
                tileDiv.appendChild(document.createTextNode(tile.number));
            };

            tileDiv.addEventListener('click', () => {
                console.log(`Tile ${tile.number} clicked!`);

                this.board.swapWithEmpty(tile);

                parentNode.innerHTML = "";
                this.render(parentNode);
            });

            boardDiv.appendChild(tileDiv);
        }

        parentNode.appendChild(boardDiv);
    }
}

const board = new BoardComponent(new Board());
const main = document.getElementsByClassName("main")[0];
board.render(main);