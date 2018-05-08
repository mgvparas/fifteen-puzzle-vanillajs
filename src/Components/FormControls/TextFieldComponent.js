class TextFieldComponent {
    constructor(params) {
        const { name, label, onChange } = params;

        this._name = name;
        this._label = label;
        this._onChange = onChange;
    }

    render(parentNode) {
        const textFieldDiv = document.createElement('div');
        textFieldDiv.classList.add('text-field');

        const label = document.createElement('label');
        label.appendChild(document.createTextNode(`${this._label}: `));

        const input = document.createElement('input');
        input.setAttribute('name', this._name);
        input.setAttribute('type', 'number');

        textFieldDiv.appendChild(label);
        textFieldDiv.appendChild(input);
        
        this._addEventListeners(input);

        parentNode.appendChild(textFieldDiv);
    }

    _addEventListeners(input) {
        input.addEventListener('input', (e) => this._onChange(e));
    }
}