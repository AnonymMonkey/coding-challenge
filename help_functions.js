async function loadJSON() {
    let response = await fetch('bundesland.json');
    federalStates = await response.json();
}

function elementID(id) {
    return document.getElementById(`${id}`);
}

function elementTagName(id) {
    return document.getElementsByTagName(`${id}`);
}

function federalState_(x, tag) {
    return x[tag];
}