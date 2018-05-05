class Tile {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
}

class Board {
    constructor(rowCount = 4, columnCount = 4) {
        this.tiles = [];
        this.emptyTile = {};

        let tileIndex = 0;
        for(let x = 0; x < rowCount; x++) {
            for(let y = 0; y < columnCount; y++) {
                if (x === rowCount - 1 && y === columnCount - 1) {
                    this.emptyTile = new Tile(x, y, tileIndex++);
                } else {
                    this.tiles.push(new Tile(x, y, tileIndex++));
                }
            }
        }
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
            tileDiv.style.backgroundColor = "blue";
            tileDiv.style.display = "inline-block";
            tileDiv.style.position = "absolute";
            tileDiv.style.left = (tile.y * 55) + "px";
            tileDiv.style.top = (tile.x * 55) + "px";
            
            tileDiv.appendChild(document.createTextNode(tile.index));

            tileDiv.addEventListener('click', () => {
                console.log(`Tile ${tile.index} clicked!`);
            });

            boardDiv.appendChild(tileDiv);
        }

        const emptyTileDiv = document.createElement("div");
        emptyTileDiv.style.height = "50px";
        emptyTileDiv.style.width = "50px";
        emptyTileDiv.style.background = "transparent";
        emptyTileDiv.style.display = "inline-block";
        emptyTileDiv.style.position = "absolute";
        emptyTileDiv.style.left = (this.board.emptyTile.y * 55) + "px";
        emptyTileDiv.style.top = (this.board.emptyTile.x * 55) + "px";

        boardDiv.appendChild(emptyTileDiv);

        parentNode.appendChild(boardDiv);
    }
}

const board = new BoardComponent(new Board());
const main = document.getElementsByClassName("main")[0];
board.render(main);