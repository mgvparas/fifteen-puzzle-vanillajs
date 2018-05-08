class TileConfigurationFormComponent {
    constructor(onFormChange) {
        this._onTextFieldChange = onFormChange;        
    }
    
    render(parentNode) {
        const formDiv = document.createElement('div');
        formDiv.classList.add('tile-config-form-component');
        
        const tileConfigFormHeader = document.createElement('h3');
        tileConfigFormHeader.appendChild(document.createTextNode('Tile Config'));
        formDiv.appendChild(tileConfigFormHeader);

        const tileHeightComponent = new TextFieldComponent({
            name: 'tileHeight', 
            label: 'Height',
            onChange: this._onTextFieldChange
        });
        tileHeightComponent.render(formDiv);

        const tileWidthComponent = new TextFieldComponent({
            name: 'tileWidth', 
            label: 'Width',
            onChange: this._onTextFieldChange
        });
        tileWidthComponent.render(formDiv);

        parentNode.appendChild(formDiv);
    }
}