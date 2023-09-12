function cutline_HTML() {
    return /* html */`
    <div class="cutline my-3 bg-grey ms-2"></div>
    `;
}

function createFilterReset_HTML() {
    return /* html */`
    <p onclick="resetFilter()" class="bg-grey p-2">Reset Filter</p>
    `;
}
function createListElement_HTML(filterLetter) {
    return /* html */`
    <li id="letter_${filterLetter}" onclick="filterStates('${filterLetter}')" class="bg-grey p-2">${filterLetter}</li>
    `;
}
function createContent_HTML(federalState) {
    return /* html */`
    <a id="${federalState_(federalState, 'name')}" class="state-card d-flex flex-column text-decoration-none" href="${federalState_(federalState, 'url')} " target="_blank">
        <h3 class="fs-6 text-body-emphasis">${federalState_(federalState, 'name')}</h3>
        <p class="c-grey">${federalState_(federalState, 'population').toString().replace(".", ",")} Millionen</p>
    </a>
    `;
}