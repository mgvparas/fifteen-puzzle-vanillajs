class BoardConfigurationFormComponent {
    constructor(onFormChange) {
        this._onTextFieldChange = onFormChange;        
    }
    
    render(parentNode) {
        const formDiv = document.createElement('div');
        formDiv.classList.add('board-config-form-component');
        
        const header = document.createElement('h4');
        header.appendChild(document.createTextNode('How do you want your board set up?'));
        formDiv.appendChild(header);

        const rowCountComponent = new TextFieldComponent({
            name: 'rowCount', 
            label: 'No. of rows',
            defaultValue: 4,
            onChange: this._onTextFieldChange
        });
        rowCountComponent.render(formDiv);

        const columnCountComponent = new TextFieldComponent({
            name: 'columnCount', 
            label: 'No. of columns',
            defaultValue: 4,
            onChange: this._onTextFieldChange
        });
        columnCountComponent.render(formDiv);

        parentNode.appendChild(formDiv);
    }
}