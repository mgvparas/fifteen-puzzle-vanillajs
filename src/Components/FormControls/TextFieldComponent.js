class TextFieldComponent {
    render(parentNode) {
        const textFieldDiv = document.createElement('div');
        textFieldDiv.classList.add('text-field');

        const tileHeightLabel = document.createElement('label');
        tileHeightLabel.setAttribute('for', 'tile-height');
        tileHeightLabel.appendChild(document.createTextNode('Height: '));

        const tileHeightInput = document.createElement('input');
        tileHeightInput.setAttribute('id', 'tile-height');
        tileHeightInput.setAttribute('type', 'text');

        textFieldDiv.appendChild(tileHeightLabel);
        textFieldDiv.appendChild(tileHeightInput);

        parentNode.appendChild(textFieldDiv);
    }
}