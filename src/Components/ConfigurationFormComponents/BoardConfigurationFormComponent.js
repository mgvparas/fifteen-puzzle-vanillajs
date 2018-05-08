class BoardConfigurationFormComponent {
    constructor(onFormChange) {
        this._onTextFieldChange = onFormChange;        
    }
    
    render(parentNode) {
        const formDiv = document.createElement('div');
        formDiv.classList.add('board-config-form-component');
        
        const header = document.createElement('h3');
        header.appendChild(document.createTextNode('Board Config'));
        formDiv.appendChild(header);

        const rowCountComponent = new TextFieldComponent({
            name: 'rowCount', 
            label: 'Row Count',
            onChange: this._onTextFieldChange
        });
        rowCountComponent.render(formDiv);

        const columnCountComponent = new TextFieldComponent({
            name: 'columnCount', 
            label: 'Column Count',
            onChange: this._onTextFieldChange
        });
        columnCountComponent.render(formDiv);

        parentNode.appendChild(formDiv);
    }
}