class ConfigurationFormComponent {
    constructor(onTileConfigFormChange, onBoardConfigFormChange, onGeneratePuzzleClick) {
        this._onTileConfigFormChange = onTileConfigFormChange;
        this._onBoardConfigFormChange = onBoardConfigFormChange;
        this._onGeneratePuzzleClick = onGeneratePuzzleClick;
    }

    render(parentNode) {
        const configFormDiv = document.createElement('div');
        configFormDiv.classList.add('config-form-component');

        const tileConfigFormComponent = new TileConfigurationFormComponent(this._onTileConfigFormChange);
        tileConfigFormComponent.render(configFormDiv);

        const boardConfigFormComponent = new BoardConfigurationFormComponent(this._onBoardConfigFormChange);
        boardConfigFormComponent.render(configFormDiv);

        configFormDiv.appendChild(document.createElement('br'));

        const button = document.createElement('div');
        button.classList.add('generate-puzzle-button');
        button.appendChild(document.createTextNode('Generate Puzzle'));
        configFormDiv.appendChild(button);

        this._addEventListeners(button);

        parentNode.appendChild(configFormDiv);
    }

    _addEventListeners(button) {
        button.addEventListener('click', this._onGeneratePuzzleClick);
    }
}