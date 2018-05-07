class ConfigurationFormComponent {
    render(parentNode) {
        const configFormDiv = document.createElement('div');
        configFormDiv.classList.add('configuration-form-component');

        const tileConfigFormHeader = document.createElement('h3');
        tileConfigFormHeader.appendChild(document.createTextNode('Tile Config'));
        configFormDiv.appendChild(tileConfigFormHeader);

        const textFieldComponent = new TextFieldComponent();
        textFieldComponent.render(configFormDiv);

        const button = document.createElement('button');
        button.appendChild(document.createTextNode('Generate Puzzle'))
        configFormDiv.appendChild(button);

        parentNode.appendChild(configFormDiv);
    }
}