function filterStateLetters() {
    for (let i = 0; i < federalStates.length; i++) {
        const getFirstLetter = federalStates[i]['name'].charAt(0);
        if (filterLetters.indexOf(getFirstLetter) === -1) {
            filterLetters.push(getFirstLetter);
        }
    }
}

function filterStates(letter) {
    const contentElement = elementID('content');
    const innerElements = elementTagName('a');

    for (let i = 0; i < innerElements.length; i++) {
        const element = innerElements[i];

        // Überprüfe, ob die ID des Elements mit dem Buchstaben beginnt
        if (element.id && element.id.startsWith(letter)) {
            element.classList.remove('d-none');
        } else {
            element.classList.add('d-none');
        }
    }
}

function resetFilter() {
    const contentElement = elementID('content');
    const innerElements = elementTagName('*');

    for (let i = 0; i < innerElements.length; i++) {
        innerElements[i].classList.remove('d-none');
    }
}