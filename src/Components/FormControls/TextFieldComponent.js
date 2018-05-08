class TextFieldComponent {
    constructor(onChange) {
        this._onChange = onChange;
    }

    render(parentNode) {
        const textFieldDiv = document.createElement('div');
        textFieldDiv.classList.add('text-field');

        const tileHeightLabel = document.createElement('label');
        tileHeightLabel.setAttribute('for', 'tile-height');
        tileHeightLabel.appendChild(document.createTextNode('Height: '));

        const tileHeightInput = document.createElement('input');
        tileHeightInput.setAttribute('id', 'tile-height');
        tileHeightInput.setAttribute('name', 'tileHeight');
        tileHeightInput.setAttribute('type', 'number');
        
        this._addEventListeners(tileHeightInput);

        textFieldDiv.appendChild(tileHeightLabel);
        textFieldDiv.appendChild(tileHeightInput);

        parentNode.appendChild(textFieldDiv);
    }

    _addEventListeners(input) {
        input.addEventListener('input', (e) => this._onChange(e));
    }
}