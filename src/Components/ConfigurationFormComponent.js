class ConfigurationFormComponent {
    constructor(onFormChange, onGeneratePuzzleClick) {
        this._onTextFieldChange = onFormChange;
        this._onGeneratePuzzleClick = onGeneratePuzzleClick;
    }

    render(parentNode) {
        const configFormDiv = document.createElement('div');
        configFormDiv.classList.add('configuration-form-component');

        const tileConfigFormHeader = document.createElement('h3');
        tileConfigFormHeader.appendChild(document.createTextNode('Tile Config'));
        configFormDiv.appendChild(tileConfigFormHeader);

        const tileHeightComponent = new TextFieldComponent({
            name: 'tileHeight', 
            label: 'Height',
            onChange: this._onTextFieldChange
        });
        tileHeightComponent.render(configFormDiv);

        const tileWidthComponent = new TextFieldComponent({
            name: 'tileWidth', 
            label: 'Width',
            onChange: this._onTextFieldChange
        });
        tileWidthComponent.render(configFormDiv);

        const button = document.createElement('button');
        button.appendChild(document.createTextNode('Generate Puzzle'));
        configFormDiv.appendChild(button);

        this._addButtonEventListeners(button);

        parentNode.appendChild(configFormDiv);
    }

    _addButtonEventListeners(button) {
        button.addEventListener('click', this._onGeneratePuzzleClick);
    }
}