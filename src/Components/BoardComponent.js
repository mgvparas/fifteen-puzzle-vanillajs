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
            
            if (tile.number === this.board.tileCount) {
                tileDiv.style.backgroundColor = "white";
            } else {
                tileDiv.style.backgroundColor = "blue";
                tileDiv.appendChild(document.createTextNode(tile.number));
            };

            tileDiv.addEventListener('click', () => {
                console.log(`Tile ${tile.number} clicked!`);

                this.board.swapWithEmpty(tile)

                parentNode.innerHTML = "";
                this.render(parentNode);

                if (this.board.isSolved) {
                    alert('Puzzle Solved! :)');
                }
            });

            boardDiv.appendChild(tileDiv);
        }

        parentNode.appendChild(boardDiv);
    }
}