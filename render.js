function render() {
    renderStates();
    renderFilterLetters();
}

function renderStates() {
    let content = elementID('content');
    for (let i = 0; i < federalStates.length; i++) {
        const federalState = federalStates[i];

        createContent(federalState);
    }
}

function renderFilterLetters() {
    let filter = elementID('filter');
    for (let i = 0; i < filterLetters.length; i++) {
        const filterLetter = filterLetters[i];
        createListElement(filterLetter);
    }
    createFilterReset();
    cutline();
}

function cutline() {
    filter.innerHTML += cutline_HTML();
}

function createFilterReset() {
    filter.innerHTML += createFilterReset_HTML();
}

function createListElement(filterLetter) {
    filter.innerHTML += createListElement_HTML(filterLetter);
}

function createContent(federalState) {
    content.innerHTML += createContent_HTML(federalState);
}