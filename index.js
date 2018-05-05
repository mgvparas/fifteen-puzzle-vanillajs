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

        let tileIndex = 0;
        for(let x = 0; x < rowCount; x++) {
            for(let y = 0; y < columnCount; y++) {
                this.tiles.push(new Tile(x, y, tileIndex++));
            }
        }
    }

    swapWithEmpty(tile) {
        const emptyTile = this.tiles.find(x => x.index === 15);

        emptyTile.index = tile.index;
        tile.index = 15;
        
        console.log(this.tiles);
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
            tileDiv.style.left = (tile.y * 55) + "px";
            tileDiv.style.top = (tile.x * 55) + "px";
            
            if (tile.index === 15) {
                tileDiv.style.backgroundColor = "white";
            } else {
                tileDiv.style.backgroundColor = "blue";
                tileDiv.appendChild(document.createTextNode(tile.index));
            };

            tileDiv.addEventListener('click', () => {
                console.log(`Tile ${tile.index} clicked!`);

                this.board.swapWithEmpty(tile);
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