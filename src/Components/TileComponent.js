class TileComponent {
    constructor(tile, text, styles, onClick) {
        this.tile = tile;
        this.text = text;
        this.styles = styles;

        this._onClick = onClick;
    }

    render(parentNode) {
        const { height, width, backgroundColor } = this.styles;

        const tileDiv = document.createElement("div");
        tileDiv.classList.add("tile-component");

        if (this.text) {
            tileDiv.appendChild(document.createTextNode(this.text));
        }

        tileDiv.style.height = height + 'px';
        tileDiv.style.width = width + 'px';
        tileDiv.style.backgroundColor = backgroundColor;
        tileDiv.style.left = (this.tile.columnIndex * 55) + "px";
        tileDiv.style.top = (this.tile.rowIndex * 55) + "px";
        
        this._addEventListeners(tileDiv);

        parentNode.appendChild(tileDiv);
    }

    _addEventListeners(tileDiv) {
        tileDiv.addEventListener('click', this._onClick);
    }
}