class FifteenPuzzleApp {
    render(parentNode) {
        const appDiv = document.createElement('div');
        appDiv.classList.add('app');
        
        const configFormComponent = new ConfigurationFormComponent();
        configFormComponent.render(appDiv);

        parentNode.appendChild(appDiv);
    }
}